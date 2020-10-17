import express from 'express';

const app  = express();

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
