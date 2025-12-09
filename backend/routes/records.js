import express from 'express'
import { createRecord, getRecord, getRecords, deleteRecord, updateRecord } from '../controllers/controller.js'

const router = express.Router()

//GET all records
router.get('/', getRecords)

//About Us
router.get('/about-us', (req, res) => {
    res.json({
        "mssg": "about us page"
    })
} )

//GET single record
router.get('/:id', getRecord)

//POST new record
router.post('/create-record',  createRecord)

//DELETE new record
router.delete('/:id', deleteRecord)

//UPDATE existing record
router.patch('/:id', updateRecord)

export default router