// === ДОПОЛНИТЕЛЬНЫЕ ГОРОДА (Волжский путь) ===
const volgaWaypoints = [
    {
        id: "baltic_v", name: "Варяжское море (Балтика)",
        coords: [59.3, 19.0],
        img: "assets/images/route_varyagi.png",
        desc: "Балтийское море, откуда скандинавские купцы начинали свой путь на Восток.",
        history: "Шведские викинги (русы) снаряжали торговые экспедиции с острова Готланд и Бирки, пересекали море и входили в Финский залив.",
        events: ["Начало походов на Восток в VIII веке", "Торговля пушниной со скандинавами", "Сбор флотилий ладей"]
    },
    {
        id: "ladoga_v", name: "Старая Ладога",
        coords: [59.998, 32.296],
        img: "assets/images/city_ladoga.png",
        desc: "Северные ворота восточных путей, первая стоянка купцов.",
        history: "Основана в 753 году. Скандинавские ладьи останавливались здесь для ремонта и отдыха перед тяжелым подъемом по реке Волхов.",
        events: ["753 г. — Основание города", "862 г. — Призвание Рюрика", "Крупнейший пункт обмена товарами"]
    },
    {
        id: "novgorod_v", name: "Великий Новгород",
        coords: [58.521, 31.271],
        img: "assets/images/city_novgorod.png",
        desc: "Начальная точка Волжского пути. Отсюда товары шли через Ильмень на юго-восток.",
        history: "Новгород был связан с Волжским путём через систему рек и волоков. Купцы перетаскивали ладьи из бассейна Ильменя в бассейн Волги.",
        events: ["IX в. — Начало использования Волжского пути", "X в. — Расцвет торговли с арабами"]
    },
    {
        id: "vladimir", name: "Владимир",
        coords: [56.129, 40.407],
        img: "assets/images/city_vladimir.png",
        desc: "Столица Владимиро-Суздальского княжества. Важный узел на пути к Волге.",
        history: "Основан в 990 году Владимиром Святославичем. При Андрее Боголюбском стал фактической столицей Руси. Славился белокаменным зодчеством — Успенский собор, Золотые ворота.",
        events: ["1108 г. — Укрепление Владимиром Мономахом", "1157 г. — Столица при Андрее Боголюбском", "1238 г. — Разорение Батыем"]
    },
    {
        id: "bulgar", name: "Булгар",
        coords: [54.976, 49.054],
        img: "assets/images/city_bulgar.png",
        desc: "Столица Волжской Булгарии. Крупнейший торговый центр Поволжья.",
        history: "Город на слиянии Волги и Камы. Здесь встречались караваны из Средней Азии, арабского мира и Руси. Через Булгар на Русь поступало арабское серебро — дирхемы.",
        events: ["922 г. — Принятие ислама", "965 г. — Поход Святослава", "1236 г. — Разрушение монголами"]
    },
    {
        id: "itil", name: "Итиль",
        coords: [47.1, 47.5],
        img: "assets/images/city_itil.png",
        desc: "Столица Хазарского каганата в устье Волги. Конечная точь южного направления.",
        history: "Располагался в дельте Волги. Контролировал выход в Каспийское море и торговлю с Персией. Хазары взимали десятину (10%) со всех проходящих товаров.",
        events: ["VII в. — Основание каганата", "965 г. — Разгром Святославом Игоревичем", "Контроль караванных путей в Персию"]
    }
];

// === ТОВАРЫ ПО МАРШРУТАМ ===
const routeGoods = {
    varyagi: [
        { icon: "🦫", name: "Меха" },
        { icon: "🕯️", name: "Воскъ" },
        { icon: "🪡", name: "Шёлкъ" },
        { icon: "🪙", name: "Сребро" },
        { icon: "🍯", name: "Мёдъ" },
        { icon: "⚔️", name: "Мечи" },
        { icon: "🏺", name: "Вино" },
        { icon: "📿", name: "Пряности" }
    ],
    volga: [
        { icon: "🦫", name: "Меха" },
        { icon: "🪙", name: "Дирхемы" },
        { icon: "🧶", name: "Ткани" },
        { icon: "💎", name: "Камни" },
        { icon: "🍯", name: "Мёдъ" },
        { icon: "🏺", name: "Керамика" },
        { icon: "🐴", name: "Кони" },
        { icon: "🧂", name: "Соль" }
    ]
};

