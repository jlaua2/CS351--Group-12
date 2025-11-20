# backend/api/apps.py

from django.apps import AppConfig


class ApiConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"  # type: ignore
    name = "api"

    def ready(self):
        """
        Called by Django when the app is fully loaded.
        Safe place to initialize Trie + Union-Find.
        """

        # Import INSIDE the function to avoid circular imports
        from . import search_engine

        try:
            search_engine.initialize_structures()
            print("[api] Data structures initialized.")
        except Exception as e:
            print("[api] Failed to initialize data structures:", e)
