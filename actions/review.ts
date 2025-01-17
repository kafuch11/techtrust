'use server'


const url = process.env.BASE_URL;

export const review = async (email:string,review: string) => {
    try {
        const response = await fetch(`${url}/api/user/reviews`,{
            method:'POST',
            body:JSON.stringify({email,review})
        })
       return { status : response.status, success: true}

    } catch (err) {
        console.error('Error writing file:', err);
    }
}


export const getReview = async () => {
    try {
        const response = await fetch(`${url}/api/user/reviews`).then(res=>res.json()).then(data=>data.data).catch(err => { console.log(err); return []} );
       return response;

    } catch (err) {
        console.error('Error writing file:', err);
        return []
    }
}


