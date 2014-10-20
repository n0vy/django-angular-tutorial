import json

from django.contrib.auth import authenticate, login, logout

from rest_framework import permissions, views
from rest_framework.response import Response

from authentication.serializers.user import UserSerializer


class LoginView(views.APIView):
    def post(self, request, format=None):
        data = json.loads(request.body)

        username = data.get('username', None)
        password = data.get('password', None)

        user = authenticate(username=username, password=password)

        if user is not None:
            if user.is_active:
                login(request, user)

                serialized = UserSerializer(user)

                return Response(serialized.data)
            else:
                return Response({
                    'error': 'Your account has been disabled.'
                })
        else:
            return Response({
                'error': 'Sorry! Looks like your username or password is wrong!'
            })


class LogoutView(views.APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, format=None):
        logout(request)

        return Response({'status': 200})
