'use server'

const url = process.env.BASE_URL;

export const getCategory = async () => {
    try {
        const newUrl = new URL(`${url}/api/user/products/categories`);
       

        const response = await fetch(newUrl.toString()).then(res => res.json()).then(data => data.data).catch(err => { console.log(err); return []} );
        return response;

    } catch (err) {
        console.error('Error fetching products:', err);
        return [];
    }
}
