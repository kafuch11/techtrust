'use server'

const url = process.env.BASE_URL;

export const newsLetter = async (email:string) => {
    try {
        const response = await fetch(`${url}/api/user/news-letter`,{
            method:'POST',
            body:JSON.stringify({email})
        })
       return { status : response.status, success: true}

    } catch (err) {
        console.error('Error writing file:', err);
        return {status : 401 , success: false}
    }
}
