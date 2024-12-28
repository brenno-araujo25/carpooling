FROM python:3.10-slim

WORKDIR /app

COPY . /app

# instala as dependências
RUN python -m venv /app/venv && \
    /app/venv/bin/pip install --upgrade pip && \
    /app/venv/bin/pip install -r requirements.txt

# variável PATH
ENV PATH="/app/venv/bin:$PATH"

EXPOSE 4001

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "4001"]
