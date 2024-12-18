from django.urls import path
from . import views

urlpatterns = [
    path('login/42/', views.oauth_login, name='oauth_login'),
    path('callback/', views.oauth_callback, name='oauth_callback'),   
]