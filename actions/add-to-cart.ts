'use server'
import { CartItem } from "@/components/providers/CartProvider";


const url = process.env.BASE_URL;

export const setCart = async (user:string,cartItem:CartItem[]) => {
    
    try {
        const response = await fetch(`${url}/api/user/user-cart`,{
            method:'POST',
            body:JSON.stringify({user,cartItem})
        })
       return { status : response.status, success: true}

    } catch (err) {
        console.error('Error writing file:', err);
    }
}
export const updateCart = async (user:string,cartItem:CartItem[]) => {
    
    try {
        const response = await fetch(`${url}/api/user/user-cart`,{
            method:'POST',
            body:JSON.stringify({user,cartItem})
        })
       return { status : response.status, success: true}

    } catch (err) {
        console.error('Error writing file:', err);
    }
}


export const getCart = async (user:string) => {
    try {
        const response = await fetch(`${url}/api/user/user-cart?user=${user}`).then(res=>res.json()).then(data => data.data).catch(err => { console.log(err); return {user:'user1122',product:[]}} );
        return response;

    } catch (err) {
        console.error('Error writing file:', err);
        return []
    }
}

export const deleteCart = async (user:string,index:number) => {
    try {
        const response = await fetch(`${url}/api/user/user-cart?user=${user}&index=${index}`,{
            method:'DELETE'
        })
       return { status : response.status, success: true}

    } catch (err) {
        console.error('Error writing file:', err);
    }
}


