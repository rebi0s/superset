docker compose -f ../superset/docker-compose-non-dev.yml down | true
docker compose -f ../superset/docker-compose-non-dev.yml up -d $1

