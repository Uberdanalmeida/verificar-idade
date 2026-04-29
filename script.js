function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var txt = document.getElementById("tano");
  var res = document.getElementById("ver");

  if (txt.value.length == 0 || txt.value > ano) {
    alert("Verifique os dados.");
  } else {
    var sexo = document.getElementsByName("sex");
    var idade = ano - txt.value;
    var imag = document.getElementById("foto");
    var genero = "";

    if (sexo[0].checked) {
      genero = "Homem";

      if (idade >= 0 && idade < 10) {
        imag.src = "imagens/criança-menino.jpg";
        res.innerHTML = `Detectamos uma criança de ${idade} anos.`;
      } else if (idade > 9 && idade < 15) {
        imag.src = "imagens/menino.jpg";
        res.innerHTML = `Detectamos um  de ${idade} anos.`;
      } else if (idade > 14 && idade < 25) {
        imag.src = "imagens/jovem-homem.jpg";
        res.innerHTML = `Jovem de ${idade} anos.`;
      } else if (idade > 24 && idade < 60) {
        imag.src = "imagens/homem.jpg";
        res.innerHTML = `${genero} de ${idade} anos.`;
      } else {
        imag.src = "imagens/idoso.jpg";
        res.innerHTML = `${genero} de ${idade} anos.`;
      }
    }

    if (sexo[1].checked) {
      genero = "Mulher";

      if (idade >= 0 && idade < 10) {
        imag.src = "imagens/criança-menina.jpg";
        res.innerHTML = `Criança de ${idade} anos.`;
      } else if (idade > 9 && idade < 15) {
        imag.src = "imagens/menina.jpg";
        res.innerHTML = `Menina de ${idade} anos.`;
      } else if (idade > 14 && idade < 25) {
        imag.src = "imagens/jovem-mulher.jpg";
        res.innerHTML = `Jovem de ${idade} anos.`;
      } else if (idade > 24 && idade < 60) {
        imag.src = "imagens/mulher (2).jpg";
        res.innerHTML = `${genero} de ${idade} anos.`;
      } else {
        imag.src = "imagens/idosa.jpg";
        res.innerHTML = `${genero} de ${idade} anos.`;
      }
    }
  }
}
