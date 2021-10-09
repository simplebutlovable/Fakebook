from api.models import Account

from django.contrib.auth import login, authenticate
from django.contrib.auth.hashers import make_password

from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from datetime import timedelta
import random


class UserTokenSerializer (TokenObtainPairSerializer):
    @classmethod
    def get_token(cls,user):
        token = super(UserTokenSerializer, cls).get_token(user)
        return token



class AccountSerializer (serializers.ModelSerializer):
    password = serializers.CharField (write_only = True, 
                                    required =True, 
                                    style={'input_type':'password', 'placeholder':'Password'})

    def create(self, validated_data):
        

        user = Account.objects.create_user(
            username ="1",
            email = validated_data['email'],
            first_name = validated_data['first_name'],
            last_name = validated_data ['last_name'],
            birthdate = validated_data['birthdate'],
            gender = validated_data ['gender'],
            password = validated_data['password']
        )

        return user

    class Meta:
        model = Account
        fields = ('email','first_name','last_name','birthdate','gender','password')