drop table if exists postagem_curtidas;
drop table if exists postagem_comentarios;
drop table if exists postagens_fotos;
drop table if exists postagens;
drop table if exists usuarios;

create table usuarios (
    id serial primary key,
    nome text,
    imagem text,
    username text null unique,
    email text unique,
    site text,
    bio text,
    telefone text,
    genero text,
    senha text not null,
    verificado boolean default false,
);

create table postagens (
    id serial primary key,
    usuario_id int not null,
    data timestamptz default now(),
    text text,
    foreign key (usuario_id) references usuario (id)
);

create table postagens_fotos (
    id serial primary key,
    usuario_id int not null,
    data timestamptz default now(),
    texto text, 
    foreign key (usuario_id) references usuario(id)
)

create table postagens_fotos(
    id serial primary key,
    postagens_id int not null,
    imagem text not null,
    foreign key (postagem_id) references postagens (id)
);

create table postagem_comentarios (
    id serial primary key,
    texto text not null,
    data timestamptz default now(),
    usuario_id int not null,
    postagem_id int not null,
    foreign key (postagem_id) references postagens (id),
    foreign key (usuario_id) references usuario (id)
)

create table postagem_curtidas (
    usuario_id int not null,
    postagem_id int not null,
    data timestamptzdefault now(),
    foreign key (postagem_id) references postagens (id),
    foreign key (usuario_id) references usuario (id)    
)