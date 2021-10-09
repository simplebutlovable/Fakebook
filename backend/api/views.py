from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth import authenticate
from django.contrib.auth.decorators import login_required


from api.serializers import AccountSerializer, UserTokenSerializer

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

def test(request):
    return HttpResponse('Hello????????')



class RegisterView(APIView):
    def post(self, request, *args, **kwargs):
        serializer_class = AccountSerializer(data =request.data)

        if serializer_class.is_valid():
            user = serializer_class.save()
            print(user)
            token = UserTokenSerializer.get_token(user)
            refresh = str (token)
            access = str (token.access_token)
            return Response ({"refresh":refresh, "access":access}, status = status.HTTP_200_OK)
        
        return Response ({"Bad Request"},status = status.HTTP_400_BAD_REQUEST)


class GetUserData(APIView):
    def get(self, request, *args, **kwargs):
        serializer_class = AccountSerializer (request.user)
        return Response({"data": serializer_class.data},status = status.HTTP_200_OK)
        