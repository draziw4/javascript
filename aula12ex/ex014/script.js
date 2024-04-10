function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
   
    
    
    msg.innerHTML= (`Agora são ${hora} horas.`)
    if(hora >= 0 && hora < 12){

        // bom dia
        img.src = 'fotomanha.jpeg'
        document.body.style.background= '#D5864A'

    } else if (hora >= 12 && hora <= 18){
        img.src = 'fototarde.jpeg'
        document.body.style.background= '#754C5F'

        // boa tarde

    } else {
        // boa noite
        img.src = 'fotonoite.jpeg'
        document.body.style.background ='#0E1318'
    }
}

