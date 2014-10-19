from django.contrib.auth.models import User

from rest_framework import mixins
from rest_framework import permissions
from rest_framework import viewsets

from authentication.serializers.user import UserSerializer


class CreateDestroyViewSet(mixins.CreateModelMixin,
                           mixins.DestroyModelMixin,
                           viewsets.GenericViewSet):
    pass


class UserViewSet(CreateDestroyViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    permission_classes = (permissions.AllowAny,)
