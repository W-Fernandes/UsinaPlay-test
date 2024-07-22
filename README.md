# UsinaPlay Test


## Descrição

UsinaPlay Test (app teste).

## Live Preview

Veja o aplicativo em ação: [UsinaPlay Test Live Preview](https://usina-play-test.web.app/home)

## Tecnologias Utilizadas

- **Angular**
- **Ionic**
- **Firebase**

## Funcionalidades

- Interface de usuário moderna e responsiva.
- Integração com Firebase para hospedagem.
- Suporte a dispositivos móveis e desktop.

## Estrutura do Projeto

```plaintext

├── src/
│   ├── app/
│   │   ├── home/
│   │   │   ├── components/
│   │   │   │   ├── banner/
│   │   │   │   │   ├── banner.component.ts
│   │   │   │   │   ├── banner.component.html
│   │   │   │   │   └── banner.component.scss
│   │   │   │   ├── header/
│   │   │   │   │   ├── header.component.ts
│   │   │   │   │   ├── header.component.html
│   │   │   │   │   └── header.component.scss
│   │   │   ├── home.page.ts
│   │   │   ├── home.page.html
│   │   │   └── home.page.scss
│   ├── assets/
│   ├── environments/
│   ├── firebase.json
│   └── index.html
├── .gitignore
├── angular.json
├── package.json
└── README.md

```

## Configuração e instalação 


    1. **Instalar dependencias:**
        npm install


    2. **Servidor ionic development:**
        ionic serve




## Deploy no Firebase Hosting
    

    1. **Gerar build production:**
        ionic build --prod


    2. **Inicie o Firebase CLI:**
       firebase login
       firebase init


    3. **Deploy Firebase Hosting:**
       firebase deploy
