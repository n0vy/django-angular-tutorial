from rest_framework import viewsets

from thoughts.models import Thought
from thoughts.serializers import ThoughtSerializer


class ThoughtViewSet(viewsets.ModelViewSet):
    queryset = Thought.objects.all()
    serializer_class = ThoughtSerializer
