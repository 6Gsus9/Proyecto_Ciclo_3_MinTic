import express from 'express';
const router=express.Router();

import Estudiantes from '../models/Estudiante';
import Cursos from '../models/Cursos'
//Agregar un curso
router.post('/asignacion-curso', async(req,res)=>{

    const body= req.body;

    try{
        const CursoDB = await Cursos.create(body);
        res.status(200).json(CursoDB)
    }catch(error){
        return res.status(500).json({
            menssage: 'Ocurrio un error',
            error
        })
    }
});
router.get('/Cursos', async(req,res)=>{
    try {
        const CursoDB = await Cursos.find();
        res.json(CursoDB);
    } catch (error) {
        return res.status(500).json({
            menssage: 'Ocurrio un error',
            error
        })
    }
});
router.delete('/Cursos/:id',async(req,res)=>{
    const _id = req.params.id;
    const body = req.body;
    try {
        const CursoDB = await Cursos.findByIdAndDelete({_id});

        if(!CursoDB){
            return res.status(400).json({
                mensaje: 'No se encontro el id indicado',
                error
            })
        }
        res.json(CursoDB);
    } catch (error) {
        return res.status(500).json({
            menssage: 'Ocurrio un error',
            error
        })
    }

});
router.put('/Cursos/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
    const CursoDB = await Cursos.findByIdAndUpdate(
        _id,
        body,
        {new: true});
        res.json(CursoDB);
        } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
        })
        }
});
//Agregar un Estudiante

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