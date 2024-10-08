const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");
const startRequired = document.getElementById("startRequired");
const endRequired = document.getElementById("endRequired");
const yearDisplay = document.getElementById("year");
const monthDisplay = document.getElementById("month");
const dayDisplay = document.getElementById("day");
const totalMonthDisplay = document.getElementById("totalMonth");

const daysInYear = 365.25;
const daysInMonth = 30.44;
const monthInYear = 12;

function countDate() {
  if (!startDate.value && !endDate.value) {
    startRequired.classList.remove("invisible");
    endRequired.classList.remove("invisible");
    startDate.classList.add("text-danger");
    endDate.classList.add("text-danger");
  } else if (!endDate.value) {
    endRequired.classList.remove("invisible");
    endDate.classList.add("text-danger");
  } else if (!startDate.value) {
    startRequired.classList.remove("invisible");
    startDate.classList.add("text-danger");
  } else {
    const startDateValue = new Date(startDate.value);
    const endDateValue = new Date(endDate.value);

    if (startDateValue > endDateValue) {
      alert("Start Date must not be greater than End Date");
      return;
    }
    const getTotalMilliseconds = endDateValue - startDateValue;

    const getTotalDays = Math.floor(
      getTotalMilliseconds / (1000 * 60 * 60 * 24)
    );
    const years = Math.floor(getTotalDays / daysInYear);
    const remainingDaysAfterYears = Math.floor(getTotalDays % daysInYear);
    const months = Math.floor(remainingDaysAfterYears / daysInMonth);
    const remainingDays = Math.floor(remainingDaysAfterYears % daysInMonth);
    const totalMonths = Math.floor(years * monthInYear + months);

    yearDisplay.textContent = `${years}`;
    monthDisplay.textContent = `${months}`;
    dayDisplay.textContent = `${remainingDays}`;
    totalMonthDisplay.textContent = `${totalMonths}`;
  }
}

function clearDate() {
  if (!startDate.value && !endDate.value) {
    alert("Nothing to clear.");
  } else {
    clearFieldValue();
  }
}

if (startDate.value !== null && endDate.value !== null) {
  startDate.addEventListener("input", function (event) {
    startRequired.classList.add("invisible");
    startDate.classList.remove("text-danger");
  });
  endDate.addEventListener("input", function (event) {
    endRequired.classList.add("invisible");
    endDate.classList.remove("text-danger");
  });
}

function dateToday() {
  let today = new Date();

  let formattedDate =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");

  endDate.value = formattedDate;
  endRequired.classList.add("invisible");
  endDate.classList.remove("text-danger");
}

function clearFieldValue() {
  startDate.value = "";
  endDate.value = "";
  startRequired.classList.add("invisible");
  endRequired.classList.add("invisible");
  startDate.classList.remove("text-danger");
  endDate.classList.remove("text-danger");
  yearDisplay.textContent = "0";
  monthDisplay.textContent = "0";
  yearDisplay.textContent = "0";
  dayDisplay.textContent = "0";
  totalMonthDisplay.textContent = "0";
}
