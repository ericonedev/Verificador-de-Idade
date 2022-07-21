 function verificar(){
    let data = new Date()
    let ano= data.getFullYear()
    let formAno = document.querySelector(`input#txtano`)
    var res = document.querySelector(`div#res`)
    if(formAno.value.length == 0 || formAno.value > ano){
        alert(`[erro] Verifique os dados e tente novamente`)
    }else {
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano- Number(formAno.value)
        var geneno = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)
        if(fsex[0].checked) {
            genero = `homem`
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src' , 'bebemenino.png')
            }else if( idade<21){
                //jovem
                img.setAttribute('src' , 'homemjovem.png')

            }else if(idade <50){
                //adulto
                img.setAttribute('src' , 'homemadulto.png')

            }else{
                //idoso
                img.setAttribute('src' , 'homemidoso.png')

            }
        }else if(fsex[1].checked){
            genero = `mulher`
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src' , 'bebemenina.png')

            }else if( idade<21){
                //jovem
                img.setAttribute('src' , 'mulherjovem.png')

            }else if(idade <50){
                //adulto
                img.setAttribute('src' , 'mulheradulta.png')

            }else{
                //idoso
                img.setAttribute('src' , 'mulheridosa.png')

            }
        }

        res.style.alignItens="center"
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    

    }


 }

