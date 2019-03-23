from __future__ import unicode_literals
from django.contrib.postgres.operations import HStoreExtension, TrigramExtension

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('movielistapp', '0011_auto_20190314_1622'),
    ]

    operations = [
        HStoreExtension(),
        TrigramExtension(),
    ]
