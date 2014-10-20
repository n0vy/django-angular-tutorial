from rest_framework import generics

from authentication.models.account import Account
from thoughts.models import Thought
from thoughts.serializers import ThoughtSerializer


class ThoughtListCreateView(generics.ListCreateAPIView):
    queryset = Thought.objects.order_by('-created_at')
    serializer_class = ThoughtSerializer

    def pre_save(self, obj):
        obj.author = Account.objects.get(user=self.request.user)
        return super(ThoughtListCreateView, self).pre_save(obj)


class ThoughtRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Thought.objects.all()
    serializer_class = ThoughtSerializer
