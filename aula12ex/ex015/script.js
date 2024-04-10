function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value >ano){
        window.alert('Verfique os dados novamente!')

    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >=0 && idade < 10 ){
                //crianca
                img.setAttribute('src','bebe-h.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src','jovem-h.jpg')
            } else if (idade < 50 ){
                //adulto
                img.setAttribute('src','adulto-h.jpg')
            }else {
                //idoso
                img.setAttribute('src','idoso-h.jpg')
            }

        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >=0 && idade < 10 ){
                //crianca
                img.setAttribute('src','bebe-m.jpg')

            } else if (idade < 21){
                img.setAttribute('src','jovem-m.jpg')
                //jovem
            } else if (idade < 50 ){
                img.setAttribute('src','adulto-m.jpg')
                //adulto
            }else {
                img.setAttribute('src','idoso-m.jpg')
                //idoso
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)



    }
        
    

}