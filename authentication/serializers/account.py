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

    def restore_object(self, attrs, instance=None):
        account = super(AccountSerializer, self).restore_object(attrs, instance)

        if account:
            account.user.email = attrs.get('user.email', account.user.email)
            account.user.save()

        return account
