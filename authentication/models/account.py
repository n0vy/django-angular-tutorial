from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save, pre_delete
from django.dispatch import receiver


class Account(models.Model):
    user = models.OneToOneField(User)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return self.user.username

    @receiver(post_save, sender=User)
    def create_account_for_user(sender, instance=None, created=False, **kwargs):
        if created:
            Account.objects.get_or_create(user=instance)

    @receiver(pre_delete, sender=User)
    def delete_account_for_user(sender, instance=None, **kwargs):
        if instance:
            account = Account.objects.get(user_id=instance.id)
            account.delete()
