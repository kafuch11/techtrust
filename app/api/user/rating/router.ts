import clientPromise from "@/lib/mongodb";

export async function GET() {

    try {
        const client = await clientPromise;
        const db = client.db('Tech_Trust')

        const data = await db.collection('RATING').find({}).toArray()
        return Response.json({ success: true, data })
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error }), { status: 500 })
    }

}





export async function POST(req : Request) {
        try {
          const client = await clientPromise;
          const db = client.db('Tech_Trust')
          const collection = db.collection('RATING');
          const data = await req.json()
          const existing = await collection.findOne({email : data.email})
          if(!existing){
            await collection.insertOne(data)
            return new Response(JSON.stringify({success: true, message: 'created' }),{status : 201})
          }
          return new Response(JSON.stringify({success: false, message: 'already exists' }),{status : 403})

           
        } catch (error) {
          console.log(error)
          return new Response(JSON.stringify({ success: false, error: error}),{status : 500})

        }
        
    
  }