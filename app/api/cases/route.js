import {NextResponse} from 'next/server'
import Cases from '../data/cases.js'
export async function GET() {

try{
    return NextResponse.json(
        {sucess: true, cases: Cases},
        {status: 200}
    )
}catch(err){
    return NextResponse.json({
        "error": err
    })
}
}