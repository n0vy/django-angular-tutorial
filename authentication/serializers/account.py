from rest_framework import serializers

from authentication.models.account import Account


class UserField(serializers.RelatedField):
    def to_native(self, value):
        return {
            'username': value.username
        }


class AccountSerializer(serializers.ModelSerializer):
    user = UserField()

    class Meta:
        model = Account
        fields = ('id', 'user', 'created_at', 'updated_at')

    def restore_object(self, attrs, instance=None):
        if instance:
            instance.user = attrs.get('user', instance.user)
            instance.created_at = attrs.get('created_at', instance.created_at)
            instance.updated_at = attrs.get('updated_at', instance.updated_at)

            return instance

        return Account(**attrs)
