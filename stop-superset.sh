docker compose -f ../superset/docker-compose-image-tag.yml down | true
docker compose -f ../superset/docker-compose-non-dev.yml down | true
docker compose -f ../superset/docker-compose.yml down | true

