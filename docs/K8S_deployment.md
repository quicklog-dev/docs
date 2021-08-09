
# Kubernetes deployment

## Dockerfile sample

wget quicklog and make the quicklog as an entrypoint.

```
FROM golang:rc-alpine3.13

RUN wget https://quicklog.sgp1.digitaloceanspaces.com/quicklog

RUN ["chmod", "+x", "quicklog"]

RUN mkdir /app

COPY main .

USER 1000

ENTRYPOINT  ["./quicklog"]
```

## Sample Deployment file
Pass the necessary arguments to the container to run your go binary with quicklog agent.
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: quicklog-demo
  labels:
    app: quicklog-demo
spec:
  replicas: 1
  selector:
    matchLabels:
      app.kubernetes.io/name: quicklog-demo
  template:
    metadata:
      labels:
        app.kubernetes.io/name: quicklog-demo
    spec:
      containers:
      - name: quicklog-demo
        image: schoolboy/sample
        imagePullPolicy: Always
        args: ["agent","--token","***","--remote-manager-addr", "manager.quicklog.dev:4003", "--insecure", "true", "--args" ,"--service,main","--binary-path", "./main"]
        ports:
        - containerPort: 8081
```