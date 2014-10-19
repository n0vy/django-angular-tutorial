from rest_framework import permissions
from rest_framework import generics

from authentication.models.account import Account
from authentication.permissions import IsAccountOwnerOrStaff
from authentication.serializers.account import AccountSerializer


class AccountRetrieveUpdateView(generics.RetrieveUpdateAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return (permissions.AllowAny(),)
        return (IsAccountOwnerOrStaff(),)
