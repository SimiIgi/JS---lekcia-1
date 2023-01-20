// tady je místo pro náš program

function zobraz_vysledok() {
  let vysledok = document.querySelector("#vysledek");
  vysledok.innerHTML = secti(4, 5);

}

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */


function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!");

  let text_stvorec = document.querySelector(".ctverecek");
  text_stvorec.innerHTML = "Gratulace, právě jsi spustila tuto funkci!";
  text_stvorec.style.lineHeight = "20px"
}

function farba_stvorceka() {
  let farba_stvorca = document.querySelector(".ctverecek");
  farba_stvorca.style.backgroundColor = "green";
}


