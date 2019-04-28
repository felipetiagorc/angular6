import {Request, Response} from 'express'
import {User, users} from './users'

// handleAuthentication atribui à user o conteúdo do body da requisição
export const handleAuthentication = (req: Request, resp: Response) => {
    const user: User = req.body
// se for valido, cria dbUser que recebe o users 'do banco' (aqui é da memória)
    if (isValid(user)) {
        const dbUser: User = users [user.email] // aqui seria a query do banco
        resp.json({email: dbUser.email, name: dbUser.name})

    } else {
        resp.status(403).json({message: 'Dados inválidos'}) 

    }
}

function isValid(user: User): boolean {
    // se o body não existir:
    if (!user) {
    return false
}
// caso contrário, crio dbUser e vou obter do meu objeto 'users', o user.email
const dbUser = users [user.email]
// e aí retorna dbUser diferente de undefined e 'dbUser' que bate com 'user'
return dbUser !== undefined && dbUser.matches(user)

}

