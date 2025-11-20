from django.db import models

# Create your models here.


class ProductResult(models.Model):
    query = models.CharField(max_length=255)
    store = models.CharField(max_length=100)
    title = models.CharField(max_length=255, blank=True)
    price = models.FloatField()
    shipping = models.FloatField()
    link = models.URLField(max_length=500)
    in_store = models.BooleanField(False)
    online = models.BooleanField(True)
    created_at = models.DateTimeField(auto_now_add=True)

    def total_cost(self) -> float:
        return self.price + self.shipping

    def __str__(self):
        return f"{self.store} - {self.query}"
