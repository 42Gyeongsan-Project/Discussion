from django.shortcuts import redirect
from django.conf import settings
import requests
from django.contrib.auth import login
from django.contrib.auth.models import User
import urllib.parse
from api.models import User

def oauth_login(request):
    # 42 로그인 페이지로 리다이렉트하는 URL을 생성
    params = {
        'client_id': settings.OAUTH_ID,
        'redirect_uri': settings.OAUTH_REDIRECT_URI,#인증이후 어떤 uri로 갈것인가
        'response_type': 'code',#코드 방식으로 암호화
        'scope': 'public projects profile elearning tig forum' #권한 추가 어떤 권한을 요청할 것인지
    }
    #실제 redirect uri와 동일
    auth_url = f"{settings.OAUTH_AUTH_URL}?{urllib.parse.urlencode(params)}"
    # print("Generated URL:", auth_url)
    return redirect(auth_url)

def oauth_callback(request):
    # 42로부터 받은 인증 코드를 추출, "GET /oauth/callback/?code=bfc3b609d82... 에서 code 추출
    code = request.GET.get('code')
    # print(code)

    #서버로부터 받은 authorication_code를 실제데이터를 호출할 수 있는 토큰으로 교환
    token_response = requests.post(settings.OAUTH_TOKEN_URL, data={
        'grant_type':'authorization_code',
        'client_id': settings.OAUTH_ID,
        'client_secret': settings.OAUTH_SECRET,
        'code': code,
        'redirect_uri': settings.OAUTH_REDIRECT_URI
    })
    #post의 응답은 response 객체를 반환, 실제 api를 요청할 수 있는 토큰이 담겨져 있음
    # print(token_response.json())
    # >> {'access_token': 'b63cf...', 'token_type': 'bearer', 'expires_in': 6947, 'refresh_token': '2aedf...', 'scope': 'public projects profile elearning tig forum', 'created_at': 1734260103, 'secret_valid_until': 1736677672}
    access_token = token_response.json().get('access_token')

    
    # access_token을 통해 42api에 접근하여 정보를 가져옴 bearer는 oauth,jwt통신의 rfc규약

    user_response = requests.get(settings.OAUTH_API_URL, headers={
        'Authorization': f'Bearer {access_token}'
    })
    # print("여기\n",user_response.json())
    #마찬가지로 객체를 json으로 변경
    user_data = user_response.json()
    
    
    # get_or_create는 튜플 반환 ,username필드에 고유한값인지 확인하고 없다면 생성
    user, created = User.objects.get_or_create(
        username=user_data['login'],
        # defaults={
        #     'email': user_data['email'],
        #     'first_name': user_data.get('first_name', ''),
        #     'last_name': user_data.get('last_name', '')
        # }
    )
    
    # 사용자를 로그인 상태로 만듬
    login(request, user)
    
#     # 원하는 페이지로 리다이렉트
    return redirect('http://localhost:8001')