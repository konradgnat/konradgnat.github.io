# KonradGnat.com

Fullstack Web Developer Portfolio

Made with

- Django
- Gulp
- Webpack
- SQLite
- Hosted on Digital Ocean

# Django Backend Notes

Start venv with this command, make sure you cd into `/konradgnat/`
`source bin/activate`

to deactivate virtual environment
`deactivate`

To run the django app on localhost:8080 run:
`python manage.py runserver`

After changes to models, run the migration
`python manage.py makemigrations`

`python manage.py migrate`

To collect all your static files from different apps to a single folder for production, run this:
`python manage.py collectstatic`
