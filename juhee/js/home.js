const calendar = document.querySelector(".calendar");
const monthText = document.querySelector(".month");

const topLinks = document.querySelectorAll(".top-date a");

const year = 2026;

// body에 적은 현재 month 값 가져오기
const currentMonth = Number(document.body.dataset.month);

// 달력 그리기
function renderCalendar(month) {
  calendar.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();

  const lastDate = new Date(year, month + 1, 0).getDate();

  // 왼쪽 큰 숫자
  monthText.textContent = String(month + 1).padStart(2, "0");

  // 상단 active 제거
  topLinks.forEach((link) => {
    link.classList.remove("current-month");
  });

  // 현재 월 active
  topLinks[month - 4].classList.add("current-month");

  // 날짜 생성
  for (let i = 0; i < 42; i++) {
    const day = document.createElement("div");

    day.classList.add("day");

    const date = i - firstDay + 1;

    if (date > 0 && date <= lastDate) {
      day.textContent = date;

      const currentDay = new Date(year, month, date).getDay();

      if (currentDay === 0) {
        day.classList.add("sun");
      }

      if (currentDay === 6) {
        day.classList.add("sat");
      }
    }

    calendar.appendChild(day);
  }
}

renderCalendar(currentMonth);