// === ЭКОНОМИКА МАРШРУТОВ ===
const routeEconomics = {
    varyagi: [
        "• Шкурка соболя = 2-3 византийских золотых",
        "• Фунт воска = 1 серебряная монета",
        "• Рабы — самый дорогой «товар»",
        "• Купец платил 10% пошлины в Царьграде",
        "• Средняя прибыль похода: 300-500%"
    ],
    volga: [
        "• 1 связка мехов = 10-50 дирхемов",
        "• Хазары взимали десятину (10%)",
        "• Арабское серебро — основа денежного оборота Руси IX-X вв.",
        "• Мёд и воск ценились на вес серебра",
        "• Средняя прибыль похода: 200-400%"
    ]
};

// === ИСТОРИЧЕСКИЕ ПЕРСОНЫ ПО ЭПОХАМ ===
const epochPersons = [
    // 882
    [
        { icon: "👑", name: "Олег Вещий", role: "Объединитель Руси, прибил щит к вратам Царьграда" },
        { icon: "⚔️", name: "Рюрик", role: "Основатель династии, призванный варяг" },
        { icon: "🛡️", name: "Аскольд и Дир", role: "Первые правители Киева из варягов" }
    ],
    // 1054
    [
        { icon: "👑", name: "Ярослав Мудрый", role: "Создатель «Русской Правды», строитель соборов" },
        { icon: "📖", name: "Иларион", role: "Первый митрополит из русских, автор «Слова о Законе и Благодати»" },
        { icon: "📜", name: "Нестор Летописец", role: "Монах, создатель летописной традиции" }
    ],
    // 1237
    [
        { icon: "⚔️", name: "Батый", role: "Хан, уничтоживший десятки русских городов" },
        { icon: "🛡️", name: "Александр Невский", role: "Победитель на Неве и Чудском озере" },
        { icon: "🔥", name: "Евпатий Коловрат", role: "Рязанский боярин, герой сопротивления" }
    ],
    // 1380
    [
        { icon: "👑", name: "Дмитрий Донской", role: "Победитель Куликовской битвы" },
        { icon: "🙏", name: "Сергий Радонежский", role: "Благословил войско на битву с Мамаем" },
        { icon: "⚔️", name: "Мамай", role: "Темник Золотой Орды, потерпевший поражение" }
    ],
    // 1462
    [
        { icon: "👑", name: "Иван III Великий", role: "Собиратель русских земель, разорвал ханскую грамоту" },
        { icon: "🏰", name: "Софья Палеолог", role: "Племянница последнего императора Византии" },
        { icon: "🏛️", name: "Аристотель Фиораванти", role: "Итальянский зодчий, строитель Успенского собора в Москве" }
    ]
];

// === ИСТОРИЧЕСКИЕ ФАКТЫ ===
const epochFacts = [
    "В 907 году Олег подошёл к Константинополю с 2000 ладей. Греки заперли бухту цепью, но Олег приказал поставить корабли на колёса и двинул их по суше к стенам города. Потрясённые византийцы заключили выгодный мир.",
    "При Ярославе Мудром Киев насчитывал около 50 000 жителей, 400 церквей и 8 рынков. Это было больше, чем в тогдашнем Париже или Лондоне. Дочери Ярослава стали королевами Франции, Норвегии и Венгрии.",
    "Монгольская армия Батыя насчитывала от 30 до 40 тысяч всадников. За зиму 1237-1238 годов были разрушены 14 городов Северо-Восточной Руси. Рязань, Владимир, Суздаль — все были сожжены дотла.",
    "На Куликовом поле 8 сентября 1380 года сошлись около 60 000 русских воинов и примерно столько же ордынцев Мамая. Засадный полк Владимира Серпуховского решил исход битвы, ударив в тыл татарам.",
    "Иван III в 1480 году отказался платить дань Орде, разорвав ханскую басму (грамоту). Стояние на реке Угре завершилось без генерального сражения — хан Ахмат отступил, и 240-летнее иго закончилось."
];

