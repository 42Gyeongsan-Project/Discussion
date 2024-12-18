all:
	docker-compose -f ./docker-compose.yml --env-file ./.env up --build -d

clean:
	docker-compose -f ./docker-compose.yml --env-file ./.env down


fclean:
	if [ "$$(docker ps -q)" ]; then \
		docker stop $$(docker ps -q); \
	fi
	if [ "$$(docker ps -aq)" ]; then \
		docker rm $$(docker ps -aq); \
	fi
	if [ "$$(docker volume ls -q)" ]; then \
		docker-compose down -v; \
		docker volume rm $$(docker volume ls -q) || true; \
	fi
	docker network prune -f 
	docker system prune -a --volumes -f

re: fclean
	make

.PHONY	: all re clean fclean