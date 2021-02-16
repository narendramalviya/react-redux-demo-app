import { BUY_CAKE } from './cakeTypes';
import { REFILL_STOCK } from './cakeTypes';
export const buyCake = (number = 1)=>{
    return {
        type:BUY_CAKE,
        payload:number
    }
}
export const refillStock = (number = 1)=>{
    return {
        type:REFILL_STOCK,
        payload:number
    }
}