
document.addEventListener('DOMContentLoaded',(event) =>{
    //Array com textos para digitar na máquina de escrever
    var dataText = [ "Tenha acesso aos melhores profissionais da galaxia", "A vaga que voce procura esta aqui", "Alcance novos ares!"];
    
    // digita um texto na máquina de escrever
    // continua chamando a si mesmo até que o texto termine
    function typeWriter(text, i, fnCallback) {
      // verifique se o texto ainda não foi concluído
      if (i < (text.length)) {
        // adicionar próximo caractere a h1
       document.querySelector(".intro_text h2").innerHTML = text.substring(0, i+1);
  
        // espere um pouco e chame esta função novamente para o próximo caractere
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // texto finalizado, chame o retorno de chamada se houver uma função de retorno de chamada
      else if (typeof fnCallback == 'function') {
        // chamada de retorno após o tempo limite
        setTimeout(fnCallback, 4000);
      }
    }


    // iniciar uma animação de máquina de escrever para um texto na matriz dataText
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(() =>{
            StartTextAnimation(0);
          }, 10000);
       }

       // verifique se dataText[i] existe
      else if (i < dataText[i].length) {
        // texto existe! iniciar a animação da máquina de escreve
       typeWriter(dataText[i], 0, () =>{
         // após o retorno de chamada (e todo o texto foi animado), inicie o próximo texto
         StartTextAnimation(i + 1);
       });
      }
    }


    //iniciar a animação de texto
    StartTextAnimation(0);
  });
 













