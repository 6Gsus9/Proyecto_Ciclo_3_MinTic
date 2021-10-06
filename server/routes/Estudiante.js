import express from 'express';
const router=express.Router();

import Estudiantes from '../models/Estudiante';

//Agregar una nota 

router.post('/Estudiante-nuevo', async(req,res)=>{

    const body= req.body;

    try{
        const notaDB = await Estudiantes.create(body);
        res.status(200).json(notaDB)
    }catch(error){
        return res.status(500).json({
            menssage: 'Ocurrio un error',
            error
        })
    }
});

router.get('/Estudiante/:id', async(req, res)=> {
    const _id=req.params.id;

    try {
        const notaDB = await Estudiantes.findOne({_id});
        res.json(notaDB);
    } catch (error) {
        return res.status(500).json({
            menssage: 'Ocurrio un error',
            error
        })
    }
});

router.get('/Estudiante', async(req,res)=>{
    try {
        const notaDB = await Estudiantes.find();
        res.json(notaDB);
    } catch (error) {
        return res.status(500).json({
            menssage: 'Ocurrio un error',
            error
        })
    }
});

router.delete('/Estudiante/:id',async(req,res)=>{
    const _id = req.params.id;
    const body = req.body;
    try {
        const notaDB = await Estudiantes.findByIdAndDelete({_id});

        if(!notaDB){
            return res.status(400).json({
                mensaje: 'No se encontro el id indicado',
                error
            })
        }
        res.json(notaDB);
    } catch (error) {
        return res.status(500).json({
            menssage: 'Ocurrio un error',
            error
        })
    }

});
router.put('/Estudiante/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
    const notaDb = await Estudiantes.findByIdAndUpdate(
        _id,
        body,
        {new: true});
        res.json(notaDb);
        } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
        })
        }
});
module.exports = router;