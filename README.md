# janus-method-message
Adds 'message' method for private communication.

## What it does:

Sends a private message from one user to another.

## Configuration options:

None

## Syntax:

Send 'Hi' to user 'Bob':

```json
{"method": "message", "data": {"to": "Bob", "message": "Hi"}}
```

'Bob' receives:

```json
{"method": "message", "data": {"from": "Alice", "message": "Hi"}}
```
