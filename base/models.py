from django.db import models

# Create your models here.


class Item(models.Model):
    name = models.CharField(max_length=200)
    priority = models.IntegerField(default=0)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.priority} {self.name}"


class Car(models.Model):
    name = models.CharField(max_length=50)
    mpg = models.FloatField()
    cyl = models.IntegerField()
    disp = models.FloatField()
    hp = models.IntegerField()
    drat = models.FloatField()
    wt = models.FloatField()
    qsec = models.FloatField()
    vs = models.IntegerField()
    am = models.IntegerField()
    gear = models.IntegerField()
    carb = models.IntegerField()

    def __str__(self):
        return self.name
