$(document).ready(function(){
    $('#cpf').mask('000000000-00')
    $('#cep').mask('00000-000')
    $('#cellphone').mask('(00) 00000-0000')
    
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