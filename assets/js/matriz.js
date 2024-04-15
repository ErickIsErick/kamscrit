window.addEventListener('DOMContentLoaded', function () {
  let matrizOriginal = JSON.parse(localStorage.getItem('matrizOriginal'));

  if (matrizOriginal) {
    let letras = ['A', 'B', 'C'];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        document.querySelectorAll('.' + letras[i] + (j + 1)).forEach(function(input) {
          input.value = matrizOriginal[i][j];
        });
      }
    }
  }
});
    

//Si no ay matriz creada hace una con los datos, ademas que sobreescribe si hacen un cambio
document.getElementById("btnTriki").addEventListener("click", function () {
  document.querySelector('.resultados').style.height = '80vh';
  var A1 = parseFloat(document.querySelector(".A1").value);
  var A2 = parseFloat(document.querySelector(".A2").value);
  var A3 = parseFloat(document.querySelector(".A3").value);

  var B1 = parseFloat(document.querySelector(".B1").value);
  var B2 = parseFloat(document.querySelector(".B2").value);
  var B3 = parseFloat(document.querySelector(".B3").value);

  var C1 = parseFloat(document.querySelector(".C1").value);
  var C2 = parseFloat(document.querySelector(".C2").value);
  var C3 = parseFloat(document.querySelector(".C3").value);

  let matrizA = [A1, A2, A3];
  let matrizB = [B1, B2, B3];
  let matrizC = [C1, C2, C3];

  let matrizOriginal = [matrizA, matrizB, matrizC];

  localStorage.setItem('matrizOriginal', JSON.stringify(matrizOriginal));

  
  if (matrizOriginal) {
    let letras = ['A', 'B', 'C'];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        document.querySelectorAll('.' + letras[i] + (j + 1)).forEach(function(input) {
          input.value = matrizOriginal[i][j];
        });
      }
    }
  }






  // suma de las filas
  for (let x = 0; x < matrizOriginal.length; x++) {
    var sumfila = 0;
    var id = x + 1;
    for (let i = 0; i < matrizA.length; i++) {
      sumfila += matrizOriginal[x][i];
    }
    document.getElementById('sum' + id).value = sumfila;
  }

  //Suma columnas
  for (let x = 0; x < matrizOriginal[0].length; x++) {
    var sumColumna = 0;
    var id = x + 4;
    for (let i = 0; i < matrizOriginal.length; i++) {
      sumColumna += matrizOriginal[i][x];
    }
    document.getElementById('sum' + id).value = sumColumna;
  }

  //Suma diagonal 1
  var sumDiag = 0;
  for (let x = 0; x < matrizOriginal.length; x++) {
    sumDiag += matrizOriginal[x][x];
  }
  document.getElementById('diag1').value = sumDiag;

  //Suma diagonal 2
  sumDiag = 0;
  for (let x = 0; x < matrizOriginal.length; x++) {
    sumDiag += matrizOriginal[x][matrizOriginal.length - (x + 1)]
  }
  document.getElementById('diag2').value = sumDiag;






  //Matriz traspuesta
  let matrizTranspuesta = [];
  for (let i = 0; i < matrizOriginal.length; i++) {
      matrizTranspuesta[i] = [];
      for (let j = 0; j < matrizOriginal.length; j++) {
          matrizTranspuesta[i][j] = matrizOriginal[j][i];
      }
  }

  //Imprime matriz traspuesta 
  if (matrizTranspuesta) {
    let letras = ['A', 'B', 'C'];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        document.querySelectorAll('.tras' + letras[i] + (j + 1)).forEach(function(input) {
          input.value = matrizTranspuesta[i][j];
        });
      }
    }
  }






  //Justicia divina
  let temp =matrizOriginal[0][0];
  matrizOriginal[0][0] =matrizOriginal[2][2];
  matrizOriginal[2][2] = temp;
  temp =matrizOriginal[1][0];
  matrizOriginal[1][0] =matrizOriginal[1][2];
  matrizOriginal[1][2] = temp;
  temp =matrizOriginal[2][0];
  matrizOriginal[2][0] =matrizOriginal[0][2];
  matrizOriginal[0][2] = temp;
  temp =matrizOriginal[0][1];
  matrizOriginal[0][1] =matrizOriginal[2][1];
  matrizOriginal[2][1] = temp;

  //Imprime matriz Justicia divina 
  if (matrizOriginal) {
    let letras = ['A', 'B', 'C'];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        document.querySelectorAll('.justDiv' + letras[i] + (j + 1)).forEach(function(input) {
          input.value = matrizOriginal[i][j];
        });
      }
    }
  }
});