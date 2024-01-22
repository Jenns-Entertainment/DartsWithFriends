// Player Class
class playerData {

    constructor(obj) {
        this.id = obj.id;
        this.email = obj.email;
        this.nickname = obj.nickname;
        this.password = obj.password;
    }
}

module.exports = playerData;