# Generated by Django 2.2.12 on 2020-04-08 06:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Encuesta',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('dependencia', models.CharField(max_length=255)),
                ('p2_name_jefe', models.CharField(max_length=255)),
                ('p2_dependencia_jefe', models.CharField(max_length=255)),
                ('p2_name_pers1', models.CharField(max_length=255)),
                ('p2_dependencia_pers1', models.CharField(max_length=255)),
                ('p2_name_pers2', models.CharField(max_length=255)),
                ('p2_dependencia_pers2', models.CharField(max_length=255)),
                ('p2_name_pers3', models.CharField(max_length=255)),
                ('p2_dependencia_pers3', models.CharField(max_length=255)),
                ('p2_dependencia_pers4', models.CharField(max_length=255)),
                ('p2_name_pers4', models.CharField(max_length=255)),
                ('p2_dependencia_pers5', models.CharField(max_length=255)),
                ('p2_name_pers5', models.CharField(max_length=255)),
                ('p3_salario_jefe', models.IntegerField()),
                ('p3_salario_pers1', models.IntegerField()),
                ('p3_salario_pers2', models.IntegerField()),
                ('p3_salario_pers3', models.IntegerField()),
                ('p3_salario_pers4', models.IntegerField()),
                ('p3_salario_pers5', models.IntegerField()),
                ('p4_salario_jefe', models.IntegerField()),
                ('p4_salario_pers1', models.IntegerField()),
                ('p4_salario_pers2', models.IntegerField()),
                ('p4_salario_pers3', models.IntegerField()),
                ('p4_salario_pers4', models.IntegerField()),
                ('p4_salario_pers5', models.IntegerField()),
                ('p5_cantidad', models.IntegerField()),
                ('p6_cantidad', models.CharField(max_length=255)),
                ('p7_probabilidad', models.FloatField()),
                ('p8_cantidad', models.CharField(max_length=255)),
                ('p9_probabilidad', models.FloatField()),
                ('p10_cantidad', models.IntegerField()),
                ('p11_salario', models.IntegerField()),
                ('p12_probabilidad1', models.FloatField()),
                ('p12_probabilidad2', models.FloatField()),
                ('p13_incomodo', models.CharField(max_length=255)),
                ('p13_esprta', models.CharField(max_length=255)),
                ('p13_aceptable', models.CharField(max_length=255)),
            ],
        ),
    ]
