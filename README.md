# PriceWise

_A price comparison tool leveraging Google search API_

---

## Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Backend Setup (Django)](#backend-setup-django)
  - [Frontend Setup (React)](#frontend-setup-react)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Running Tests](#running-tests)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [License](#license)

---

## About the Project

Provide a brief explanation of the project. Example:

> This project is a full-stack web application built with Django (REST API) and React (frontend). It provides a scalable architecture for modern web applications.

---

## 🛠 Tech Stack

### **Frontend**

- React

### **Backend**

- Python 3.x
- Django
- Django REST Framework
- PostgreSQL (Production) / SQLite (Development)

## Features

- Modern React UI
- REST API with DRF
- SERPAPI querying

---

## Project Structure

```
├── backend
│   ├── api
│   │   ├── __init__.py
│   │   ├── __pycache__
│   │   │   ├── __init__.cpython-313.pyc
│   │   │   ├── admin.cpython-313.pyc
│   │   │   ├── apps.cpython-313.pyc
│   │   │   ├── models.cpython-313.pyc
│   │   │   ├── search_engine.cpython-313.pyc
│   │   │   ├── seed.cpython-313.pyc
│   │   │   ├── urls.cpython-313.pyc
│   │   │   └── views.cpython-313.pyc
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── data_structures
│   │   │   ├── __init__.py
│   │   │   ├── __pycache__
│   │   │   │   ├── __init__.cpython-313.pyc
│   │   │   │   ├── pricematchtrie.cpython-313.pyc
│   │   │   │   ├── trie.cpython-313.pyc
│   │   │   │   └── union.cpython-313.pyc
│   │   │   ├── pricematchtrie.py
│   │   │   ├── trie.py
│   │   │   └── union.py
│   │   ├── migrations
│   │   │   ├── __init__.py
│   │   │   ├── __pycache__
│   │   │   │   ├── __init__.cpython-313.pyc
│   │   │   │   └── 0001_initial.cpython-313.pyc
│   │   │   └── 0001_initial.py
│   │   ├── models.py
│   │   ├── search_engine.py
│   │   ├── seed.py
│   │   ├── tests.py
│   │   ├── urls.py
│   │   └── views.py
│   ├── backend
│   │   ├── __init__.py
│   │   ├── __pycache__
│   │   │   ├── __init__.cpython-313.pyc
│   │   │   ├── settings.cpython-313.pyc
│   │   │   ├── urls.cpython-313.pyc
│   │   │   └── wsgi.cpython-313.pyc
│   │   ├── asgi.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── db.sqlite3
│   ├── guide.md
│   ├── manage.py
│   └── package-lock.json
├── demo_video
│   └── guide.md
├── frontend
│   ├── build
│   │   ├── asset-manifest.json
│   │   └── index.html
│   ├── guide.md
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   └── index.html
│   └── src
│       ├── App.js
│       ├── Components
│       │   ├── AboutPage.jsx
│       │   ├── App.jsx
│       │   ├── FavoritePage.jsx
│       │   ├── PrivacyPage.jsx
│       │   ├── ResultsPage.jsx
│       │   └── SearchPage.jsx
│       ├── Data
│       │   └── mockProducts.js
│       ├── index.js
│       └── utils
│           └── favorites.js
├── requirements.txt
└── venv
    └── guide.md
```

## Getting Started

> ### Backend Setup (Django)

```
# API #
Request an API key from SERPAPI found here: https://serpapi.com/users/sign_up
Edit the .env.example file as instructed in the file pasting your API key and renaming
the file

git clone git@github.com:jlaua2/CS351--Group-12.git
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python3 backend/manage.py makemigrations
python3 backend/manage.py migrate

#Initial seed procedure
python3 backend/manage.py shell
>>> from api.seed import run
>>> run()
```

> ### Frontend Setup (React)

```
cd frontend
npm install
npm run build
npm start
```
