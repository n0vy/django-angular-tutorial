from rest_framework import generics, permissions

from plus_one.models import PlusOne
from plus_one.serializers import PlusOneSerializer


class CreateDestroyAPIView(generics.CreateAPIView, generics.DestroyAPIView):
    pass


class PlusOneCreateDestroyView(CreateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = PlusOneSerializer

    def get_queryset(self):
        account_id = self.request.user.account.id
        thought_id = self.kwargs.get('pk', None)

        return PlusOne.objects.filter(account=account_id, thought=thought_id)
