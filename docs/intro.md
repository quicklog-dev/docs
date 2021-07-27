---
sidebar_position: 1
---

# Introduction

**Quicklog** helps developers to insert log line in realtime, without going through
the hassle of re building and re deploying.

## Architechture

In order to understand quicklog, you must first understand the components of Quicklog. The components of the Quicklogs are listed below. 
- Manager
- Agent
- vscode extention

### Manager

Manager service is backbone of the Quicklog, which servers multiple roles varying from managing user data, routing the logs from agent to vscode, and inserting log 
lines to user program on user request.

### Agent
Agent application runs along side with user program like a side car, which helps to insert logs lines dynmically into user application.

### VS-CODE extenstion

Quicklog vscode extention allows developers to insert or remove log lines on the soruce code and forwards the user request to the agent. Then streams the logs from the user program to the vscode terminal.

