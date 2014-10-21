from rest_framework import serializers

from plus_one.models import PlusOne


class PlusOneSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlusOne
        fields = ('account_id', 'thought_id',)
