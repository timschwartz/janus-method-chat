# janus-method-chat
Replaces built-in 'chat' method, adds private communication.

## What it does:

Enables chatting, including sending a private message from one user to another.

## Configuration options:

None

## Syntax:

Send 'Hello' to everyone:

```json
{"method": "chat", "data": {"message": "Hi"}}
```

Everyone in room receives:

```json
{"method":"user_chat", "data":{"roomId":"69de79e1077103cb59d1a890e96c7ef2","userId":"Alice", "message":"Hello"}}
```


Send 'Hi' to user 'Bob':

```json
{"method": "chat", "data": {"toUserId": "Bob", "message": "Hi"}}
```

'Bob' receives:

```json
{"method": "user_chat", "data": {"userId": "Alice", "toUserId": "Bob", "message": "Hi"}}
```
