
export class User {
    constructor(public email: string, 
                public name: string, 
                private password: string) {}

    matches (another: User): boolean {
        return another ! == undefined &&
            another.email === this.email &&
            another.password === this.password
    }
}

// criando uma lista de objetos em memória para testar:
// o erro deve ta aqki
export const users = { 
    "felipe@gmail.com": new User ('felipe@gmail.com', 'Felipe', 'fe123'),
    "teste@gmail.com": new User ('teste@gmail.com', 'Teste', 'teste123')
}