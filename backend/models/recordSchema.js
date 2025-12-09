import mongoose from "mongoose";

const Schema = mongoose.Schema

const recordSchema = new Schema({
  caseName: { type: String, required: true }, 

  parties: {
  appellants: [String],  
  respondents: [String]
  },    

  court: String,                                       
  judges: String,  

  citation: { type: String, required: true },  
  appealNumber: String,  
  
  date: Date,

  headNote: String, 

  subjectHeadings: [String],  

  facts: String,  

  issuesForDetermination: [String],

  held: [
    {
      heading: String,     
      summary: String       
    }
  ],

  casesCited: [String],                                     
  
  counsel: {
    appellants: [String],
    respondents: [String]
  },

  judgment: String,      
  
  catchWords: String,   

  createdAt: { type: Date, default: Date.now } 
})




export default mongoose.model('LawRecord', recordSchema);

