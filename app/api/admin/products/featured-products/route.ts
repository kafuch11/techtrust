import clientPromise from "@/lib/mongodb"




export async function POST(req : Request) {
        try {
          const client = await clientPromise;
          const db = client.db('Tech_Trust')
          const collection = db.collection('FEATURED_PRODUCTS');
          const data = await req.json()
          
            await collection.insertOne(data)
            return new Response(JSON.stringify({success: true, message: 'created' }),{status : 201})
         
           
        } catch (error) {
          console.log(error)
          return new Response(JSON.stringify({ success: false, error: error}),{status : 500})

        }
        
    
  }