const suggestionBtn = document.getElementById("suggestionBtn");
const foodSuggestion = document.getElementById("foodSuggestion");

const menu = ["치킨", "피자", "햄버거", "라면", "김치찌개", "된장찌개", "초밥", "파스타", "떡볶이"];

suggestionBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * menu.length);
    foodSuggestion.textContent = menu[randomIndex];
});