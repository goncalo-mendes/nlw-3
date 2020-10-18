import express from 'express';
import { getRepository } from 'typeorm'
import Orphanage from './models/Orphanage';
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

app.post('/orphanages', async (request,response) =>{
    const{
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
    } = request.body;

    const orphanegesRepository = getRepository(Orphanage);

    const orphanage = orphanegesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
    });

    await orphanegesRepository.save(orphanage);

    return response.json({ messsage: 'hello'});
});

app.listen(3333);


// Driver nativo, query builder, ORM
// Object Relational Maping

