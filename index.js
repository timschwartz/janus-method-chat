function Plugin() {
    console.log("Loading janus-method-message");
    log.info("Loading janus-method-message");
}

Plugin.prototype.call = function(data) {
    var list = data._userList;
    to = data._userList[data.to];
    from = data._userList[data._userId];

    if(to === undefined) {
        from.send("error", {message: "Could not send message to "+data.to});
        return;
    } 

    var out = { "from": data._userId, "message": data.message };
    to.send("message", out);
}

module.exports = new Plugin();
