const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generate = () => {
  const min = document.getElementById("min");
  const max = document.getElementById("max");
  const minEl = Number(min.value);
  const maxEl = Number(max.value);

  if (minEl === "" || maxEl === "") {
    alert("Iltimos, ma'lumotlarni to'ldiring");
    return;
  }

  if (minEl > maxEl) {
    alert("Min son  Max sondan katta bo'lmasligi kerak");
    return;
  }

  const placeholder = document.getElementById("placeholder");
  placeholder.textContent = getRandomNumber(minEl, maxEl);
};

const btnEl = document.getElementById("generate");

btnEl.addEventListener("click", generate);
