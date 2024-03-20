const textoArea = document.querySelector("#textoArea");

const mostrarResultado = document.querySelector("#resultado")


function criptografarTexto () {
const texto = textoArea.value.replace(/e/g, "enter").replace(/i/g, "ilos").replace(/a/g, "oi").replace(/o/g, "ober").replace(/u/g, "umat")

document.getElementById('resultado').innerHTML = '<div readonly class="shadow-resultado">' + texto + 
'</div>' + '<button class="criptografar" id="copiar" onclick="copiar()">Copiar</button>'
   
}

function descriptografar () {
    const texto = textoArea.value.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    
    document.getElementById('resultado').innerHTML = '<div readonly class="shadow-resultado">' + texto + 
    '</div>' + '<button class="criptografar" id="copiar" onclick="copiar()">Copiar</button>'
       
    }


function copiar () {
    var textoCop = document.getElementById('textoArea');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}


