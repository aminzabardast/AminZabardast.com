FROM node:lts-slim AS build

WORKDIR /code
RUN npm install -g pnpm
COPY ./ /code
RUN pnpm i
RUN pnpm build-only

FROM python:3.12-slim AS server

WORKDIR /code
COPY --from=build /code/dist /code/dist
COPY ./server/requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
COPY ./server/app /code/app

COPY ./server/run.sh /code/run.sh
CMD ["sh", "/code/run.sh"]