// === РАСШИРЕННЫЕ ДАННЫЕ ДЛЯ GeoJSON ===
const geoJsonData_882 = {
    type: "FeatureCollection",
    features: [{
        type: "Feature",
        properties: {
            name: "Рождение Руси (862)", color: "#2e7d32",
            img: "assets/images/epoch_882.png",
            desc: "Олег Вещий объединил Новгород и Киев, создав единое государство. Путь «Из варяг в греки» стал главной торговой артерией. Олег совершил победоносный поход на Константинополь в 907 году."
        },
        geometry: { type: "Polygon", coordinates: [[[28, 60], [36, 60], [38, 55], [35, 50], [28, 50], [26, 55], [28, 60]]] }
    }]
};

const geoJsonData_1380 = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            properties: {
                name: "Московское княжество (1380)", color: "#b91c1c",
                img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Apollinary_Vasnetsov_-_Kremlin_under_Ivan_III.jpg",
                desc: "Дмитрий Донской возглавил объединение русских сил против Орды. Победа на Куликовом поле показала, что монголов можно побеждать."
            },
            geometry: { type: "Polygon", coordinates: [[[35, 58], [42, 58], [42, 54], [36, 54], [35, 58]]] }
        },
        {
            type: "Feature",
            properties: {
                name: "Золотая Орда", color: "#d4a017",
                img: "assets/images/region_golden_horde.png",
                desc: "Ослабленная междоусобицами Орда теряла контроль. Мамай — не хан, а темник — пытался восстановить власть над Русью, но потерпел поражение."
            },
            geometry: { type: "Polygon", coordinates: [[[38, 53], [52, 53], [52, 46], [38, 46], [38, 53]]] }
        }
    ]
};

