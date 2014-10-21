from django.db import models

from authentication.models.account import Account
from thoughts.models import Thought


class PlusOne(models.Model):
    thought = models.ForeignKey(Thought)
    account = models.ForeignKey(Account)

    class Meta:
        unique_together = (('thought', 'account'),)
