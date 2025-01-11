import clientPromise from "@/lib/mongodb";

interface query {
    price: { $gte: number, $lte: number }
    category?: string
    brand?: { $in: string[] }
}


export async function GET(request: Request) {
    
    try {
        const client = await clientPromise;
        const url = new URL(request.url);
        const category = url.searchParams.get('category');
        const minPrice = parseFloat(url.searchParams.get('minPrice') as string);
        const maxPrice = parseFloat(url.searchParams.get('maxPrice') as string);
        const brands = url.searchParams.get('brands')?.split(',');

        const query: query = {
            price: { $gte: minPrice?minPrice:0, $lte: maxPrice?maxPrice:10000 }

        }

        

        if (category && category !== 'All') {
            query.category = category
        }

        if(brands && brands[0] !== ''){
            console.log(brands)
            query.brand = { $in: brands};
        }

        const db = client.db('Tech_Trust')

        const data = await db.collection('PRODUCTS').find(query).limit(10).toArray()
        return Response.json({ success: true, data })
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error }), { status: 500 })
    }
}