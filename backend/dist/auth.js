"use strict";
exports.__esModule = true;
var users_1 = require("./users");
// handleAuthentication atribui à user o conteúdo do body da requisição
exports.handleAuthentication = function (req, resp) {
    var user = req.body;
    // se for valido, cria dbUser que recebe o users 'do banco' (aqui é da memória)
    if (isValid(user)) {
        var dbUser = users_1.users[user.email]; // aqui seria a query do banco
        resp.json({ email: dbUser.email, name: dbUser.name });
    }
    else {
        resp.status(403).json({ message: 'Dados inválidos' });
    }
};
function isValid(user) {
    // se o body não existir:
    if (!user) {
        return false;
    }
    // caso contrário, crio dbUser e vou obter do meu objeto 'users', o user.email
    var dbUser = users_1.users[user.email];
    // e aí retorna dbUser diferente de undefined e 'dbUser' que bate com 'user'
    return dbUser !== undefined && dbUser.matches(user);
}
//# sourceMappingURL=auth.js.map