// === ВИКТОРИНА (30 вопросов, показывается 10 случайных) ===
const allQuizQuestions = [
    { q: "В каком году Олег прибил щит к вратам Царьграда?", opts: ["882 г.", "907 г.", "988 г.", "1054 г."], ans: 1 },
    { q: "Как называлось народное собрание в Новгороде?", opts: ["Дума", "Вече", "Собор", "Круг"], ans: 1 },
    { q: "Кто крестил Русь в 988 году?", opts: ["Олег Вещий", "Игорь Рюрикович", "Святослав Игоревич", "Владимир Святославич"], ans: 3 },
    { q: "Какой город называли «Царьградом»?", opts: ["Рим", "Константинополь", "Иерусалим", "Александрия"], ans: 1 },
    { q: "Что такое «волок» в торговле Руси?", opts: ["Речной порог", "Перетаскивание судов по суше", "Тип торгового судна", "Оборонительный вал"], ans: 1 },
    { q: "Какую пошлину взимали хазары с купцов?", opts: ["5%", "10%", "20%", "25%"], ans: 1 },
    { q: "Кто одержал победу на Куликовом поле в 1380 г.?", opts: ["Мамай", "Батый", "Дмитрий Донской", "Иван III"], ans: 2 },
    { q: "Как приблизительно называлось население Киева при Ярославе Мудром?", opts: ["~10 000", "~25 000", "~50 000", "~100 000"], ans: 2 },
    { q: "Что русские купцы привозили из Византии?", opts: ["Меха и воск", "Шёлк и вино", "Мёд и соль", "Железо и лес"], ans: 1 },
    { q: "В каком году завершилось монголо-татарское иго на Руси?", opts: ["1380 г.", "1453 г.", "1480 г.", "1505 г."], ans: 2 },
    { q: "Как называлась арабская серебряная монета, ходившая на Руси?", opts: ["Гривна", "Дирхем", "Денарий", "Талер"], ans: 1 },
    { q: "Кто благословил Дмитрия Донского на Куликовскую битву?", opts: ["Митрополит Алексий", "Патриарх Филарет", "Сергий Радонежский", "Иларион Киевский"], ans: 2 },
    { q: "Через какое море шёл путь «Из варяг в греки» на юге?", opts: ["Средиземное", "Чёрное", "Адриатическое", "Эгейское"], ans: 1 },
    { q: "Как называлась столица Волжской Булгарии?", opts: ["Итиль", "Булгар", "Сарай", "Казань"], ans: 1 },
    { q: "В каком году состоялась Невская битва?", opts: ["1223 г.", "1237 г.", "1240 г.", "1242 г."], ans: 2 },
    { q: "Кто написал «Русскую Правду» — первый свод законов Руси?", opts: ["Олег Вещий", "Владимир Святой", "Ярослав Мудрый", "Владимир Мономах"], ans: 2 },
    { q: "Какой товар был главным экспортом Руси в Византию?", opts: ["Хлеб", "Меха и воск", "Железо", "Камень"], ans: 1 },
    { q: "В каком году монголы взяли и сожгли Киев?", opts: ["1237 г.", "1238 г.", "1240 г.", "1242 г."], ans: 2 },
    { q: "Как назывались суда, на которых русы спускались по Днепру в Византию?", opts: ["Драккары", "Моноксилы (однодеревки)", "Каравеллы", "Галеры"], ans: 1 },
    { q: "Где пересекались Волжский путь и путь «Из варяг в греки»?", opts: ["Смоленск", "Великий Новгород", "Ростов", "Суздаль"], ans: 1 },
    { q: "Кто разгромил Хазарский каганат в 965 году?", opts: ["Олег Вещий", "Игорь Рюрикович", "Святослав Игоревич", "Владимир Святой"], ans: 2 },
    { q: "Какое море на Руси называли «Хвалисским»?", opts: ["Чёрное", "Азовское", "Каспийское", "Балтийское"], ans: 2 },
    { q: "Как называлась столица Хазарского каганата?", opts: ["Булгар", "Итиль", "Сарай", "Дербент"], ans: 1 },
    { q: "Кого, согласно летописи, убил князь Олег, захватив Киев в 882 году?", opts: ["Рюрика", "Синеуса и Трувора", "Аскольда и Дира", "Святополка Окаянного"], ans: 2 },
    { q: "Что символизировал щит Олега на вратах Царьграда?", opts: ["Мир и торговый договор", "Завоевание города", "Смерть воина", "Начало войны"], ans: 0 },
    { q: "Как называлось сезонное собирание Рюриковичами даней с подданных?", opts: ["Полюдье", "Тягло", "Оброк", "Барщина"], ans: 0 },
    { q: "В каком году Иван III присоединил Великий Новгород?", opts: ["1462 г.", "1471 г.", "1478 г.", "1485 г."], ans: 2 },
    { q: "Сколько церквей было в Киеве при Ярославе Мудром?", opts: ["100", "200", "400", "800"], ans: 2 },
    { q: "Кто такой «засадный полк» на Куликовом поле?", opts: ["Монгольский резерв", "Скрытый русский резерв ударивший в тыл татарам", "Стрелки с луками", "Конная разведка"], ans: 1 },
    { q: "Какую концепцию выдвинул монах Филофей в начале XVI века?", opts: ["Москва — Новый Рим", "Москва — Третий Рим", "Москва — Святой Город", "Москва — Новый Иерусалим"], ans: 1 }
];

// Shuffle and pick 10 questions per session
let sessionQuestions = [];
let currentQuiz = 0;
let quizScore = 0;
let quizOpen = false;

function shuffleQuiz() {
    const arr = [...allQuizQuestions];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    sessionQuestions = arr.slice(0, 10);
}

function renderGoods(route) {
    const grid = document.getElementById('goods-grid');
    if (!grid) return;
    const goods = routeGoods[route] || routeGoods.varyagi;
    grid.innerHTML = goods.map(g => `
        <div class="flex flex-col items-center gap-1">
            <div class="goods-icon">${g.icon}</div>
            <span class="text-[9px] text-[#888] font-cinzel">${g.name}</span>
        </div>
    `).join('');
}

function renderEconomics(route) {
    const el = document.getElementById('trade-economics');
    if (!el) return;
    const data = routeEconomics[route] || routeEconomics.varyagi;
    el.innerHTML = data.map(line => `<div>${line}</div>`).join('');
}

