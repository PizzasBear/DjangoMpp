#!/usr/bin/bash
originalDir="$(pwd)"
cd $(dirname $0)

./build.sh

source ~/.virtualenvs/django/bin/activate
trap deactivate EXIT
python3 ../backend/manage.py runserver localhost:8000

cd $originalDir