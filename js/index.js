
$(document).ready(function(){
    $("#send").click(function(){
        var usuario = $('#username').val()
        var texto = $('#mensagem').val()
        var mensagem = {
            "usuario": $('#username').val(),
            "texto": $('#mensagem').val()
        }
        var mensagemTxt = JSON.stringify([mensagem])
        localStorage.setItem("mensagens",mensagemTxt)
    })
    
})