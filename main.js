const suggestionBtn = document.getElementById("suggestionBtn");
const foodSuggestion = document.getElementById("foodSuggestion");
const actionButtons = document.getElementById("action-buttons");
const cookBtn = document.getElementById("cookBtn");
const orderBtn = document.getElementById("orderBtn");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const categoryButtons = document.querySelectorAll(".category-btn");
const menuItemInput = document.getElementById("menu-item-input");
const menuCategorySelect = document.getElementById("menu-category-select");
const addMenuBtn = document.getElementById("add-menu-btn");
const removeMenuBtn = document.getElementById("remove-menu-btn");


let menu = JSON.parse(localStorage.getItem('menu')) || {
    korean: ["김치찌개", "된장찌개", "비빔밥"],
    chinese: ["짜장면", "짬뽕", "탕수육"],
    japanese: ["초밥", "라멘", "돈까스"],
    western: ["파스타", "피자", "스테이크"]
};

let currentCategory = "all";

function updateAllCategory() {
    menu.all = [...new Set([...menu.korean, ...menu.chinese, ...menu.japanese, ...menu.western])];
}

function saveMenu() {
    localStorage.setItem('menu', JSON.stringify(menu));
}

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        categoryButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        currentCategory = button.dataset.category;
    });
});

suggestionBtn.addEventListener("click", () => {
    suggestionBtn.disabled = true;
    actionButtons.style.display = "none";
    foodSuggestion.textContent = "";

    let spinCount = 0;
    const maxSpins = 50;
    let spinSpeed = 50;
    updateAllCategory();
    const currentMenu = menu[currentCategory] || [];

    if (currentMenu.length === 0) {
        foodSuggestion.textContent = "메뉴가 없어요!";
        suggestionBtn.disabled = false;
        return;
    }

    const spin = () => {
        const randomIndex = Math.floor(Math.random() * currentMenu.length);
        foodSuggestion.textContent = currentMenu[randomIndex];
        spinCount++;

        if (spinCount < maxSpins) {
            if (spinCount > maxSpins * 0.8) spinSpeed = 200;
            else if (spinCount > maxSpins * 0.6) spinSpeed = 100;
            setTimeout(spin, spinSpeed);
        } else {
            const finalRandomIndex = Math.floor(Math.random() * currentMenu.length);
            foodSuggestion.textContent = currentMenu[finalRandomIndex];
            suggestionBtn.disabled = false;
            actionButtons.style.display = "block";
        }
    }
    spin();
});

cookBtn.addEventListener("click", () => {
    const selectedFood = foodSuggestion.textContent;
    window.open(`https://www.youtube.com/results?search_query=${selectedFood} 레시피`, "_blank");
});

orderBtn.addEventListener("click", () => {
    const selectedFood = foodSuggestion.textContent;
    window.open(`https://map.naver.com/p/search/${selectedFood}`, "_blank");
});

addMenuBtn.addEventListener("click", () => {
    const newItem = menuItemInput.value.trim();
    const category = menuCategorySelect.value;
    if (newItem && !menu[category].includes(newItem)) {
        menu[category].push(newItem);
        saveMenu();
        menuItemInput.value = "";
        alert(`'${newItem}'이(가) 추가되었습니다.`);
    } else if (!newItem) {
        alert("메뉴 이름을 입력해주세요.");
    } else {
        alert("이미 있는 메뉴입니다.");
    }
});

removeMenuBtn.addEventListener("click", () => {
    const itemToRemove = menuItemInput.value.trim();
    const category = menuCategorySelect.value;
    const itemIndex = menu[category].indexOf(itemToRemove);

    if (itemToRemove && itemIndex !== -1) {
        menu[category].splice(itemIndex, 1);
        saveMenu();
        menuItemInput.value = "";
        alert(`'${itemToRemove}'이(가) 삭제되었습니다.`);
    } else if (!itemToRemove) {
        alert("삭제할 메뉴 이름을 입력해주세요.");
    } else {
        alert(`'${itemToRemove}' 메뉴를 찾을 수 없습니다.`);
    }
});

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
});

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }
    document.querySelector('.category-btn[data-category="all"]').classList.add('active');
    updateAllCategory(); 
});
