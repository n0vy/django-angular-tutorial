from rest_framework import mixins
from rest_framework import permissions
from rest_framework import viewsets

from authentication.models.account import Account
from authentication.permissions import IsAccountOwnerOrStaff
from authentication.serializers.account import AccountSerializer


class ListRetrieveUpdateViewSet(mixins.ListModelMixin,
                                mixins.RetrieveModelMixin,
                                mixins.UpdateModelMixin,
                                viewsets.GenericViewSet):
    pass


class AccountViewSet(ListRetrieveUpdateViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

    def get_permissions(self):
        if self.request.method == 'POST':
            return (permissions.AllowAny(),)

        return (IsAccountOwnerOrStaff(),)
