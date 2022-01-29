
$(document).ready(function(){
    $("#send").click(function(){
        var mensagenssalvas = []
        if (localStorage.getItem("mensagens")){
            mensagenssalvas = JSON.parse(
                localStorage.getItem("mensagens")
            )
        }
        
        var mensagem = {
            "usuario": $('#username').val(),
            "texto": $('#mensagem').val()
        }
        var mensagemTxt = JSON.stringify([ ...mensagenssalvas, mensagem])
        localStorage.setItem("mensagens",mensagemTxt)
    })
    
})