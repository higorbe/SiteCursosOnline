function estacoes(estacao)
  {
    switch (estacao) {
      //document.getElementById("status").style.backgroundColor
      //document.getElementById("status").style.color
      case '1':
        document.getElementById("status1").style.backgroundColor = "#6f42c1"
        document.getElementById("status1").style.height= "6.5rem"
        var texto = document.getElementById("status1").innerText = "Primeiro Curso de programação para iniciantes"
        break;
      case '2':
        document.getElementById("status2").style.backgroundColor = "#6f42c1" 
        document.getElementById("status2").style.height= "6.5rem"
        document.getElementById("status2").innerText = "Segundo Curso de programação para iniciantes"
        break;
      case '3':
        document.getElementById("status3").style.backgroundColor = "#6f42c1" 
        document.getElementById("status3").style.height= "6.5rem"
        document.getElementById("status3").innerText =  "Curso de programação para crianças e adolescentes com Scratch"
        break;
      case '4':
        document.getElementById("status4").style.backgroundColor = "#6f42c1" 
        document.getElementById("status4").style.height= "6.5rem"
        document.getElementById("status4").innerText =  "Curso de programação avançado"
        break;
      case '5':
        document.getElementById("status5").style.backgroundColor = "#6f42c1" 
        document.getElementById("status5").style.height= "6.5rem"
        document.getElementById("status5").innerText =  "Curso de lógica de programação parte 1"
        break;
      case '6':
        document.getElementById("status6").style.backgroundColor = "#6f42c1" 
        document.getElementById("status6").style.height= "6.5rem"
        document.getElementById("status6").innerText =  "Curso de lógica de programação parte 2"
        break;
      case '7':
        document.getElementById("status7").style.backgroundColor = "#6f42c1" 
        document.getElementById("status7").style.height= "6.5rem"
        document.getElementById("status7").innerText =  "Curso de Python completo"
        break;
      case '8':
        document.getElementById("status8").style.backgroundColor = "#6f42c1" 
        document.getElementById("status8").style.height= "6.5rem"
        document.getElementById("status8").innerText =  "Curso de JAVA completo"
        break;
      case '9':
        document.getElementById("status9").style.backgroundColor = "#6f42c1" 
        document.getElementById("status9").style.height= "6.5rem"
        document.getElementById("status9").innerText =  "Curso de PHP completo"
        break;
    }
  }
              
  function limpa1() {
    document.getElementById("status1").style.backgroundColor = "white";
    document.getElementById("status1").innerText =  "Curso de programação" 
  }
  function limpa2() {
    document.getElementById("status2").style.backgroundColor = "white";
    document.getElementById("status2").innerText =  "Curso de programação" 
  }
  function limpa3() {
    document.getElementById("status3").style.backgroundColor = "white";
    document.getElementById("status3").innerText =  "Curso de programação" 
  }
  function limpa4() {
    document.getElementById("status4").style.backgroundColor = "white";
    document.getElementById("status4").innerText =  "Curso de programação" 
  }
  function limpa5() {
    document.getElementById("status5").style.backgroundColor = "white";
    document.getElementById("status5").innerText =  "Curso de lógica de programação" 
  }
  function limpa6() {
    document.getElementById("status6").style.backgroundColor = "white";
    document.getElementById("status6").innerText =  "Curso de lógica de programação" 
  }
  function limpa7() {
    document.getElementById("status7").style.backgroundColor = "white";
    document.getElementById("status7").innerText =  "Curso de Python" 
  }
  function limpa8() {
    document.getElementById("status8").style.backgroundColor = "white";
    document.getElementById("status8").innerText =  "Curso de JAVA" 
  }
  function limpa9() {
    document.getElementById("status9").style.backgroundColor = "white";
    document.getElementById("status9").innerText =  "Curso de PHP" 
  }