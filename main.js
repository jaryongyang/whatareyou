const suggestionBtn = document.getElementById("suggestionBtn");
const foodSuggestion = document.getElementById("foodSuggestion");
const actionButtons = document.getElementById("action-buttons");
const cookBtn = document.getElementById("cookBtn");
const orderBtn = document.getElementById("orderBtn");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

const menu = [
    "김치찌개", "된장찌개", "순두부찌개", "부대찌개", "동태찌개", "청국장", "갈비탕", "설렁탕", "감자탕", "해장국", 
    "육개장", "곰탕", "삼계탕", "매운탕", "삼겹살", "갈비", "불고기", "닭갈비", "오리구이", "고등어구이", 
    "장어구이", "비빔밥", "김치볶음밥", "제육덮밥", "오징어덮밥", "회덮밥", "카레라이스", "하이라이스", "알밥", "주먹밥", 
    "냉면", "라면", "칼국수", "잔치국수", "비빔국수", "쫄면", "막국수", "콩국수", "떡볶이", "라볶이", 
    "순대", "튀김", "김밥", "어묵", "아귀찜", "해물찜", "갈비찜", "찜닭", "닭볶음탕", "코다리조림", 
    "두부조림", "장조림", "보쌈", "족발", "순대국", "뼈해장국", "간장게장", "양념게장", "해물파전", "김치전", 
    "감자전", "피자", "크림 파스타", "토마토 파스타", "오일 파스타", "리조또", "스테이크", "햄버거", "샌드위치", "샐러드", 
    "돈까스", "함박스테이크", "초밥", "회", "가츠동", "규동", "일본라멘", "우동", "모밀소바", "텐동", 
    "오코노미야끼", "짜장면", "짬뽕", "탕수육", "깐풍기", "유린기", "마파두부", "양장피", "쌀국수", "분짜", 
    "팟타이", "나시고랭", "똠얌꿍", "인도커리", "닭강정", "만두", "볶음우동", "수제비", "곱창", "막창"
];

suggestionBtn.addEventListener("click", () => {
    suggestionBtn.disabled = true;
    actionButtons.style.display = "none";
    foodSuggestion.textContent = "";

    let spinCount = 0;
    const maxSpins = 50; 
    let spinSpeed = 50;

    const spin = () => {
        const randomIndex = Math.floor(Math.random() * menu.length);
        foodSuggestion.textContent = menu[randomIndex];
        spinCount++;

        if (spinCount < maxSpins) {
            if(spinCount > maxSpins*0.8){
                spinSpeed = 200;
            } else if(spinCount > maxSpins*0.6){
                spinSpeed = 100;
            }
            setTimeout(spin, spinSpeed);
        } else {
            const finalRandomIndex = Math.floor(Math.random() * menu.length);
            foodSuggestion.textContent = menu[finalRandomIndex];
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
