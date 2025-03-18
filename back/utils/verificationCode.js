export const generateVerificationCode=async(length=6)=>{
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const size=chars.length;
    let code="";
    for(let i=0;i<length;i++){
        code+=chars.charAt(Math.floor(Math.random()*size));
    }
    return code;
}