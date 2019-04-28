"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another == undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
// criando uma lista de objetos em memória para testar:
// o erro deve ta aqki
exports.users = {
    "felipe@gmail.com": new User('felipe@gmail.com', 'Felipe', 'fe123'),
    "teste@gmail.com": new User('teste@gmail.com', 'Teste', 'teste123')
};
//# sourceMappingURL=users.js.map