const express = require('express')

const router = express.Router()

const Owner = require('../models/owner')

router.post('/', async function (req, res) {
    const { name, lastName, percentual } = req.body
    const owner = new Owner({ name, lastName, percentual })

    try{
        await owner.save()
        res.status(200).json(owner)
    }catch(err){
        res.status(400).json({error: `erro ao cadastrar novo dono ${err}`})
    }
})

router.get('/', async (req, res) => {
    try{
        let owners = await Owner.find({})
        res.status(200).json(owners)
    }catch(err){
        res.status(400).json({error: `erro ao listar donos ${err}`})
    }
})

router.get('/search', async (req, res) => {
    const { query } = req.query
    try{
        let owner = await Owner.find({name: query})
        res.json(owner)
    }catch(err){
        res.status(400).json({error: err})
    }
})

router.delete('/:id', async(req, res) => {
    const { id } = req.params

    try{
        let owner = await Owner.findById(id)
        await owner.delete()
        res.status(200).json({message: 'ok'})
    }catch(err){
        res.status(400).json({error: `erro ao deletar dono ${err}`})
    }
})

module.exports = router