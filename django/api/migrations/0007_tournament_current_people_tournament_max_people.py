# Generated by Django 5.1.4 on 2024-12-16 06:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_tournament_tournamentmatch'),
    ]

    operations = [
        migrations.AddField(
            model_name='tournament',
            name='current_people',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='tournament',
            name='max_people',
            field=models.IntegerField(default=0),
        ),
    ]