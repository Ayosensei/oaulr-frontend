import mongoose from 'mongoose';
import LawRecord from '../models/recordSchema.js'

//GET all records
export async function getRecords(req, res){
    try {
        const records = await LawRecord.find({}).sort({ createdAt: -1 });
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//GET single record
export async function getRecord(req, res){
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such record'})   
    }

    const record = await LawRecord.findById(id)

    if(!record){
        return res.status(400).json({error: 'No such record'})
    }

    res.status(200).json(record)
}

//POST(create) new record
export async function createRecord(req, res){
    const {caseName, citation, court, judges, date, headNote,catchWords,facts, judgment, ratioDecidendi, obiterDicta} = req.body

    //add record to db
    try{
        const record = await LawRecord.create({caseName, citation, court, judges, date, headNote,catchWords,facts, judgment, ratioDecidendi, obiterDicta})
        res.status(200).json(record)
    } catch(error){
        res.status(400).json({error: error.message})
    }

}

//DELETE record
export async function deleteRecord(req, res){
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such record'})   
    }

    const record = await LawRecord.findByIdAndDelete(id)

    if(!record){
        return res.status(400).json({error: 'No such record'})
    }

    res.status(200).json(record)
}

//UPDATE existing record
export async function updateRecord(req, res){
    const { id } = req.params
    const updates = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such record'})   
    }

    try {
        const record = await LawRecord.findByIdAndUpdate(id, {$set: updates}) 
        if (!record) {
        return res.status(404).json({ error: 'No such record' });
        }

        res.status(200).json(record);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


