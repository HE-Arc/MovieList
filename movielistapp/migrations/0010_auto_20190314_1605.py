# Generated by Django 2.1.7 on 2019-03-14 15:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movielistapp', '0009_merge_20190313_1056'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='released',
            field=models.DateField(null=True),
        ),
    ]