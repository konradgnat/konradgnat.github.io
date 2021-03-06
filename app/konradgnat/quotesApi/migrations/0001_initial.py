# Generated by Django 3.1.4 on 2021-01-01 18:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Quote',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
                ('author', models.CharField(max_length=200)),
                ('tags', models.CharField(max_length=200)),
                ('rating', models.IntegerField(choices=[(1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5'), (6, '6'), (7, '7'), (8, '8'), (8, '8'), (10, '10')], default=5)),
                ('type', models.CharField(choices=[('GENERAL', 'GENERAL')], default='GENERAL', max_length=200)),
            ],
        ),
    ]
