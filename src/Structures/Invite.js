"use strict";

var Server = require("./Server.js");
var ServerChannel = require("./ServerChannel.js");

class Invite{
	constructor(data, chan, client){
		this.maxAge = data.max_age;
        this.code = data.code;
        this.server = chan.server;
		this.channel = chan;
        this.revoked = data.revoked;
        this.createdAt = Date.parse(data.created_at);
        this.temporary = data.temporary;
        this.uses = data.uses;
        this.maxUses = data.uses;
        this.inviter = client.internal.users.get("id", data.inviter.id);
        this.xkcd = data.xkcdpass;
	}

    toString(){
        return `https://discord.gg/${this.code}`;
    }
}

module.exports = Invite;
