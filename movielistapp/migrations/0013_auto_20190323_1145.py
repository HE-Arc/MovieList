# Generated by Django 2.1.7 on 2019-03-23 10:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('movielistapp', '0012_auto_20190314_1714'),
    ]

    operations = [
        migrations.RenameField(
            model_name='movie',
            old_name='country',
            new_name='countrys',
        ),
        migrations.RenameField(
            model_name='movie',
            old_name='scenarist',
            new_name='scenarists',
        ),
    ]
