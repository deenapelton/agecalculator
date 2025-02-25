const btnEl = document.getElementById("btn");
const birthDayEl = document.getElementById("bDay");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthDayValue = birthDayEl.value;
  if (birthDayValue === "") {
    alert("Please enter your birthday");
  } else {
    const currentAge = getAge(birthDayValue);
    resultEl.innerHTML = `You're ${currentAge} ${
      currentAge > 1 ? "years" : "year"
    } old! `;
  }
}
function getAge(birthDayValue) {
  const todaysDate = new Date();
  const birthDayDate = new Date(birthDayValue);
  let age = todaysDate.getFullYear() - birthDayDate.getFullYear();
  const months = todaysDate.getMonth() - birthDayDate.getMonth();
  if (
    months < 0 ||
    (months === 0 && todaysDate.getDate() < birthDayDate.getDate())
  ) {
    age--;
  }
  return age;
}
btnEl.addEventListener("click", calculateAge);
