$(document).ready(function(){
    $('form').validate({
        rules: {
            fisrtName:{
                required:true
            },
            lastName:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            password:{
                required:true
            }
        },
        messages:{
            fisrtName:'Please, tell us your first name',
            lastName:'Please, tell us your last name',
            email: 'The email is required',
            password: 'Tell us your new password',
        }
    })
    
})