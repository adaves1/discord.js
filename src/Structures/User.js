"use strict";

var Equality = require("../Util/Equality.js");
var Endpoints = require("../Constants.js").Endpoints;

class User extends Equality{
	constructor(data, client){
		super();
		this.client = client;
		this.username = data.username;
		this.discriminator = data.discriminator;
		this.id = data.id;
		this.avatar = data.avatar;
		this.status = data.status || "offline";
		this.gameID = data.game_id || null;
		this.typing = {
			since : null,
			channel : null
		};
	}

	get avatarURL(){
		if(!this.avatar){
			return null;
		}else{
			return Endpoints.AVATAR(this.id, this.avatar);
		}
	}

	mention(){
		return `<@${this.id}>`;
	}

	toString(){
		return this.mention();
	}

	equalsStrict(obj){
		if(obj instanceof User)
			return (
				this.id === obj.id &&
				this.username === obj.username &&
				this.discriminator === obj.discriminator &&
				this.avatar === obj.avatar &&
				this.status === obj.status &&
				this.gameID === obj.gameID
			);
		else
			return false;
	}
}

module.exports = User;
