class Login{
    email: string;
    protected senha: string;
    usuarios: Perfil[];

    constructor(email: string, senha: string){
        this.email = email;
        this.senha = senha;
        this.usuarios = new Array<Perfil>();
    } 

    ModificaNomePerfil(nomePerfil: string, nome: string){
        this.usuarios.forEach(function(item){
            if(item.nomePerfil == nomePerfil){
                item.nomePerfil = nome;
            }
        });
    }

    CriaPerfil(nome: string){
        this.usuarios.push(new Perfil(nome))
    }
}

class Perfil{
    nomePerfil: string;
    favoritos: Filme[];

    constructor(nomePerfil: string){
        this.nomePerfil = nomePerfil;
        this.favoritos = new Array<Filme>();
    }

    AddFavoritos(filme: Filme){
        this.favoritos.push(filme);
    }

}

class Video{
    resolucao: [number,number];
    extencao: string;

    constructor(resolucao: [number,number],extencao: string){
        this.resolucao = resolucao;
        this.extencao = extencao;
    }
}

class CatVideo {
    nome: string;
    classIndicativa: number;

    constructor(categoria: string, classindicativa: number){
        this.nome = categoria;
        this.classIndicativa= classindicativa;
    }
}

class Filme extends Video{
    idFilme: number;
    categoria: CatVideo;
    nome: string;

    constructor(resolucao: [number,number],extencao: string, idFilme: number, categoria: CatVideo, nome: string){
        super(resolucao,extencao)
        this.idFilme = idFilme;
        this.categoria = categoria;
        this.nome = nome;
    }

}