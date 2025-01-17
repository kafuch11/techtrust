'use server'

const url = process.env.BASE_URL;

export const getProducts = async (selectedCategory: string, priceRange: { min: number, max: number }, selectedBrands: string[]) => {
    try {
        const newUrl = new URL(`${url}/api/user/products`);
        const params = {
          category: selectedCategory.toString(),
          minPrice: priceRange.min.toString(),
          maxPrice: priceRange.max.toString(),
          brands: selectedBrands.join(','),
        };
        Object.keys(params).forEach(key => newUrl.searchParams.append(key, params[key as keyof typeof params] ));

        const response = await fetch(newUrl.toString()).then(res => res.json()).then(data => data.data).catch(err => { console.log(err); return []} );
        return response;

    } catch (err) {
        console.error('Error fetching products:', err);
        return [];
    }
}