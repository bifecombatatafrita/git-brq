"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Login = /** @class */ (function () {
    function Login(email, senha) {
        this.email = email;
        this.senha = senha;
        this.usuarios = new Array();
    }
    Login.prototype.ModificaNomePerfil = function (nomePerfil, nome) {
        this.usuarios.forEach(function (item) {
            if (item.nomePerfil == nomePerfil) {
                item.nomePerfil = nome;
            }
        });
    };
    Login.prototype.CriaPerfil = function (nome) {
        this.usuarios.push(new Perfil(nome));
    };
    return Login;
}());
var Perfil = /** @class */ (function () {
    function Perfil(nomePerfil) {
        this.nomePerfil = nomePerfil;
        this.favoritos = new Array();
    }
    Perfil.prototype.AddFavoritos = function (filme) {
        this.favoritos.push(filme);
    };
    return Perfil;
}());
var Video = /** @class */ (function () {
    function Video(resolucao, extencao) {
        this.resolucao = resolucao;
        this.extencao = extencao;
    }
    return Video;
}());
var CatVideo = /** @class */ (function () {
    function CatVideo(categoria, classindicativa) {
        this.nome = categoria;
        this.classIndicativa = classindicativa;
    }
    return CatVideo;
}());
var Filme = /** @class */ (function (_super) {
    __extends(Filme, _super);
    function Filme(resolucao, extencao, idFilme, categoria, nome) {
        var _this = _super.call(this, resolucao, extencao) || this;
        _this.idFilme = idFilme;
        _this.categoria = categoria;
        _this.nome = nome;
        return _this;
    }
    return Filme;
}(Video));
