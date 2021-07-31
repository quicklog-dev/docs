# Self Hosted Manager

Users can use the community self hosted manager or user can install and manage the manager themself.

## Prerequisite

Manager stores all the agent config on postgres. So, please run postgres before running the manager. 

## Install Manager

Run this below command to install manager.

```sh
curl --proto '=https' --tlsv1.2 -sSf  https://raw.githubusercontent.com/quicklog-dev/devops/main/installer.sh | sh
```

## Setup manager config

Define the manager config that makes up in `manager_config.yaml` to run quicklog manager.

```yaml
port: 7000
postgres_host: "localhost"
postgres_port: 5432
postgres_database: "postgres"
postgres_username: "debuggeruser"
postgres_password: "debuggerpassword"
manager_port: 4003
jwt_key: "asdf@!@..
```

## Run manager
```sh
quicklog manager
```

## Installing using docker-compose

Define docker-compose config that makes up in `docker-compose.yaml`

```yaml

version: '3.5'

services:
  postgres:
    container_name: postgres_dev_container
    image: postgres
    environment:
        POSTGRES_USER: "debuggeruser"
        POSTGRES_PASSWORD: "debuggerpassword"
    volumes:
       - postgres:/data/postgres
    ports:
      - "5432:5432"
    restart: unless-stopped
  quicklog:
    container_name: quicklog_dev_container
    image: schoolboy/quicklog:dev
    command: ["manager", "--config-path", "/manager_config.yaml"]
    ports:
     - "7000:7000"
     - "4003:4003"
    restart: unless-stopped
    depends_on: 
        - "postgres"
    volumes: 
        - "./manager_config.yaml:/manager_config.yaml"
volumes: 
    postgres:

```

Define the manager config `manager_config.yaml` in the same folder

```yaml
port: 7000
postgres_host: "postgres"
postgres_port: 5432
postgres_database: "postgres"
postgres_username: "debuggeruser"
postgres_password: "debuggerpassword"
manager_port: 4003
jwt_key: "asdf@!@.."
```

Run the following the command to run postgres and quicklog

```sh
docker-compose up
```

Hit `http://localhost:4003` to open quicklog dashboard.