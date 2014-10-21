from rest_framework import permissions
from rest_framework import generics

from authentication.models.account import Account
from authentication.permissions import IsAccountOwnerOrStaff
from authentication.serializers.account import AccountSerializer

from thoughts.models import Thought
from thoughts.serializers import ThoughtSerializer


class AccountRetrieveUpdateView(generics.RetrieveUpdateAPIView):
    lookup_field = 'user__username'
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return (permissions.AllowAny(),)
        return (IsAccountOwnerOrStaff(),)


class AccountThoughtsListView(generics.ListAPIView):
    serializer_class = ThoughtSerializer

    def get_queryset(self):
        username = self.kwargs['user__username']
        return Thought.objects.filter(author__user__username=username)
