# backend/api/models.py

from django.db import models  # type: ignore


class ProductResult(models.Model):
    query = models.CharField(max_length=255)
    store = models.CharField(max_length=100)
    title = models.CharField(max_length=255, blank=True)
    price = models.FloatField()
    shipping = models.FloatField()
    link = models.URLField(max_length=500)
    in_store = models.BooleanField(default=False)  # type: ignore
    online = models.BooleanField(default=True)  # type: ignore
    created_at = models.DateTimeField(auto_now_add=True)

    def total_cost(self) -> float:
        return self.price + self.shipping  # type: ignore

    def __str__(self):
        return f"{self.store}: {self.title} (${self.price})"
