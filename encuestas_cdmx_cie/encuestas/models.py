from django.db import models
#from accounts.models import User

class Encuesta(models.Model):
    name = models.CharField(max_length=255)
    '''
    pregunta 1
    Comienza indicando tu área de trabajo
    '''

    dependencia = models.CharField(max_length=255)
    '''
    pregunta 2
    Escribe el nombre de su jefe y las cinco personas con las que trabaja más de
    cerca y en qué división están (en caso de que la divisón no aparezca, por
    favor escribe su nombre)'''
    p2_name_jefe = models.CharField(max_length=255)
    p2_dependencia_jefe = models.CharField(max_length=255)
    p2_name_pers1 = models.CharField(max_length=255)
    p2_dependencia_pers1 = models.CharField(max_length=255)
    p2_name_pers2 = models.CharField(max_length=255)
    p2_dependencia_pers2 = models.CharField(max_length=255)
    p2_name_pers3 = models.CharField(max_length=255)
    p2_dependencia_pers3 = models.CharField(max_length=255)
    p2_name_pers4 = models.CharField(max_length=255)
    p2_dependencia_pers4 = models.CharField(max_length=255)
    p2_name_pers5 = models.CharField(max_length=255)
    p2_dependencia_pers5 = models.CharField(max_length=255)

    '''
    pregunta 3
    Hagamos el siguiente ejercicio. Quiere adivinar el salario mensual de su jefe
    y de sus cinco compañeros de trabajo (con los que tiene una relación laboral
    más cercana).
    '''
    p3_salario_jefe = models.IntegerField()
    p3_salario_pers1 = models.IntegerField()
    p3_salario_pers2 = models.IntegerField()
    p3_salario_pers3 = models.IntegerField()
    p3_salario_pers4 = models.IntegerField()
    p3_salario_pers5 = models.IntegerField()

    '''
    pregunta 4
    ¿Cuánto merecen de acuerdo a su experiencia y nivel de estudios?
    '''
    p4_salario_jefe = models.IntegerField()
    p4_salario_pers1 = models.IntegerField()
    p4_salario_pers2 = models.IntegerField()
    p4_salario_pers3 = models.IntegerField()
    p4_salario_pers4 = models.IntegerField()
    p4_salario_pers5 = models.IntegerField()

    '''
    pregunta 5
    ¿Cuál es la máxima cantidad que estarías dispuesto a pagar por esta información?
    '''
    p5_cantidad = models.IntegerField()

    '''
    pregunta 6
    ¿Cuál es la máxima cantidad que estarías dispuesto a pagar la información de
    qué cara salió?
    '''
    p6_cantidad = models.IntegerField(max_length=255)

    '''
    pregunta 7
    ¿Cuál crees que es la probabilidad de que pronostiques el salario promedio sin
    desviarte más del 5% de su valor verdadero (es decir, de ganar)?
    '''
    p7_probabilidad = models.FloatField()

    '''
    pregunta 8
    ¿Cuál es la cantidad mínima que aceptarías para dejar de jugar este juego de
    predicción? Recuerda que no tu respuesta no tiene consecuencias mayores.
    '''
    p8_cantidad = models.CharField(max_length=255)

    '''
    pregunta 9
    ¿Cuál es la nueva probabilidad de que gane ese juego (tener una predicción no
    más lejana del 5% del valor real)?
    '''
    p9_probabilidad = models.FloatField()

    '''
    pregunta 10
    ¿Cuánto deberíamos pagarte para que renunciaras a jugar el juego?
    '''
    p10_cantidad = models.IntegerField()

    '''
    pregunta 11
    ¿Cuál crees que es el salario mensual promedio de todos tus compañeros en una
    posición similar a la tuya en el mes de febrero de 2020?
    '''
    p11_salario = models.IntegerField()

    '''
    pregunta 12
    ¿Con cuál probabilidad crees que el salario promedio verdadero caiga dentro
    de las siguientes categorías?
    '''
    p12_probabilidad1 = models.FloatField()
    p12_probabilidad2 = models.FloatField()

    '''
    pregunta 13
    '''
    # ¿Le parece incómodo preguntar información salarial a sus compañeros?
    p13_incomodo  = models.CharField(max_length=255)
    # ¿Si le realiza una pregunta sobre su salario a un compañera/o esperaría
    # que este/a la responda?
    p13_esprta  = models.CharField(max_length=255)
    #  ¿Es aceptable socialmente preguntarle a alguien sobre su salario?
    p13_aceptable  = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.name}:{self.dependencia}"
