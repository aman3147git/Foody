import { generatePasswordResetEmailHtml, generateResetSuccessEmailHtml, generateWelcomeEmailHtml, htmlContent } from "./htmlEmail.js";
import { client,sender } from "./mailtrap.js";
export const sendVerificationEmail=async(email,verificationToken)=>{
    const recipient = [{email}];
    try {
        const res=await client
        .send({
          from: sender,
          to: recipient,
          subject: "Verify your email",
          html:htmlContent.replace("{verificationToken}",verificationToken),
          category: "email verification",
        })
    } catch (error) {
        console.log(error);
        
    }    
}

export const sendWelcomeEmail=async(email,name)=>{
    const recipient = [{email}];
    const htmlcontent=generateWelcomeEmailHtml(name);
    try {
        const res=await client
        .send({
          from: sender,
          to: recipient,
          subject: "Welcome to foody",
          html:htmlcontent,
          template_variables:{
            company_info_name:"Foody",
            name:name
          }
        })
    } catch (error) {
        console.log(error);
        
    }    
}

export const sendPasswordResetEmail=async(email,resetUrl)=>{
    const recipient = [{email}];
    const htmlcontent=generatePasswordResetEmailHtml(resetUrl);
    try {
        const res=await client
        .send({
          from: sender,
          to: recipient,
          subject: "Reset your password",
          html:htmlcontent,
          category: "Password reset email",
        })
    } catch (error) {
        console.log(error);
        
    }    
}
export const sendResetSuccessEmail=async(email)=>{
    const recipient = [{email}];
    const htmlcontent=generateResetSuccessEmailHtml();
    try {
        const res=await client
        .send({
          from: sender,
          to: recipient,
          subject: "Password rest successfull",
          html:htmlcontent,
          category: "Password reset",
        })
    } catch (error) {
        console.log(error);
        
    }    
}