
$(document).ready(function(){
    function exibirMensagens(){
        var mensagenssalvas = []
        if (localStorage.getItem("mensagens")){
            mensagenssalvas = JSON.parse(
                localStorage.getItem("mensagens")
            )
        }
        console.log(mensagenssalvas)
        if (mensagenssalvas.length > 0){
            $("#nenhumaMensagem").css("display", "none")
        }
        $("#tbody").html("")
        for (let x = 0; x < mensagenssalvas.length; x++ ){ //x++ é o mesmo que x = x + 1
            var usuario = mensagenssalvas[x].usuario
            var texto = mensagenssalvas[x].texto
            $("#tbody").append(
                `<tr> <td> ${usuario}</td><td>${texto}</td></tr>`
            )
        }
        

    }

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

        exibirMensagens()
        $("#username").val("")
        $("#mensagem").val("")
    })
    exibirMensagens()

    
})