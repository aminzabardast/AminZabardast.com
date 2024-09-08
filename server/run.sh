if [ $PRODUCTION = 'false' ]; then
    python -m fastapi dev app/main.py --host 0.0.0.0 --port 8080 --forwarded-allow-ips="*"
else
    python -m fastapi run app/main.py --host 0.0.0.0 --port 8080 --forwarded-allow-ips="*"
fi
