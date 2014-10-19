from rest_framework import viewsets
from rest_framework import permissions

from authentication.models.account import Account
from authentication.permissions import IsAccountOwnerOrStaff
from authentication.serializers.account import AccountSerializer


class AccountViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

    def get_permissions(self):
        if self.request.method == 'POST':
            return (permissions.AllowAny(),)

        return (IsAccountOwnerOrStaff(),)
