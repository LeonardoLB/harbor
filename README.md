# Harbor - Estrutura para desenvolver seu Front-end

Harbor é uma estrutura bem simples para fácilitar o desenvolvimento
do seu Front-end, possibilitando uma forma de organizar seus arquivos
e entregar uma estrutura mais limpa, dando a possibilidade de criar
componentes de forma fácil e organizada, uma estrutura que te deixa
confortável para incorporar o seu back-end da maneira que desejar.

## Requisitos

- Npm Package
- Nodejs

## Como funciona

A estrutura utiliza o Gulp Js para renderizar as suas views.
A estrutura utiliza dois pré processadores: Pug para HTML e Stylus para CSS.

## Como faz para rodar?

Para rodar o gulp basta acessar a pasta:
```
src/tools/
```
e executar o comando:
```
npm install
```
ainda dentro da pasta `tools` basta rodar o comando:
```
gulp
```

## A estrutura

# Para que serve cada pasta?

A idéia é que você deixe seus componentes separados, ou seja quanto menor o arquivo, melhor.

```
---src
------styles
---------components //Aqui você irá criar um arquivo para cada componente .styl
---------helpers // Aqui conterá tudo aquilo que pode lhe auxiliar que não sejá um componente
---------main.styl // Esse é o arquivo que o gulp irá renderizar que importa as duas pastas
------views
---------includes // Aqui você irá criar um arquivo para cada componente .pug assim podera realizar um include caso queira.
------------global // Componentes globais
------------template
---------------main.pug // todas as paginas pug realizam um include deste template
---------pages // Nesta pasta você poderá criar as suas páginas .pug
------------example.txt // exemplo de como deve ser criado as páginas

```
