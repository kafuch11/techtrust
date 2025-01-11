import clientPromise from "@/lib/mongodb";




export async function GET(request : Request) {
    try {
        const client = await clientPromise;
        const url = new URL(request.url);
        const id = url.searchParams.get('id')

        const db = client.db('Tech_Trust')

        const data = await db.collection('PRODUCTS').findOne({id : parseInt(id as string)})
        return Response.json({ success: true, data })
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error }), { status: 500 })
    }
}