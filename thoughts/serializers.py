from rest_framework import serializers

from authentication.serializers.account import AccountSerializer
from thoughts.models import Thought


class ThoughtSerializer(serializers.ModelSerializer):
    author = AccountSerializer()

    class Meta:
        model = Thought
        fields = ('id', 'author', 'content', 'created_at', 'updated_at')
