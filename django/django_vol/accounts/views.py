from django.shortcuts import render, redirect
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import viewsets, status
from django.contrib.auth.models import User
from .models import Profile
from .serializers import UserSerializer, ProfileSerializer
from django.contrib.auth import logout, login
from .services import get_oauth_tokens, get_user_info, create_or_update_user

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserSerializer
	permission_classes = [IsAuthenticated]

	@action(detail=True, methods=['get'], url_path='get-myname')
	def check_login_status(self, request, pk=None):
		if pk == 'me':
			return Response({'username': request.user.username})
		user = self.get_object()
		return Response({'username': user.username})

	@action(detail=False, methods=['get'], url_path='online-users')
	def get_logged_in_users(self, request):
		online_users = User.objects.filter(profile__is_online=True)
		usernames = [user.username for user in online_users]
		return Response({'users': usernames})

	@action(detail=True, methods=['get'], url_path='profile')
	def get_profile(self, request, pk=None):
		if pk == 'me':
			profile = request.user.profile
		else:
			try:
				profile = self.get_queryset().get(pk=pk).profile
			except User.DoesNotExist:
				return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

		serializer = ProfileSerializer(profile)
		return Response(serializer.data)

class OAuthViewSet(viewsets.ViewSet):
	permission_classes = [IsAuthenticated]

	@action(detail=False, methods=['get'], url_path='callback', permission_classes=[AllowAny])
	def oauth_callback(self, request):
		code = request.GET.get('code')

		if not code:
			return Response({'error': 'No code provided'}, status=status.HTTP_400_BAD_REQUEST)
	
		tokens = get_oauth_tokens(code)

		if not tokens:
			return Response({'error': 'Failed to get token'}, status=status.HTTP_400_BAD_REQUEST)

		access_token = tokens.get('access_token')
		if not access_token:
			return Response({'error': 'Failed to get access token'}, status=status.HTTP_400_BAD_REQUEST)

		user_info = get_user_info(access_token)
		if not user_info:
			return Response({'error': 'Failed to fetch user info'}, status=status.HTTP_400_BAD_REQUEST)

		user = create_or_update_user(user_info)
		login(request, user)
		return redirect('home:home')

	@action(detail=False, methods=['get'], url_path='logout')
	def logout_view(self, request):
		request.user.profile.is_online = False
		request.user.profile.save()
		logout(request)
		return Response({'message': 'Logged out successfully'}, status=status.HTTP_200_OK)