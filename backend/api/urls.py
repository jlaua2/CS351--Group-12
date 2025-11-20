# backend/api/urls.py

from django.urls import path
from .views import (
    search,
    compare_products,
    autocomplete,
    union_ids,
    get_group,
)

urlpatterns = [
    # Existing SerpAPI endpoints
    path("search/", search, name="search"),
    path("compare/", compare_products, name="compare"),
    # New Data Structure endpoints
    path("autocomplete/", autocomplete, name="autocomplete"),
    path("union/", union_ids, name="union"),
    path("group/<int:product_id>/", get_group, name="group"),
]
