
from rest_framework import serializers

from encuestas.models import Encuesta

class EncuestaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Encuesta
        fields = ('name', 'dependencia',
          'p2_name_jefe', 'p2_dependencia_jefe',
          'p2_name_pers1', 'p2_dependencia_pers1',
          'p2_name_pers2', 'p2_dependencia_pers2',
          'p2_name_pers1', 'p2_dependencia_pers3',
          'p2_name_pers4', 'p2_dependencia_pers4',
          'p2_name_pers5', 'p2_dependencia_pers5',
          'p3_salario_jefe',
          'p3_salario_pers1',
          'p3_salario_pers2',
          'p3_salario_pers3',
          'p3_salario_pers4',
          'p3_salario_pers5',
          'p4_salario_jefe',
          'p4_salario_pers1',
          'p4_salario_pers2',
          'p4_salario_pers3',
          'p4_salario_pers4',
          'p4_salario_pers5',
          'p5_cantidad',
          'p6_cantidad',
          'p7_probabilidad',
          'p8_cantidad',
          'p9_probabilidad',
          'p10_cantidad',
          'p11_salario',
          'p12_probabilidad1',
          'p12_probabilidad2',
          'p13_incomodo',
          'p13_esprta',
          'p13_aceptable')
