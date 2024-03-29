# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('thoughts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='thought',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2014, 10, 19, 1, 30, 16, 542940), auto_now_add=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='thought',
            name='updated_at',
            field=models.DateTimeField(default=datetime.datetime(2014, 10, 19, 1, 30, 32, 688156), auto_now=True),
            preserve_default=False,
        ),
    ]
