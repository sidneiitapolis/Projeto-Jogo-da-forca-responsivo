let biblioteca=[
    jogador1={
        nome:"enzo",
        sobre:"Criança da casa"
    },
    jogador2={
        nome:"silvana",
        sobre:"Namorada do Zé Luiz"
    },
    jogador3={
        nome:"boni",
        sobre:"Coelho do Enzo"
    },
    jogador4={
        nome:"ladrao",
        sobre:"Gato Pardo "
    },
    jogador5={
        nome:"baby",
        sobre:"Gato Retardado"
    },
    jogador6={
        nome:"silvio",
        sobre:"É pai do Enzo"
    },
    jogador7={
        nome:"cirrose",
        sobre:"Gato gordo"
    },
    jogador8={
        nome:"sidnei",
        sobre:"O mais bonito"
    },
    jogador9={
        nome:"Pretinha",
        sobre:"Gata traumatizada"
    }

]

let qtde=biblioteca.length-1
let pos = Math.round(Math.random()*qtde)
let palavra =biblioteca[pos].nome
let caracteristicas =biblioteca[pos].sobre
let tam=palavra.length
let cxletras=[]
let acertos=0
let errosMax=7
let erros=0
let desenhos=[]
let acertou=false
let jogando=false
jog=document.getElementById('letraJ')
let obj
let letraTmp
let letra
let pesq
let forcaImg=document.getElementById('dvforca')
let letraDica =document.getElementById('topoJ')

window.addEventListener('load',inicia)



function addTecla(x){
    document.getElementById('letraJ').value=x
    jogar()
}

function inicia(){
    
    forcaImg.style.backgroundImage="url('forca.png')"
    letraDica.style.display='block'
    jogando=true
    
    jog.value=""
    jog.focus()
    acertos=0
    erros=0
    acertou=false
    document.getElementById('dvletrasdigitadas').innerHTML=""
    pos = Math.round(Math.random()*qtde)
    palavra =biblioteca[pos].nome
    caracteristicas =biblioteca[pos].sobre
    tam=palavra.length
    defineletras(tam)
    document.getElementById('dvmsg').innerHTML=""
    
    
}

function dica(){
    alert(caracteristicas)
    jog.focus()
}



function jogar(){
    
    jog.focus()
        if (jog.value==''){
            alert("Digite uma letra")
        }else{
            if(jogando){
                letra=jog.value
                jog.value=""
                acertou=false
                pesq=palavra.match(letra)
                while(pesq!=null){
                    letraTmp=palavra.search(letra)
                    obj=document.getElementById('letra'+letraTmp).value=letra
                    palavra=palavra.replace(letra,'0')
                    acertos++
                    acertou=true
                    pesq=palavra.match(letra)
                }
                if(!acertou){
                    document.getElementById('dvletrasdigitadas').innerHTML+="  "+letra.toUpperCase()
                    erros++
                    if(erros<7){
                            for(let x=1;x<7;x++){
                                forcaImg.style.backgroundImage=`url(f${erros}.png)`
                            }    
                    }else{
                        forcaImg.style.backgroundImage="url('cabeca2.png')"
                        document.getElementById('dvmsg').innerHTML="Perdeu"                        
                        jogando=false

                        letraDica.style.display='none'
                        
                    }
                }
                if(acertos==tam){
                document.getElementById('dvmsg').innerHTML="Ganhou"                
                jogando=false
                letraDica.style.display='none'
                }
            }
        }
}

function defineletras(t){
    let obj
        for(let i=0;i<20;i++){
            obj=document.getElementById('letra'+i).value=""
            obj=document.getElementById('letra'+i).style.display='none'
        }
        for(let i=0;i<t;i++){
            obj=document.getElementById('letra'+i).style.display='inline-block'

        }
}

