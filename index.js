function Plugin() {
    console.log("Loading janus-method-chat");
    log.info("Loading janus-method-chat");
}

Plugin.prototype.call = function(data) {
    if(data.data !== undefined) data.message = data.data;
    var list = data._userList;
    var toUser = data._userList[data.toUserId];
    var fromUser = data._userList[data._userId];
    var roomEmit = data._roomEmit;

    if((toUser === undefined) && (data.toUserId === undefined)) {
        var out = { "roomId": fromUser.roomId, "userId": data._userId, "message": data.message }; 
        roomEmit("user_chat", out);
        return;
    } 

    if(toUser !== undefined) {
        var out = { "userId": data._userId, "toUserId": data.toUserId, "message": data.message };
        toUser.send("user_chat", out);
    }
}

module.exports = new Plugin();
