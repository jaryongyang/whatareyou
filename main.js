const suggestionBtn = document.getElementById("suggestionBtn");
const foodSuggestion = document.getElementById("foodSuggestion");
const actionButtons = document.getElementById("action-buttons");
const cookBtn = document.getElementById("cookBtn");
const orderBtn = document.getElementById("orderBtn");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const categoryButtons = document.querySelectorAll(".category-btn");

const menu = {
    all: ["김치찌개", "된장찌개", "순두부찌개", "부대찌개", "동태찌개", "청국장", "갈비탕", "설렁탕", "감자탕", "해장국", "육개장", "곰탕", "삼계탕", "매운탕", "삼겹살", "갈비", "불고기", "닭갈비", "오리구이", "고등어구이", "장어구이", "비빔밥", "김치볶음밥", "제육덮밥", "오징어덮밥", "회덮밥", "카레라이스", "하이라이스", "알밥", "주먹밥", "냉면", "라면", "칼국수", "잔치국수", "비빔국수", "쫄면", "막국수", "콩국수", "떡볶이", "라볶이", "순대", "튀김", "김밥", "어묵", "아귀찜", "해물찜", "갈비찜", "찜닭", "닭볶음탕", "코다리조림", "두부조림", "장조림", "보쌈", "족발", "순대국", "뼈해장국", "간장게장", "양념게장", "해물파전", "김치전", "감자전", "피자", "크림 파스타", "토마토 파스타", "오일 파스타", "리조또", "스테이크", "햄버거", "샌드위치", "샐러드", "돈까스", "함박스테이크", "초밥", "회", "가츠동", "규동", "일본라멘", "우동", "모밀소바", "텐동", "오코노미야끼", "짜장면", "짬뽕", "탕수육", "깐풍기", "유린기", "마파두부", "양장피", "쌀국수", "분짜", "팟타이", "나시고랭", "똠얌꿍", "인도커리", "닭강정", "만두", "볶음우동", "수제비", "곱창", "막창"],
    korean: ["김치찌개", "된장찌개", "순두부찌개", "부대찌개", "동태찌개", "청국장", "갈비탕", "설렁탕", "감자탕", "해장국", "육개장", "곰탕", "삼계탕", "매운탕", "삼겹살", "갈비", "불고기", "닭갈비", "오리구이", "고등어구이", "장어구이", "비빔밥", "김치볶음밥", "제육덮밥", "오징어덮밥", "회덮밥", "알밥", "주먹밥", "냉면", "칼국수", "잔치국수", "비빔국수", "쫄면", "막국수", "콩국수", "떡볶이", "라볶이", "순대", "튀김", "김밥", "어묵", "아귀찜", "해물찜", "갈비찜", "찜닭", "닭볶음탕", "코다리조림", "두부조림", "장조림", "보쌈", "족발", "순대국", "뼈해장국", "간장게장", "양념게장", "해물파전", "김치전", "감자전", "닭강정", "만두", "수제비", "곱창", "막창", "갈치조림", "병어조림", "꼬막비빔밥", "육회비빔밥", "산채비빔밥", "콩나물국밥", "소고기뭇국", "미역국", "시래기국", "추어탕", "보리밥", "돌솥비빔밥", "소머리국밥", "돼지국밥", "내장탕", "닭개장", "오리탕", "아구탕", "꽃게탕", "알탕", "낚지볶음", "주꾸미볶음", "더덕구이", "황태구이", "떡갈비", "너비아니", "수육", "편육", "홍어삼합", "과메기", "물회", "잡채", "궁중떡볶이", "소떡소떡"],
    chinese: ["짜장면", "짬뽕", "탕수육", "깐풍기", "유린기", "마파두부", "양장피", "고추잡채", "유산슬", "팔보채", "동파육", "난자완스", "라조기", "해물누룽지탕", "울면", "기스면", "중국냉면", "마라탕", "마라샹궈", "훠궈", "꿔바로우", "멘보샤", "어향가지", "경장육슬", "부추잡채", "춘권", "쇼마이", "딤섬", "샤오롱바오", "탄탄면", "우육면", "사천탕면", "삼선짬뽕", "고추짬뽕", "쟁반짜장", "사천짜장", "삼선짜장", "간짜장", "유니짜장", "볶음짬뽕", "크림새우", "칠리새우", "깐쇼새우", "유자새우", "누룽지탕", "마라롱샤", "해파리냉채", "오향장육", "새우볶음밥", "게살볶음밥", "삼선볶음밥", "잡채밥", "고추잡채밥", "마파두부밥", "유산슬밥", "송이덮밥", "새우덮밥", "오징어덮밥", "잡탕밥", "짜장밥", "짬뽕밥", "계란탕", "게살스프", "산라탕", "옥수수스프", "물만두", "군만두", "찐만두", "꽃빵", "공기밥", "오이무침", "짜사이", "단무지", "양파", "춘장", "xo소스볶음밥", "xo소스해물볶음", "매운짜장", "매운짬뽕", "해물쟁반짜장", "해물볶음짜장", "불타는짜장", "불타는짬뽕", "황제짬뽕", "통오징어짬뽕", "차돌짬뽕", "굴짬뽕", "꼬막짬뽕", "나가사키짬뽕", "백짬뽕", "해물우동", "해물울면", "삼선우동", "버섯탕수", "사천탕수육", "김치피자탕수육", "찹쌀탕수육"],
    japanese: ["초밥", "회", "가츠동", "규동", "일본라멘", "우동", "모밀소바", "텐동", "오코노미야끼", "타코야끼", "야끼소바", "돈코츠라멘", "미소라멘", "쇼유라멘", "시오라멘", "츠케멘", "아부라소바", "냉라멘", "야끼우동", "카레우동", "니꾸우동", "키츠네우동", "덴뿌라우동", "자루소바", "온소바", "마제소바", "카이센동", "사케동", "우나기동", "에비텐동", "부타동", "오야코동", "치킨가라아게", "에비후라이", "고로케", "돈까스", "치즈돈까스", "히레카츠", "로스카츠", "생선카츠", "치킨카츠", "나베", "스키야키", "밀푀유나베", "창코나베", "모츠나베", "김치나베", "카레나베", "규카츠", "함박스테이크", "오므라이스", "일본식카레", "하이라이스", "도리아", "그라탕", "야키토리", "쿠시카츠", "오뎅", "타마고야끼", "명란마요덮밥", "차슈덮밥", "장어덮밥", "낫토", "연두부튀김", "타코와사비", "에다마메", "우니", "도로", "이쿠라", "아마에비", "사시미", "스시", "테마끼", "마끼", "군함마끼", "유부초밥", "후토마끼", "캘리포니아롤", "스시롤", "라멘샐러드", "해초샐러드", "두부샐러드", "감자샐러드", "사누키우동", "나가사키카스테라", "당고", "모찌", "도라야끼", "메론빵", "녹차아이스크림", "사케", "하이볼", "일본맥주", "라무네", "메실주", "유자사와"],
    western: ["피자", "크림 파스타", "토마토 파스타", "오일 파스타", "리조또", "스테이크", "햄버거", "샌드위치", "샐러드", "돈까스", "함박스테이크", "필라프", "빠네", "라자냐", "뇨끼", "그라탕", "도리아", "클램차우더", "양송이스프", "콘스프", "브루스케타", "카프레제", "감바스 알 아히요", "시저샐러드", "콥샐러드", "리코타치즈샐러드", "그릭샐러드", "포케", "부리또", "타코", "퀘사디아", "나초", "파히타", "엔칠라다", "칠리 콘 카르네", "미트볼 스파게티", "까르보나라", "알프레도", "봉골레", "알리오올리오", "페스토파스타", "뽀모도로", "아라비아따", "로제파스타", "볼로네제", "해물파스타", "먹물파스타", "투움바파스타", "쉬림프박스", "비프스테이크", "포크스테이크", "치킨스테이크", "연어스테이크", "립아이스테이크", "안심스테이크", "등심스테이크", "티본스테이크", "토마호크스테이크", "수비드스테이크", "비프웰링턴", "피쉬앤칩스", "샥슈카", "에그인헬", "프렌치토스트", "와플", "팬케이크", "크로플", "베이글", "머핀", "스콘", "뺑오쇼콜라", "크루아상", "키슈", "마카롱", "에끌레어", "티라미수", "치즈케이크", "브라우니", "레드벨벳케이크", "당근케이크", "파운드케이크", "타르트", "푸딩", "판나코타", "젤라또", "아이스크림", "쉐이크", "스무디", "에이드", "샹그리아", "뱅쇼", "칵테일", "맥주", "와인"]
};

let currentCategory = "all";

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
    const currentMenu = menu[currentCategory];

    const spin = () => {
        const randomIndex = Math.floor(Math.random() * currentMenu.length);
        foodSuggestion.textContent = currentMenu[randomIndex];
        spinCount++;

        if (spinCount < maxSpins) {
            if(spinCount > maxSpins*0.8){
                spinSpeed = 200;
            } else if(spinCount > maxSpins*0.6){
                spinSpeed = 100;
            }
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
