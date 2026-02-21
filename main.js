const suggestionBtn = document.getElementById("suggestionBtn");
const foodSuggestion = document.getElementById("foodSuggestion");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

const menu = ["치킨", "피자", "햄버거", "라면", "김치찌개", "된장찌개", "초밥", "파스타", "떡볶이"];

suggestionBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * menu.length);
    foodSuggestion.textContent = menu[randomIndex];
});

// 테마 전환 버튼 클릭 이벤트
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // 사용자의 테마 선택 저장
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark-mode");
    } else {
        localStorage.removeItem("theme");
    }
});

// 페이지 로드 시 저장된 테마 적용
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark-mode") {
        body.classList.add("dark-mode");
    }
});
