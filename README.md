#  Instagram Fake

## - O que o usuário pode fazer

- Fazer Login
- Fazer Cadastro
- Ver os dados do seu perfil
- Editar os dados do seu perfil
- Ver postagens de outras pessoas
    - Ver quantidade de curtida em uma postagem
    - Ver comentários em uma postagem
- Curtir postgens de outras pessoas
- Comentar as postagens

## - O que NÃO será possivel fazer

- Ver a localização de uma postagem
- Ver pessoas que curtiram uma postagem
- Curtir um comentário
- Comentar em outros comentários

# Endpoints

### POST - Login

#### Dados envidados
- Username
- Senha

#### Dados retornados
- Sucesso / erro
- Token

#### Objetivos Gerais 

- Validar username e a senha
- Buscar o usuário o banco de dados
- Verificar a senha informada está correta
- Gerar o token de autenticação
- Retornar os dados do usuário e o token

___

### POST - Cadastro

#### Dados enviados
- Username
- Senha
 
#### Dados retronados
- Sucesso / erro

#### Objetivos Gerais 

- Validar username e a senha
- Verificar se o username já existe no banco de dados
- Criptografar a senha 
- Cadastrar o usuário no banco de dados
- Retornar sucesso ou erro

___

### GET - Perfil

#### Dados enviados
- Token (que terá id ou usarname)
 
#### Dados retornados
- URL da foto
- Nome
- Username
- Site
- Bio
- Email
- Telefone
- Gênero

#### Objetivos Gerais 

- Validar o token do usuário
- Buscar o cadastro do usuário com a informação do token
- Retornar os dados do usuário

___

### PUT - Perfil 

#### Dados enviados
- Token (que terá id ou usarname)
- URL da foto
- Nome
- Username
- Site
- Bio
- Email
- Telefone
- Gênero
- Senha

#### Dados retornados
- Sucesso / erro

#### Objetivos Gerais 

- Validar o token do usuário
- Buscar o cadastro do usuário com a informação do token
- Exigir ao menos um campo para atualizar
- Critografar a senha se for informada
- Verificar se o username já existe no banco de dados se for informado
- Atualizar o registro do usuário no banco de dados
- Retornar sucesso ou erro

____

### GET - Postagens 

#### Dados enviados
- token
- offset

#### Dados retornados
- Postagens [] 
    - id 
    - texto
    - foi curtido pelo usuário
    - Usuario
        - URL da foto
        - username
        - é perfil oficial
    - Foto [] 
    - Quantidade de curtidas
    - Comentários [] 
        - username
        - texto  
    - Data

#### Objetivos Gerais 

- Validar token do usuário
- Buscar o cadstro do usário com a informação do token
- Retornar postagens de outras pessoas

___

### POST - Postagens 

#### Dados enviados
- token
- texto da postagem
- array com fotos

#### Dados retornados

- sucesso ou erro

#### Objetivos Gerais 

- Validar token do usuário
- Buscar o cadstro do usário com a informação do token
- Exigir que seja informado ao menos uma foto no array
- Cadastrar postagem para o usuário logado
- Cadastro das fotos da postagem
- Retornar sucesso

___

### POST - Curtir

#### Dados enviados
- Token (contém username ou id do usuário)
- id da postagem

#### Dados retronados
- sucesso ou erro

#### Objetivos Gerais 

- Validar token do usuário
- Buscar o cadstro do usário com a informação do token
- Buscar o cadastro da postagem com id informado
- Verificar se o usuário já curtiu a postagem
- Cadastrar a curtida da postagem no banco de dados
- Retornar sucesso ou erro

___

### POST - Comentar

#### Dados enviados
- Token (contém username ou id do usuário)
- id da postagem
- texto do comentário

#### Dados retornados
- sucesso ou erro

#### Objetivos Gerais 

- Validar token do usuário
- Buscar o cadstro do usário com a informação do token
- Validar o texto
- Buscar a postagem pelo id informado
- Cadastrar comentário
- Retornar sucesso ou erro

___
