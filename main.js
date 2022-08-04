function play(humanOption) {
  const result = document.querySelector(".result");
  const humanImg = document.querySelector(".human-img");
  const machineImg = document.querySelector(".machine-img");
  const machineOption = Math.floor(Math.random() * 3) + 1;
  humanImg.src = "/src/img/option" + humanOption + ".png";
  machineImg.src = "/src/img/option" + machineOption + ".png";
  machineImg.classList.add("reflex");
  document.querySelector(".cover").classList.add("reset");
  if (
    (humanOption === 1 && machineOption === 3) ||
    (humanOption === 2 && machineOption === 1) ||
    (humanOption === 3 && machineOption === 2)
  )
    result.innerHTML = `<p> 🎉 !Felicidades! <strong> Has Ganado </strong> 🎉</p>`;
  else if (humanOption === machineOption)
    result.innerHTML = `<p> <strong>! Empate !</strong> 🙁 </p>`;
  else
    result.innerHTML = `<p> <strong>! Lo siento !</strong> <br> <strong>La maquina ha ganado</strong> 😢 </p>`;
}

function reset() {
  document.querySelector(".human-img").src = "/src/img/preguntas.png";
  document.querySelector(".machine-img").src = "/src/img/preguntas.png";
  document.querySelector(".machine-img").classList.remove("reflex");
  document.querySelector(".cover").classList.remove("reset");
  document.querySelector(".result").innerHTML = "<strong>Resultado </strong> ";
}
