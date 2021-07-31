# Using quicklog

In order to insert log lines in realtime, user must install quicklog vscode plugin.


Configure vs code to connect to the agent by editing debugger launch config`.vscode/launch.json`.
```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "quicklog", // debugger extention type.
            "request": "launch",
            "name": "example quicklog", // name of the config
            "token": "206b0626c5839c105db725b915ebc1fc8789bb7b", // agent token
            "clientWorkspacePath": "/home/poonai/Core" // pwd of the workspace
        },
    ]
}
```

Click on debugger icon on the left and click play button to run the extention.

![debugger icon](../assets/run-extention.png)

Attach the log point by right clicking on the line number where you want to attach log points. When the statement executes, the logs are streamed to the vscode debug console.

![logpoint](../assets/logpoint.png)