function renderPersons(epochIndex) {
    const container = document.getElementById('epoch-persons');
    if (!container) return;
    const persons = epochPersons[epochIndex] || [];
    container.innerHTML = persons.map(p => `
        <div class="person-card">
            <div class="person-avatar">${p.icon}</div>
            <div>
                <div class="text-xs text-white font-bold font-cinzel">${p.name}</div>
                <div class="text-[10px] text-[#888] font-light">${p.role}</div>
            </div>
        </div>
    `).join('');
}

function renderFact(epochIndex) {
    const el = document.getElementById('epoch-fact');
    if (!el) return;
    el.textContent = epochFacts[epochIndex] || '';
}

function openQuiz() {
    shuffleQuiz();
    currentQuiz = 0;
    quizScore = 0;
    const modal = document.getElementById('quiz-modal');
    if (!modal) return;
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.querySelector('.quiz-modal-content').classList.remove('scale-95');
    modal.querySelector('.quiz-modal-content').classList.add('scale-100');
    renderQuiz();
}

function closeQuiz() {
    const modal = document.getElementById('quiz-modal');
    if (!modal) return;
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.querySelector('.quiz-modal-content').classList.remove('scale-100');
    modal.querySelector('.quiz-modal-content').classList.add('scale-95');
}

function renderQuiz() {
    const body = document.getElementById('quiz-body');
    if (!body) return;
    const total = sessionQuestions.length;
    if (currentQuiz >= total) {
        const pct = Math.round((quizScore / total) * 100);
        const grade = pct >= 80 ? '🏆 Отлично!' : pct >= 60 ? '👍 Хорошо!' : '📖 Учите историю!';
        body.innerHTML = `
            <div class="text-center py-6">
                <div class="text-5xl mb-4">${pct >= 80 ? '🏆' : pct >= 60 ? '🥈' : '📖'}</div>
                <div class="text-[#daa520] font-cinzel font-bold text-xl mb-2">${grade}</div>
                <div class="text-white font-cinzel text-2xl font-bold mb-1">${quizScore} / ${total}</div>
                <div class="text-[#888] text-sm mb-6">правильных ответов (${pct}%)</div>
                <div class="w-full bg-[#222] rounded h-2 mb-6">
                    <div class="bg-[#daa520] h-2 rounded transition-all" style="width:${pct}%"></div>
                </div>
                <button onclick="openQuiz()" class="btn-medieval font-cinzel text-sm py-3 px-6">Попробовать снова</button>
            </div>`;
        return;
    }
    const q = sessionQuestions[currentQuiz];
    const pct = Math.round((currentQuiz / total) * 100);
    body.innerHTML = `
        <div class="mb-4">
            <div class="flex justify-between text-xs text-[#666] font-cinzel mb-2">
                <span>Вопрос ${currentQuiz + 1} из ${total}</span>
                <span>Очки: ${quizScore}</span>
            </div>
            <div class="w-full bg-[#222] rounded h-1 mb-4">
                <div class="bg-[#daa520] h-1 rounded transition-all duration-500" style="width:${pct}%"></div>
            </div>
        </div>
        <div class="text-base text-white font-light leading-relaxed mb-5">${q.q}</div>
        <div class="space-y-2">
            ${q.opts.map((o, i) => `<div class="quiz-option font-cinzel" id="qopt-${i}" onclick="answerQuiz(${i})">${o}</div>`).join('')}
        </div>`;
}

function answerQuiz(idx) {
    const q = sessionQuestions[currentQuiz];
    for (let i = 0; i < q.opts.length; i++) {
        const el = document.getElementById(`qopt-${i}`);
        if (!el) continue;
        el.style.pointerEvents = 'none';
        if (i === q.ans) el.classList.add('correct');
        if (i === idx && idx !== q.ans) el.classList.add('wrong');
    }
    if (idx === q.ans) quizScore++;
    setTimeout(() => { currentQuiz++; renderQuiz(); }, 1300);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    renderGoods('varyagi');
    renderEconomics('varyagi');
});




