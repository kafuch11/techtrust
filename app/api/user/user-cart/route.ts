import clientPromise from "@/lib/mongodb";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    try {
        const client = await clientPromise;
        const db = client.db('Tech_Trust')

        const data = await db.collection('CART').findOne({user:searchParams.get('user')})
        return Response.json({ success: true, data })
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error }), { status: 500 })
    }

}





export async function POST(req : Request) {
        try {
          const client = await clientPromise;
          const db = client.db('Tech_Trust')
          const collection = db.collection('CART');
          const data = await req.json()
          const existing = await collection.findOne({user : data.user})
          if(!existing){
            await collection.insertOne(data)
            return new Response(JSON.stringify({success: true, message: 'created' }),{status : 201})
          }
          await collection.updateOne({user : data.user},{$set : {cartItem : data.cartItem}})
          return new Response(JSON.stringify({success: true, message: 'updated' }),{status : 201})
        } catch (error) {
          console.log(error)
          return new Response(JSON.stringify({ success: false, error: error}),{status : 500})
        }
        
    
  }


  
export async function DELETE(req : Request) {
       
            const { searchParams } = new URL(req.url)
            try {
                const client = await clientPromise;
                const db = client.db('Tech_Trust')
        
                const data = await db.collection('CART').findOne({user:searchParams.get('user'),})
                if(!data){
                    return new Response(JSON.stringify({ success: false, message: 'not found' }), { status: 404 })
                }
                data.cartItem.splice(parseInt(searchParams.get('index') as string),1)
                await db.collection('CART').updateOne({user : data.user},{$set : {cartItem : data.cartItem}})
                return Response.json({ success: true, message: 'deleted' })
            } catch (error) {
                return new Response(JSON.stringify({ success: false, error: error }), { status: 500 })
            }
          
    
  }