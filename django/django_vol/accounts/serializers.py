from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile

class UserSerializer(serializers.ModelSerializer):
	is_online = serializers.SerializerMethodField()

	class Meta:
		model = User
		fields = ['id','username', 'first_name', 'last_name', 'email', 'is_online']
	
	def get_is_online(self, obj):
		return obj.profile.is_online if hasattr(obj, 'profile') else False

class ProfileSerializer(serializers.ModelSerializer):
	username = serializers.CharField(source='user.username', read_only=True)

	class Meta:
		model = Profile
		fields = ['username', 'image', 'win_count', 'lose_count', 'status']
		