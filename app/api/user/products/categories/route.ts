import clientPromise from "@/lib/mongodb"


export async function GET() {
    
    try {
        const client = await clientPromise;
        const db = client.db('Tech_Trust')
    
        const data = await db.collection('CATEGORIES').find().toArray()
        return Response.json({ success: true, data })
      } catch (error ) {
        return new Response(JSON.stringify({ success: false, error: error}),{status : 500})
      }
  }

        
    
  