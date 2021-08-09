# Attaching agent

## Install agent

Run this below command to install agent.

```sh
curl --proto '=https' --tlsv1.2 -sSf  https://raw.githubusercontent.com/quicklog-dev/devops/main/installer.sh | sh
```

## Setup agent config

Define config that makes up in `agent_config.yaml` to run the quicklog agent

A sample agent config looks like this:
```yaml
remote_manager_addr: "app.quicklog.dev:4003" ## manager addr. 
binary_path: "./example-api-service" ## path of go binary
agent_token: "******" ## agent token
args: ["--service", "core"] ## args that needs to passed to the binary
```
*** For quicklog token generation check [Token Generation Docs](./TokenGeneration)*** 

## Run the agent

```sh
quicklog agent
```

