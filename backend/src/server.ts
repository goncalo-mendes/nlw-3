import express from 'express';

import './database/connection';

const app  = express();
app.use(express.json());
//Rota = conjunto
//Recurso = usarios
//Metodos HTTP = GET,POST,PUT,DELETE
// Parâmetros

//GET = buscar uma informação (lista, item)
//POST = Criando uma informção nova
//PUT = editando a informação
//DELETE = deleter uma informação

app.get('/users', (request,response) =>{
    return response.json({ message: 'hello world' });
});

app.listen(3333);


// Driver nativo, query builder, ORM
// Object Relational Maping

