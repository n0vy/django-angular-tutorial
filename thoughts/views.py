from rest_framework import generics

from thoughts.models import Thought
from thoughts.serializers import ThoughtSerializer


class ThoughtListCreateView(generics.ListCreateAPIView):
    queryset = Thought.objects.all()
    serializer_class = ThoughtSerializer


class ThoughtRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Thought.objects.all()
    serializer_class = ThoughtSerializer

    def pre_save(self, obj):
        self.author = self.request.user
        return super(ThoughtRetrieveUpdateDestroyView, self).pre_save(obj)


