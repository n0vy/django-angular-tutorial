from rest_framework import serializers

from authentication.models.account import Account


class AccountSerializer(serializers.ModelSerializer):
    account_id = serializers.IntegerField(source='id')
    user_id = serializers.IntegerField(source='user.id')
    username = serializers.CharField(source='user.username')
    email = serializers.CharField(source='user.email')

    class Meta:
        model = Account
        fields = (
            'account_id', 'user_id', 'username', 'email', 'tagline',
            'created_at', 'updated_at'
        )
