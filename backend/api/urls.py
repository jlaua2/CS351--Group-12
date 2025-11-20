from django.urls import path
from .views import search, compare_products

urlpatterns = [
    path("search/", search, name="search"),
    path("compare/", compare_products, name="compare"),
]
