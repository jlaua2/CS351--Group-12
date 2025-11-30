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
- [API Documentation](#api-documentation)
- [Screenshots](#screenshots)
- [License](#license)

---

## About the Project

Provide a brief explanation of the project. Example:

> This project is a full-stack web application built with Django (REST API) and React (frontend). Which serves google api data to a react frontend and uses it to implement a cost comparison tool.

---

## Tech Stack

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

## API Documentation

- [SERPAPI Documentation](https://serpapi.com/search-engine-apis)

## License

Released under MIT License

Copyright (c) 2013 Mark Otto.

Copyright (c) 2017 Andrew Fong.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
