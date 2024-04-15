window.addEventListener('DOMContentLoaded', function () {
  let matriz1 = JSON.parse(localStorage.getItem('matriz1'));
  let matriz2 = JSON.parse(localStorage.getItem('matriz2'));

  if (matriz1) {
    let letras = ['A', 'B', 'C'];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        document.querySelector('.M1' + letras[i] + (j + 1)).value = matriz1[i][j];
      }
    }
  }

  if (matriz2) {
    let letras = ['A', 'B', 'C'];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        document.querySelector('.M2' + letras[i] + (j + 1)).value = matriz2[i][j];
      }
    }
  }
});

document.getElementById("btnMult").addEventListener("click", function () {
    document.querySelector('.resultado').style.height = '80vh';
    var M1A1 = parseFloat(document.querySelector(".M1A1").value);
    var M1A2 = parseFloat(document.querySelector(".M1A2").value);
    var M1A3 = parseFloat(document.querySelector(".M1A3").value);
  
    var M1B1 = parseFloat(document.querySelector(".M1B1").value);
    var M1B2 = parseFloat(document.querySelector(".M1B2").value);
    var M1B3 = parseFloat(document.querySelector(".M1B3").value);
  
    var M1C1 = parseFloat(document.querySelector(".M1C1").value);
    var M1C2 = parseFloat(document.querySelector(".M1C2").value);
    var M1C3 = parseFloat(document.querySelector(".M1C3").value);
  
    let matrizA1 = [M1A1, M1A2, M1A3];
    let matrizB1 = [M1B1, M1B2, M1B3];
    let matrizC1 = [M1C1, M1C2, M1C3];
  
    let matriz1 = [matrizA1, matrizB1, matrizC1];
  
    localStorage.setItem('matriz1', JSON.stringify(matriz1));

    var letras = ['A', 'B', 'C'];
    
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        document.querySelector('.M1' + letras[i] + (j + 1)).value = matriz1[i][j];
      }
    }

    var M2A1 = parseFloat(document.querySelector(".M2A1").value);
    var M2A2 = parseFloat(document.querySelector(".M2A2").value);
    var M2A3 = parseFloat(document.querySelector(".M2A3").value);
  
    var M2B1 = parseFloat(document.querySelector(".M2B1").value);
    var M2B2 = parseFloat(document.querySelector(".M2B2").value);
    var M2B3 = parseFloat(document.querySelector(".M2B3").value);

    var M2C1 = parseFloat(document.querySelector(".M2C1").value);
    var M2C2 = parseFloat(document.querySelector(".M2C2").value);
    var M2C3 = parseFloat(document.querySelector(".M2C3").value);
  
    let matrizA2 = [M2A1, M2A2, M2A3];
    let matrizB2 = [M2B1, M2B2, M2B3];
    let matrizC2 = [M2C1, M2C2, M2C3];
  
    let matriz2 = [matrizA2, matrizB2, matrizC2];
  
    localStorage.setItem('matriz2', JSON.stringify(matriz2));
    
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        document.querySelector('.M2' + letras[i] + (j + 1)).value = matriz2[i][j];
      }
    }


    let multMatriz = [];
    for (let i = 0; i < matrizA1.length; i++) {
        multMatriz[i] = [];
        for (let j = 0; j < matrizA1.length; j++) {
            multMatriz[i][j] = 0;
            for (let k = 0; k < matrizA1.length; k++) {
                multMatriz[i][j] += matriz1[i][k] * matriz2[k][j];
            }
        }
    }
    console.log(multMatriz);
    if (multMatriz) {
        let letras = ['A', 'B', 'C'];
    
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            document.querySelectorAll('.prod' + letras[i] + (j + 1)).forEach(function(input) {
              input.value = multMatriz[i][j];
            });
          }
        }
      }
});
