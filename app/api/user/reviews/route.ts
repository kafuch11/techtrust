import clientPromise from "@/lib/mongodb";

export async function GET() {

    try {
        const client = await clientPromise;
        const db = client.db('Tech_Trust')

        const data = await db.collection('REVIEWS').find().limit(4).toArray()
        return Response.json({ success: true, data })
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error }), { status: 500 })
    }

}





export async function POST(req : Request) {
        try {
          const client = await clientPromise;
          const db = client.db('Tech_Trust')
          const collection = db.collection('REVIEWS');
          const data = await req.json()
          const existing = await collection.findOne({name : data.name})
          if(!existing){
            await collection.insertMany(data)
            return new Response(JSON.stringify({success: true, message: 'created' }),{status : 201})
          }
          return new Response(JSON.stringify({success: false, message: 'already exists' }),{status : 403})

           
        } catch (error) {
          console.log(error)
          return new Response(JSON.stringify({ success: false, error: error}),{status : 500})

        }
        
    
  }