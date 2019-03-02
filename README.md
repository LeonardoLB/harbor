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
---------------main.pug // Todas as paginas pug realizam um include deste template
---------pages // Nesta pasta você poderá criar as suas páginas .pug
------------example.txt // exemplo de como deve ser criado as páginas
---models // Aqui você poderá incorporar as models da maneira como quiser.
---views // Aqui será redenderizado as suas páginas .pug criadas em src/views/pages/.pug em arquivos .html
---assets
------css // Aqui será renderizado um único arquivo .css de todos os arquivos .styl indicados no arquivo main.styl dentro da pasta src/styles/main.styl
------images // pasta de imagens
------js // Nesta pasta deve se encontrar o arquivo bundle.js contendo todo o js do seu projeto em um unico arquivo
```

## Baseado em

- ITCSS
```
https://willianjusten.com.br/organizando-seu-css-com-itcss/
```
- OOCSS
```
https://tableless.com.br/oocss-ou-css-do-jeito-certo/
```
