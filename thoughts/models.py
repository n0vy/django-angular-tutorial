from django import forms
from django.db import models

from authentication.models.account import Account


class Thought(models.Model):
    author = models.ForeignKey(Account)
    content = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return '{0} thinks "{1}"'.format(self.author.user.username, self.content)
