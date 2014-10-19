from rest_framework import serializers

from authentication.serializers.account import AccountSerializer
from thoughts.models import Thought


class ThoughtSerializer(serializers.ModelSerializer):
    author = AccountSerializer(required=False)

    class Meta:
        model = Thought

        fields = ('id', 'author', 'content', 'created_at', 'updated_at')

    def get_validation_exclusions(self):
        exclusions = super(ThoughtSerializer, self).get_validation_exclusions()

        return exclusions + ['author']
