DC = docker-compose
DIR = srcs
ENV = .env
NAME = docker-compose.yml

.PHONY: all up down build clean fclean re

all: up

up: build
	$(DC) -f $(NAME) up -d

down:
	$(DC) -f $(NAME) down

build:
	$(DC) -f $(NAME) build

clean:
	$(DC) -f $(NAME) down --rmi all --volumes --remove-orphans

fclean: clean

re: fclean build up