/* ========================================
   BAIT AL-MUSLIM — SCRIPT.JS
   ======================================== */
'use strict';

/* ══════════════════════════════════════════
   AI — Pollinations (مجاني، بدون مفتاح)
══════════════════════════════════════════ */
const AI_URL="https://text.pollinations.ai/openai";

/* ══════════════════════════════════════════
   SURAHS DATA
══════════════════════════════════════════ */
const SURAHS = [
  {n:1,  ar:"الفاتحة",    en:"Al-Fatiha",        a:7},
  {n:2,  ar:"البقرة",     en:"Al-Baqarah",       a:286},
  {n:3,  ar:"آل عمران",   en:"Aal-Imran",        a:200},
  {n:4,  ar:"النساء",     en:"An-Nisa",          a:176},
  {n:5,  ar:"المائدة",    en:"Al-Ma'idah",       a:120},
  {n:6,  ar:"الأنعام",    en:"Al-An'am",         a:165},
  {n:7,  ar:"الأعراف",    en:"Al-A'raf",         a:206},
  {n:8,  ar:"الأنفال",    en:"Al-Anfal",         a:75},
  {n:9,  ar:"التوبة",     en:"At-Tawbah",        a:129},
  {n:10, ar:"يونس",       en:"Yunus",            a:109},
  {n:11, ar:"هود",        en:"Hud",              a:123},
  {n:12, ar:"يوسف",       en:"Yusuf",            a:111},
  {n:13, ar:"الرعد",      en:"Ar-Ra'd",          a:43},
  {n:14, ar:"إبراهيم",    en:"Ibrahim",          a:52},
  {n:15, ar:"الحجر",      en:"Al-Hijr",          a:99},
  {n:16, ar:"النحل",      en:"An-Nahl",          a:128},
  {n:17, ar:"الإسراء",    en:"Al-Isra",          a:111},
  {n:18, ar:"الكهف",      en:"Al-Kahf",          a:110},
  {n:19, ar:"مريم",       en:"Maryam",           a:98},
  {n:20, ar:"طه",         en:"Ta-Ha",            a:135},
  {n:21, ar:"الأنبياء",   en:"Al-Anbiya",        a:112},
  {n:22, ar:"الحج",       en:"Al-Hajj",          a:78},
  {n:23, ar:"المؤمنون",   en:"Al-Mu'minun",      a:118},
  {n:24, ar:"النور",      en:"An-Nur",           a:64},
  {n:25, ar:"الفرقان",    en:"Al-Furqan",        a:77},
  {n:26, ar:"الشعراء",    en:"Ash-Shu'ara",      a:227},
  {n:27, ar:"النمل",      en:"An-Naml",          a:93},
  {n:28, ar:"القصص",      en:"Al-Qasas",         a:88},
  {n:29, ar:"العنكبوت",   en:"Al-'Ankabut",      a:69},
  {n:30, ar:"الروم",      en:"Ar-Rum",           a:60},
  {n:31, ar:"لقمان",      en:"Luqman",           a:34},
  {n:32, ar:"السجدة",     en:"As-Sajdah",        a:30},
  {n:33, ar:"الأحزاب",    en:"Al-Ahzab",         a:73},
  {n:34, ar:"سبأ",        en:"Saba",             a:54},
  {n:35, ar:"فاطر",       en:"Fatir",            a:45},
  {n:36, ar:"يس",         en:"Ya-Sin",           a:83},
  {n:37, ar:"الصافات",    en:"As-Saffat",        a:182},
  {n:38, ar:"ص",          en:"Sad",              a:88},
  {n:39, ar:"الزمر",      en:"Az-Zumar",         a:75},
  {n:40, ar:"غافر",       en:"Ghafir",           a:85},
  {n:41, ar:"فصلت",       en:"Fussilat",         a:54},
  {n:42, ar:"الشورى",     en:"Ash-Shura",        a:53},
  {n:43, ar:"الزخرف",     en:"Az-Zukhruf",       a:89},
  {n:44, ar:"الدخان",     en:"Ad-Dukhan",        a:59},
  {n:45, ar:"الجاثية",    en:"Al-Jathiyah",      a:37},
  {n:46, ar:"الأحقاف",    en:"Al-Ahqaf",         a:35},
  {n:47, ar:"محمد",       en:"Muhammad",         a:38},
  {n:48, ar:"الفتح",      en:"Al-Fath",          a:29},
  {n:49, ar:"الحجرات",    en:"Al-Hujurat",       a:18},
  {n:50, ar:"ق",          en:"Qaf",              a:45},
  {n:51, ar:"الذاريات",   en:"Adh-Dhariyat",     a:60},
  {n:52, ar:"الطور",      en:"At-Tur",           a:49},
  {n:53, ar:"النجم",      en:"An-Najm",          a:62},
  {n:54, ar:"القمر",      en:"Al-Qamar",         a:55},
  {n:55, ar:"الرحمن",     en:"Ar-Rahman",        a:78},
  {n:56, ar:"الواقعة",    en:"Al-Waqi'ah",       a:96},
  {n:57, ar:"الحديد",     en:"Al-Hadid",         a:29},
  {n:58, ar:"المجادلة",   en:"Al-Mujadila",      a:22},
  {n:59, ar:"الحشر",      en:"Al-Hashr",         a:24},
  {n:60, ar:"الممتحنة",   en:"Al-Mumtahanah",    a:13},
  {n:61, ar:"الصف",       en:"As-Saf",           a:14},
  {n:62, ar:"الجمعة",     en:"Al-Jumu'ah",       a:11},
  {n:63, ar:"المنافقون",  en:"Al-Munafiqun",     a:11},
  {n:64, ar:"التغابن",    en:"At-Taghabun",      a:18},
  {n:65, ar:"الطلاق",     en:"At-Talaq",         a:12},
  {n:66, ar:"التحريم",    en:"At-Tahrim",        a:12},
  {n:67, ar:"الملك",      en:"Al-Mulk",          a:30},
  {n:68, ar:"القلم",      en:"Al-Qalam",         a:52},
  {n:69, ar:"الحاقة",     en:"Al-Haqqah",        a:52},
  {n:70, ar:"المعارج",    en:"Al-Ma'arij",       a:44},
  {n:71, ar:"نوح",        en:"Nuh",              a:28},
  {n:72, ar:"الجن",       en:"Al-Jinn",          a:28},
  {n:73, ar:"المزمل",     en:"Al-Muzzammil",     a:20},
  {n:74, ar:"المدثر",     en:"Al-Muddaththir",   a:56},
  {n:75, ar:"القيامة",    en:"Al-Qiyamah",       a:40},
  {n:76, ar:"الإنسان",    en:"Al-Insan",         a:31},
  {n:77, ar:"المرسلات",   en:"Al-Mursalat",      a:50},
  {n:78, ar:"النبأ",      en:"An-Naba",          a:40},
  {n:79, ar:"النازعات",   en:"An-Nazi'at",       a:46},
  {n:80, ar:"عبس",        en:"Abasa",            a:42},
  {n:81, ar:"التكوير",    en:"At-Takwir",        a:29},
  {n:82, ar:"الانفطار",   en:"Al-Infitar",       a:19},
  {n:83, ar:"المطففين",   en:"Al-Mutaffifin",    a:36},
  {n:84, ar:"الانشقاق",   en:"Al-Inshiqaq",      a:25},
  {n:85, ar:"البروج",     en:"Al-Buruj",         a:22},
  {n:86, ar:"الطارق",     en:"At-Tariq",         a:17},
  {n:87, ar:"الأعلى",     en:"Al-A'la",          a:19},
  {n:88, ar:"الغاشية",    en:"Al-Ghashiyah",     a:26},
  {n:89, ar:"الفجر",      en:"Al-Fajr",          a:30},
  {n:90, ar:"البلد",      en:"Al-Balad",         a:20},
  {n:91, ar:"الشمس",      en:"Ash-Shams",        a:15},
  {n:92, ar:"الليل",      en:"Al-Layl",          a:21},
  {n:93, ar:"الضحى",      en:"Ad-Duha",          a:11},
  {n:94, ar:"الشرح",      en:"Ash-Sharh",        a:8},
  {n:95, ar:"التين",      en:"At-Tin",           a:8},
  {n:96, ar:"العلق",      en:"Al-'Alaq",         a:19},
  {n:97, ar:"القدر",      en:"Al-Qadr",          a:5},
  {n:98, ar:"البينة",     en:"Al-Bayyinah",      a:8},
  {n:99, ar:"الزلزلة",    en:"Az-Zalzalah",      a:8},
  {n:100,ar:"العاديات",   en:"Al-'Adiyat",       a:11},
  {n:101,ar:"القارعة",    en:"Al-Qari'ah",       a:11},
  {n:102,ar:"التكاثر",    en:"At-Takathur",      a:8},
  {n:103,ar:"العصر",      en:"Al-'Asr",          a:3},
  {n:104,ar:"الهمزة",     en:"Al-Humazah",       a:9},
  {n:105,ar:"الفيل",      en:"Al-Fil",           a:5},
  {n:106,ar:"قريش",       en:"Quraysh",          a:4},
  {n:107,ar:"الماعون",    en:"Al-Ma'un",         a:7},
  {n:108,ar:"الكوثر",     en:"Al-Kawthar",       a:3},
  {n:109,ar:"الكافرون",   en:"Al-Kafirun",       a:6},
  {n:110,ar:"النصر",      en:"An-Nasr",          a:3},
  {n:111,ar:"المسد",      en:"Al-Masad",         a:5},
  {n:112,ar:"الإخلاص",    en:"Al-Ikhlas",        a:4},
  {n:113,ar:"الفلق",      en:"Al-Falaq",         a:5},
  {n:114,ar:"الناس",      en:"An-Nas",           a:6}
];

/* ══════════════════════════════════════════
   ADHKAR DATA
══════════════════════════════════════════ */
const ADHKAR_DATA = {
  morning: [
    {text:"أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",count:"١ مرة",source:"رواه مسلم"},
    {text:"اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ.",count:"١ مرة",source:"رواه الترمذي"},
    {text:"اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ.",count:"١ مرة",source:"سيد الاستغفار — البخاري"},
    {text:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ.",count:"٣ مرات",source:"رواه مسلم"},
    {text:"بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.",count:"٣ مرات",source:"رواه أبو داود والترمذي"},
    {text:"حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.",count:"٧ مرات",source:"رواه أبو داود"}
  ],
  evening: [
    {text:"أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",count:"١ مرة",source:"رواه مسلم"},
    {text:"اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ.",count:"١ مرة",source:"رواه الترمذي"},
    {text:"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",count:"٣ مرات",source:"رواه مسلم"},
    {text:"اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.",count:"١ مرة",source:"رواه أبو داود"},
    {text:"اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ.",count:"١ مرة",source:"رواه أبو داود"}
  ],
  sleep: [
    {text:"بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.",count:"١ مرة",source:"رواه البخاري"},
    {text:"اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.",count:"٣ مرات",source:"رواه أبو داود والترمذي"},
    {text:"سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، لَا إِلَهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ.",count:"١ مرة",source:"رواه أبو داود"},
    {text:"سُبْحَانَ اللَّهِ (٣٣) — الْحَمْدُ لِلَّهِ (٣٣) — اللَّهُ أَكْبَرُ (٣٤)",count:"قبل النوم",source:"رواه البخاري ومسلم"}
  ],
  prayer: [
    {text:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",count:"٣ مرات",source:"رواه مسلم"},
    {text:"اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ.",count:"١ مرة",source:"رواه مسلم"},
    {text:"سُبْحَانَ اللَّهِ (٣٣) — الْحَمْدُ لِلَّهِ (٣٣) — اللَّهُ أَكْبَرُ (٣٣) — لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ.",count:"بعد كل صلاة",source:"رواه مسلم"},
    {text:"آيَةُ الْكُرْسِيِّ: اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ...",count:"١ مرة",source:"رواه النسائي"},
    {text:"اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ.",count:"١ مرة",source:"رواه أبو داود"}
  ]
};

const PRAYER_META = [
  {key:"fajr",    name:"الفجر"},
  {key:"dhuhr",   name:"الظهر"},
  {key:"asr",     name:"العصر"},
  {key:"maghrib", name:"المغرب"},
  {key:"isha",    name:"العشاء"}
];

const FIXED_TIMES = {
  fajr:    4  + 18/60,
  dhuhr:   13 +  3/60,
  asr:     16 + 39/60,
  maghrib: 20 +  1/60,
  isha:    21 + 34/60
};

/* ══════════════════════════════════════════
   STATE
══════════════════════════════════════════ */
let state = {
  tasbeeh:0, totalToday:0, goal:50,
  dhikr:"سبحان الله", adhkarCat:"morning",
  soundEnabled:true, lastDate:""
};
function loadState(){
  try{
    const s=JSON.parse(localStorage.getItem("bam_state")||"{}");
    const today=new Date().toDateString();
    if(s.lastDate!==today){s.tasbeeh=0;s.totalToday=0;s.lastDate=today;}
    Object.assign(state,s);
  }catch(e){}
}
function saveState(){localStorage.setItem("bam_state",JSON.stringify(state));}

/* ══════════════════════════════════════════
   TAB NAVIGATION
══════════════════════════════════════════ */
document.getElementById("tabNav").addEventListener("click",function(e){
  const btn=e.target.closest(".tab-btn");
  if(!btn)return;
  const tab=btn.dataset.tab;
  document.querySelectorAll(".tab-btn").forEach(b=>b.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(c=>c.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("tab-"+tab).classList.add("active");
  const subs={tasbeeh:"سبحان الله وبحمده",quran:"اقرأ وتدبر كتاب الله",rare:"استمع إلى تلاوات مختارة",adhkar:"اللهم اجعلنا من الذاكرين",prayer:"حافظ على صلاتك",ai:"بيتك الإسلامي الذكي"};
  document.getElementById("headerSub").textContent=subs[tab]||"سبحان الله وبحمده";
  if(tab==="ai")initAiChat();
});

/* ══════════════════════════════════════════
   TASBEEH SOUND  (Web Audio API)
   AudioContext جديد في كل نقرة — يتجنّب حالة "suspended"
══════════════════════════════════════════ */
/* AudioContext واحد ثابت — يُنشأ عند أول ضغطة فقط */
let _dhikrCtx=null;
function getDhikrCtx(){
  if(!_dhikrCtx){
    const AC=window.AudioContext||window.webkitAudioContext;
    if(!AC)return null;
    _dhikrCtx=new AC();
  }
  if(_dhikrCtx.state==="suspended")_dhikrCtx.resume();
  return _dhikrCtx;
}
function playDhikrSound(){
  if(!state.soundEnabled)return;
  try{
    const ctx=getDhikrCtx();
    if(!ctx)return;
    const g=ctx.createGain();
    const o=ctx.createOscillator();
    o.connect(g);g.connect(ctx.destination);
    o.type="sine";o.frequency.value=587;
    const t=ctx.currentTime;
    g.gain.setValueAtTime(0.22,t);
    g.gain.exponentialRampToValueAtTime(0.0001,t+0.35);
    o.start(t);o.stop(t+0.35);
  }catch(e){}
}
function toggleSound(){
  state.soundEnabled=!state.soundEnabled;
  const btn=document.getElementById("soundToggleBtn");
  btn.textContent=state.soundEnabled?"🔔":"🔕";
  btn.classList.toggle("muted",!state.soundEnabled);
  saveState();
  showToast(state.soundEnabled?"🔔 الصوت مفعّل":"🔕 الصوت مكتوم");
}

/* ══════════════════════════════════════════
   TASBEEH
══════════════════════════════════════════ */
let _saveTimer=null;
function debouncedSave(){clearTimeout(_saveTimer);_saveTimer=setTimeout(saveState,600);}

function doTasbeeh(){
  state.tasbeeh++;state.totalToday++;
  updateTasbeehUI();
  debouncedSave();      // حفظ كل 600ms بدل كل ضغطة
  playDhikrSound();
  const el=document.getElementById("tasbeehCount");
  el.classList.remove("bump");
  requestAnimationFrame(()=>requestAnimationFrame(()=>el.classList.add("bump")));
  if(state.tasbeeh===state.goal){
    const next=nextGoalAfter(state.goal);
    showToast("✨ أحسنت! أكملت "+state.goal+" — الهدف التالي: "+next);
    state.goal=next;
    updateTasbeehUI();
    saveState();
  }
}
function resetTasbeeh(){
  if(state.tasbeeh===0)return;
  state.tasbeeh=0;updateTasbeehUI();saveState();
  showToast("↺ تم إعادة ضبط العداد");
}
function changeDhikr(val){
  state.dhikr=val;state.tasbeeh=0;
  document.getElementById("circleDhikrText").textContent=val;
  updateTasbeehUI();saveState();
}
const GOAL_STEPS=[33,50,100,200,300,400,500];
function nextGoalAfter(cur){return GOAL_STEPS.find(g=>g>cur)||GOAL_STEPS[0];}

function changeGoal(){document.getElementById("goalModal").classList.add("open");}
function setGoal(g){
  state.goal=g;
  document.getElementById("goalModal").classList.remove("open");
  updateTasbeehUI();saveState();
  showToast("🎯 الهدف: "+g+" تسبيحة");
}
function closeGoalModal(e){
  if(e.target===document.getElementById("goalModal"))
    document.getElementById("goalModal").classList.remove("open");
}
function updateTasbeehUI(){
  document.getElementById("tasbeehCount").textContent=state.tasbeeh;
  document.getElementById("totalToday").textContent=state.totalToday;
  document.getElementById("goalDisplay").textContent=state.goal;
  const pct=state.tasbeeh>0&&state.tasbeeh%state.goal===0?100:(state.tasbeeh%state.goal)/state.goal*100;
  document.getElementById("countProgressFill").style.width=pct+"%";
  document.getElementById("circleDhikrText").textContent=state.dhikr;
  const sel=document.getElementById("dhikrInlineSelect");
  if([...sel.options].some(o=>o.value===state.dhikr))sel.value=state.dhikr;
  const sndBtn=document.getElementById("soundToggleBtn");
  if(sndBtn){sndBtn.textContent=state.soundEnabled?"🔔":"🔕";sndBtn.classList.toggle("muted",!state.soundEnabled);}
}
document.addEventListener("keydown",e=>{
  if(e.code==="Space"&&!["INPUT","SELECT","TEXTAREA"].includes(document.activeElement.tagName)){
    if(document.getElementById("tab-tasbeeh").classList.contains("active")){e.preventDefault();doTasbeeh();}
  }
});

/* ══════════════════════════════════════════
   QURAN SURAH LIST
══════════════════════════════════════════ */
function renderSurahs(list){
  const c=document.getElementById("surahList");
  if(!list.length){c.innerHTML='<p style="text-align:center;color:var(--text-muted);padding:24px">لا توجد نتائج</p>';return;}
  c.innerHTML=list.map(s=>{
    const isPlaying=audio.mode==="quran"&&audio.currentSurahNum===s.n&&!audio.el.paused;
    const active=audio.mode==="quran"&&audio.currentSurahNum===s.n;
    return`<div class="surah-item${active?" playing":""}" data-num="${s.n}">
      <div class="surah-num">${active&&isPlaying?"♪":s.n}</div>
      <div class="surah-info">
        <div class="surah-arabic">${s.ar}</div>
        <div class="surah-english">${s.en}</div>
      </div>
      <div class="surah-meta">
        <button class="surah-read-btn" data-action="read" data-num="${s.n}">📖 اقرأ</button>
        <div class="surah-ayahs">${s.a} آية</div>
      </div>
    </div>`;
  }).join("");
}

/* event delegation على قائمة السور — مرة واحدة فقط */
document.getElementById("surahList").addEventListener("click",function(e){
  const readBtn=e.target.closest("[data-action='read']");
  if(readBtn){
    e.stopPropagation();
    openReader(parseInt(readBtn.dataset.num));
    return;
  }
  const row=e.target.closest(".surah-item");
  if(row) playSurah(parseInt(row.dataset.num));
});
function filterSurahs(q){
  const query=q.trim();
  if(!query){renderSurahs(SURAHS);return;}
  renderSurahs(SURAHS.filter(s=>s.ar.includes(query)||s.en.toLowerCase().includes(query.toLowerCase())||String(s.n).includes(query)));
}

/* ══════════════════════════════════════════
   RARE RECITATIONS
══════════════════════════════════════════ */
const RARE_RECITATIONS=[
  {title:"سورة القصص",reciter:"الشيخ عبد الباسط عبد الصمد",place:"مسجد الإمام الشافعي",src:"audio/tilawa1.mp3"},
  {title:"سورة المائدة",reciter:"الشيخ السيد سعيد",src:"audio/tilawa2.mp3"},
  {title:"سور ق والرحمن",reciter:"الشيخ محمد صديق المنشاوي",src:"audio/tilawa3.mp3"},
  {title:"سورة القصص",reciter:"الشيخ مصطفى إسماعيل",src:"audio/tilawa4.mp3"},
  {title:"سور مريم والتكوير والقدر",reciter:"الشيخ عبد الباسط عبد الصمد",src:"audio/tilawa5.mp3"}
];

function renderRareRecitations(){
  const c=document.getElementById("rareRecitationsList");
  if(!c)return;
  c.innerHTML=RARE_RECITATIONS.map((track,index)=>{
    const active=audio.mode==="rare"&&audio.rareIndex===index;
    const playing=active&&!audio.el.paused;
    return`<article class="rare-card${active?" active":""}" data-rare-index="${index}">
      <div class="rare-card-top">
        <div class="rare-number">${playing?"♪":toArabicNum(index+1)}</div>
        <div class="rare-info">
          <h3 class="rare-title">${track.title}</h3>
          <p class="rare-meta">${track.reciter}</p>
          ${track.place?`<p class="rare-place">📍 ${track.place}</p>`:""}
        </div>
        <button class="rare-play-btn" type="button">${playing?"⏸":"▶ استمع"}</button>
      </div>
    </article>`;
  }).join("");
}

document.getElementById("rareRecitationsList").addEventListener("click",function(e){
  const card=e.target.closest(".rare-card");
  if(card)playRareRecitation(parseInt(card.dataset.rareIndex,10));
});

/* ══════════════════════════════════════════
   QURAN READER PANEL
══════════════════════════════════════════ */
let readerSurahNum=null;
let readerCurrentAyah=0;
const readerPanel=document.getElementById("readerPanel");
function toArabicNum(n){return String(n).replace(/\d/g,d=>"٠١٢٣٤٥٦٧٨٩"[d]);}

function openReader(num){
  const surah=SURAHS.find(s=>s.n===num);
  if(!surah)return;
  readerSurahNum=num;
  readerCurrentAyah=0;
  document.getElementById("readerTitle").textContent="سورة "+surah.ar;
  document.getElementById("readerBody").innerHTML=`<div class="reader-loading" id="readerLoading"><div class="loader-ring"></div><p>جارٍ تحميل السورة...</p></div>`;
  updateReaderAudioBtn();
  renderReciterPicker();
  readerPanel.classList.add("open");
  document.body.style.overflow="hidden";
  fetchSurahText(num);
}

function closeReader(){
  readerPanel.classList.remove("open");
  document.body.style.overflow="";
  readerSurahNum=null;
}

async function fetchSurahText(num){
  const APIS=[
    ()=>fetch(`https://api.alquran.cloud/v1/surah/${num}/ar.uthmani`).then(r=>r.json()).then(d=>{
      if(d.code!==200)throw new Error();
      return d.data.ayahs.map(a=>({num:a.numberInSurah,text:a.text}));
    }),
    ()=>fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranindopak/${num}.json`)
        .then(r=>r.json()).then(d=>d.chapter.map((t,i)=>({num:i+1,text:t}))),
    ()=>fetch(`https://api.quran.com/api/v4/verses/by_chapter/${num}?language=ar&words=true&word_fields=text_uthmani&per_page=286`)
        .then(r=>r.json()).then(d=>d.verses.map(v=>({num:v.verse_number,text:v.words.map(w=>w.text_uthmani).join(" ")})))
  ];
  let lastErr;
  for(const apiFn of APIS){
    try{
      const ayahs=await apiFn();
      renderReaderAyahs(num,ayahs);
      return;
    }catch(e){lastErr=e;}
  }
  document.getElementById("readerBody").innerHTML=`<div style="text-align:center;padding:40px;color:var(--text-muted)">⚠️ تعذّر تحميل السورة<br><small>تحقق من الاتصال بالإنترنت</small></div>`;
}

function renderReaderAyahs(surahNum, ayahs){
  const isTawbah=surahNum===9;
  let html="";
  if(!isTawbah){
    html+=`<div class="bismillah">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>`;
  }
  html+=`<div class="mushaf-text">`;
  ayahs.forEach(ayah=>{
    html+=`${ayah.text} <span class="ayah-marker" data-ayah="${ayah.num}">${toArabicNum(ayah.num)}</span> `;
  });
  html+=`</div>`;
  document.getElementById("readerBody").innerHTML=html;
  // إذا كان الصوت يعزف لنفس السورة → زامن فوراً
  if(audio.currentSurahNum===surahNum&&!audio.el.paused) syncReaderWithAudio();
}

function syncReaderWithAudio(){
  if(!readerSurahNum||audio.currentSurahNum!==readerSurahNum)return;
  if(audio.el.paused||!audio.el.duration)return;
  const surah=SURAHS.find(s=>s.n===readerSurahNum);
  if(!surah)return;
  const progress=audio.el.currentTime/audio.el.duration;
  const est=Math.max(1,Math.min(surah.a,Math.ceil(progress*surah.a)));
  if(est===readerCurrentAyah)return;
  readerCurrentAyah=est;
  document.querySelectorAll(".ayah-marker.active").forEach(el=>el.classList.remove("active"));
  const marker=document.querySelector(`.ayah-marker[data-ayah="${est}"]`);
  if(marker){
    marker.classList.add("active");
    marker.scrollIntoView({behavior:"smooth",block:"center"});
  }
}

function toggleReaderAudio(){
  if(!readerSurahNum)return;
  if(audio.currentSurahNum===readerSurahNum){
    togglePlay();
  }else{
    playSurah(readerSurahNum);
  }
  setTimeout(updateReaderAudioBtn,150);
}

function updateReaderAudioBtn(){
  const btn=document.getElementById("readerAudioBtn");
  if(!btn)return;
  const isThisSurah=audio.currentSurahNum===readerSurahNum;
  const isPlaying=isThisSurah&&!audio.el.paused;
  btn.textContent=isPlaying?"⏸ إيقاف":"▶ استمع";
  btn.classList.toggle("playing",isPlaying);
}

/* ══════════════════════════════════════════
   RECITERS
══════════════════════════════════════════ */
const RECITERS=[
  {id:"minshawi",ar:"المنشاوي",sub:"مرتّل",
   fn:(n,p)=>[
     `https://download.quranicaudio.com/quran/muhammad_siddeeq_al-minshaawee/${p}.mp3`,
     `https://server10.mp3quran.net/minsh/${p}.mp3`]},
  {id:"basit",ar:"عبد الباسط",sub:"مجوّد",
   fn:(n,p)=>[
     `https://cdn.islamic.network/quran/audio-surah/128/ar.abdulbasitmurattal/${n}.mp3`,
     `https://download.quranicaudio.com/quran/abdulbaset_mujawwad/${p}.mp3`]},
  {id:"alafasy",ar:"العفاسي",sub:"مرتّل",
   fn:(n,p)=>[
     `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${n}.mp3`,
     `https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/${p}.mp3`]},
  {id:"husary",ar:"الحصري",sub:"مرتّل",
   fn:(n,p)=>[
     `https://server13.mp3quran.net/husr/${p}.mp3`,
     `https://download.quranicaudio.com/quran/husary_64kbps/${p}.mp3`]},
  {id:"sudais",ar:"السديس",sub:"مرتّل",
   fn:(n,p)=>[
     `https://server11.mp3quran.net/sds/${p}.mp3`,
     `https://cdn.islamic.network/quran/audio-surah/128/ar.abdurrahmansudais/${n}.mp3`]},
  {id:"maher",ar:"ماهر المعيقلي",sub:"مرتّل",
   fn:(n,p)=>[
     `https://server12.mp3quran.net/maher/${p}.mp3`,
     `https://download.quranicaudio.com/quran/maher_al_mueaqly/${p}.mp3`]}
];
let currentReciterId=localStorage.getItem("bm_reciter")||"minshawi";
function getCurrentReciter(){return RECITERS.find(r=>r.id===currentReciterId)||RECITERS[0];}
function setReciter(id){
  currentReciterId=id;
  localStorage.setItem("bm_reciter",id);
  const r=getCurrentReciter();
  document.getElementById("apSheikh").textContent="الشيخ "+r.ar;
  renderReciterPicker();
  if(audio.mode==="quran"&&audio.currentSurahNum){
    const wasPlaying=!audio.el.paused;
    audio.el.pause();
    audio.urls=getAudioUrls(audio.currentSurahNum);
    audio.urlIndex=0;
    if(wasPlaying)loadAndPlay(audio.urls,0);
  }
}
function renderReciterPicker(){
  const wrap=document.getElementById("reciterPicker");
  if(!wrap)return;
  wrap.innerHTML=RECITERS.map(r=>`
    <button class="reciter-btn${r.id===currentReciterId?" active":""}" onclick="setReciter('${r.id}')">
      <span class="reciter-name">${r.ar}</span>
      <span class="reciter-sub">${r.sub}</span>
    </button>`).join("");
}

/* ══════════════════════════════════════════
   AUDIO PLAYER
══════════════════════════════════════════ */
function getAudioUrls(num){
  const pad=String(num).padStart(3,"0");
  const r=getCurrentReciter();
  return r.fn(num,pad);
}
const audio={el:document.getElementById("quranAudio"),mode:null,currentSurahNum:null,rareIndex:null,urls:[],urlIndex:0};
const apPlayer=document.getElementById("audioPlayer");
const apPlayBtn=document.getElementById("apPlayBtn");
const apSurahName=document.getElementById("apSurahName");
const apSheikh=document.getElementById("apSheikh");
const apLoading=document.getElementById("apLoading");
const apFill=document.getElementById("apProgressFill");
const apCurrent=document.getElementById("apCurrentTime");
const apDuration=document.getElementById("apDuration");

function showPlayer(){apPlayer.classList.add("visible");document.body.classList.add("player-open");}
function hidePlayer(){apPlayer.classList.remove("visible");document.body.classList.remove("player-open");}

function loadAndPlay(urls,index){
  if(index>=urls.length){apLoading.classList.remove("show");apPlayBtn.textContent="▶";showToast("⚠️ تعذّر تشغيل الصوت");return;}
  audio.el.src=urls[index];audio.urlIndex=index;
  audio.el.load();
  audio.el.play().catch(()=>loadAndPlay(urls,index+1));
}
function playSurah(num){
  const surah=SURAHS.find(s=>s.n===num);
  if(!surah)return;
  if(audio.mode==="quran"&&audio.currentSurahNum===num){togglePlay();updateReaderAudioBtn();return;}
  audio.mode="quran";
  audio.currentSurahNum=num;
  audio.rareIndex=null;
  audio.urls=getAudioUrls(num);
  apSurahName.textContent="سورة "+surah.ar;
  apLoading.classList.add("show");
  apPlayBtn.textContent="⏸";
  showPlayer();
  loadAndPlay(audio.urls,0);
  renderSurahs(getCurrentSurahList());
  renderRareRecitations();
}
function playRareRecitation(index){
  const track=RARE_RECITATIONS[index];
  if(!track)return;
  if(audio.mode==="rare"&&audio.rareIndex===index){togglePlay();return;}
  audio.mode="rare";
  audio.rareIndex=index;
  audio.currentSurahNum=null;
  audio.urls=[track.src];
  audio.urlIndex=0;
  apSurahName.textContent=track.title;
  apSheikh.textContent=track.reciter;
  apLoading.classList.add("show");
  apPlayBtn.textContent="⏸";
  showPlayer();
  loadAndPlay(audio.urls,0);
  renderRareRecitations();
  renderSurahs(getCurrentSurahList());
}
function togglePlay(){
  if(audio.mode===null)return;
  if(audio.el.paused){audio.el.play();apPlayBtn.textContent="⏸";}
  else{audio.el.pause();apPlayBtn.textContent="▶";}
  renderSurahs(getCurrentSurahList());
  renderRareRecitations();
  updateReaderAudioBtn();
}
function playNextSurah(){
  if(audio.mode==="rare"){
    playRareRecitation((audio.rareIndex+1)%RARE_RECITATIONS.length);
  }else if(audio.mode==="quran"&&audio.currentSurahNum){
    playSurah(audio.currentSurahNum<114?audio.currentSurahNum+1:1);
  }
}
function playPrevSurah(){
  if(audio.mode==="rare"){
    playRareRecitation((audio.rareIndex-1+RARE_RECITATIONS.length)%RARE_RECITATIONS.length);
  }else if(audio.mode==="quran"&&audio.currentSurahNum){
    playSurah(audio.currentSurahNum>1?audio.currentSurahNum-1:114);
  }
}
function closePlayer(){
  audio.el.pause();
  audio.mode=null;audio.currentSurahNum=null;audio.rareIndex=null;audio.urls=[];audio.urlIndex=0;
  audio.el.removeAttribute("src");audio.el.load();
  apPlayBtn.textContent="▶";apFill.style.width="0%";
  apCurrent.textContent="0:00";apDuration.textContent="0:00";
  hidePlayer();renderSurahs(getCurrentSurahList());renderRareRecitations();updateReaderAudioBtn();
}
function seekAudio(e){
  if(!audio.el.duration)return;
  const bar=document.getElementById("apProgressBar");
  const rect=bar.getBoundingClientRect();
  const ratio=Math.max(0,Math.min(1,(rect.right-e.clientX)/rect.width));
  audio.el.currentTime=ratio*audio.el.duration;
}
function fmtTime(sec){if(!isFinite(sec))return"0:00";const m=Math.floor(sec/60),s=Math.floor(sec%60);return m+":"+(s<10?"0":"")+s;}
function getCurrentSurahList(){const q=document.getElementById("surahSearch").value.trim();if(!q)return SURAHS;return SURAHS.filter(s=>s.ar.includes(q)||s.en.toLowerCase().includes(q.toLowerCase())||String(s.n).includes(q));}

audio.el.addEventListener("canplay",()=>apLoading.classList.remove("show"));
audio.el.addEventListener("waiting",()=>apLoading.classList.add("show"));
audio.el.addEventListener("playing",()=>{apLoading.classList.remove("show");apPlayBtn.textContent="⏸";renderRareRecitations();updateReaderAudioBtn();});
audio.el.addEventListener("pause",()=>{apPlayBtn.textContent="▶";renderRareRecitations();updateReaderAudioBtn();});
audio.el.addEventListener("ended",()=>playNextSurah());
audio.el.addEventListener("error",()=>{
  if(audio.mode===null)return;
  if(audio.urlIndex+1<audio.urls.length){loadAndPlay(audio.urls,audio.urlIndex+1);}
  else{apLoading.classList.remove("show");showToast("⚠️ خطأ في تحميل الملف الصوتي");}
});
audio.el.addEventListener("timeupdate",()=>{
  const cur=audio.el.currentTime,dur=audio.el.duration||0;
  apCurrent.textContent=fmtTime(cur);apDuration.textContent=fmtTime(dur);
  apFill.style.width=dur>0?(cur/dur*100)+"%":"0%";
  syncReaderWithAudio();
});

/* ══════════════════════════════════════════
   ADHKAR
══════════════════════════════════════════ */
function switchAdhkarCat(cat,btn){
  state.adhkarCat=cat;
  document.querySelectorAll(".cat-btn").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");renderAdhkar();
}
function renderAdhkar(){
  const list=ADHKAR_DATA[state.adhkarCat]||[];
  document.getElementById("adhkarList").innerHTML=list.map((d,i)=>`
    <div class="adhkar-item" style="animation-delay:${i*.06}s">
      <div class="adhkar-text">${d.text}</div>
      <div class="adhkar-footer">
        <span class="adhkar-count-badge">🔁 ${d.count}</span>
        <span class="adhkar-source">📚 ${d.source}</span>
      </div>
    </div>`).join("");
}

/* ══════════════════════════════════════════
   PRAYER TIMES
══════════════════════════════════════════ */
function decToTime(d){if(isNaN(d))return"--:--";const t=Math.round(d*60),h=Math.floor(t/60)%24,m=t%60;return(h%12||12)+":"+(m<10?"0":"")+m+" "+(h<12?"ص":"م");}
function renderPrayerGrid(times,currentKey){
  document.getElementById("prayersGrid").innerHTML=PRAYER_META.map(pm=>`
    <div class="prayer-cell${pm.key===currentKey?" current":""}">
      <div class="prayer-cell-name">${pm.name}</div>
      <div class="prayer-cell-time">${decToTime(times[pm.key])}</div>
    </div>`).join("");
}
function getNextInfo(times){
  const now=new Date(),cur=now.getHours()+now.getMinutes()/60+now.getSeconds()/3600;
  const order=["fajr","dhuhr","asr","maghrib","isha"];
  let currentKey="isha";
  for(let i=0;i<order.length-1;i++){if(cur>=times[order[i]]&&cur<times[order[i+1]]){currentKey=order[i];break;}}
  let nextKey=null,nextTime=null;
  for(let i=0;i<order.length;i++){if(times[order[i]]>cur){nextKey=order[i];nextTime=times[order[i]];break;}}
  if(!nextKey){nextKey="fajr";nextTime=times["fajr"]+24;}
  return{currentKey,nextKey,nextTime};
}
let prayerInterval=null;
function startCountdown(times){
  if(prayerInterval)clearInterval(prayerInterval);
  function tick(){
    const now=new Date(),cur=now.getHours()+now.getMinutes()/60+now.getSeconds()/3600;
    const{currentKey,nextKey,nextTime}=getNextInfo(times);
    const diff=Math.max(0,Math.round((nextTime-cur)*3600));
    const h=Math.floor(diff/3600),m=Math.floor((diff%3600)/60),s=diff%60;
    document.getElementById("npTimer").textContent=(h<10?"0":"")+h+":"+(m<10?"0":"")+m+":"+(s<10?"0":"")+s;
    const meta=PRAYER_META.find(x=>x.key===nextKey);
    document.getElementById("npName").textContent=meta?meta.name:"--";
    renderPrayerGrid(times,currentKey);
  }
  tick();prayerInterval=setInterval(tick,1000);
}
function initPrayer(){
  document.getElementById("locationName").textContent="مواقيت الصلاة";
  startCountdown(FIXED_TIMES);
}

/* ══════════════════════════════════════════
   AI ASSISTANT — مساعدك الذكي
══════════════════════════════════════════ */
const AI_SYSTEM_PROMPT=`أنت مساعد إسلامي لطيف وودود في تطبيق "بيت المسلم". اسمك "المساعد الذكي".
تتحدث باللغة العربية الفصحى السهلة المفهومة.
تساعد المستخدمين في:
• الأذكار والأدعية المأثورة
• تفسير الآيات القرآنية
• معلومات عن سور القرآن الكريم
• الأسئلة الدينية العامة
• السيرة النبوية والتاريخ الإسلامي

قواعد مهمة:
- كن مختصراً ومفيداً ولطيفاً
- ابدأ ردودك بتحية أو دعاء مناسب
- إذا سُئلت عن شيء خارج نطاق الإسلام، أعد المحادثة برفق نحو المواضيع الإسلامية
- لا تُفتي في المسائل الخلافية الكبيرة، وأحل المستخدم لعلماء متخصصين
- أجب دائماً بالعربية`;

const WELCOME_MSG=`السلام عليكم ورحمة الله وبركاته 🌿

أنا مساعدك الذكي في بيت المسلم، يسعدني مساعدتك في:

• الأذكار والأدعية
• تفسير الآيات
• معلومات عن السور
• أسئلة دينية عامة

بماذا أستطيع مساعدتك اليوم؟`;

let chatHistory=[];
let aiInitialized=false;
let aiSending=false;

function initAiChat(){
  if(aiInitialized)return;
  aiInitialized=true;
  chatHistory=[];
  const container=document.getElementById("chatContainer");
  container.innerHTML="";
  appendBotMessage(WELCOME_MSG);
}

function appendBotMessage(text){
  const container=document.getElementById("chatContainer");
  const div=document.createElement("div");
  div.className="chat-msg bot";
  div.innerHTML=`<div class="chat-avatar">🕌</div><div class="chat-bubble">${text.replace(/\n/g,"<br>")}</div>`;
  container.appendChild(div);
  container.scrollTop=container.scrollHeight;
}
function appendUserMessage(text){
  const container=document.getElementById("chatContainer");
  const div=document.createElement("div");
  div.className="chat-msg user";
  div.innerHTML=`<div class="chat-bubble">${text}</div>`;
  container.appendChild(div);
  container.scrollTop=container.scrollHeight;
}
function showTyping(){
  const container=document.getElementById("chatContainer");
  const div=document.createElement("div");
  div.className="chat-msg bot";div.id="typingIndicator";
  div.innerHTML=`<div class="chat-avatar">🕌</div><div class="chat-bubble"><div class="chat-typing"><span></span><span></span><span></span></div></div>`;
  container.appendChild(div);
  container.scrollTop=container.scrollHeight;
}
function hideTyping(){const t=document.getElementById("typingIndicator");if(t)t.remove();}

async function sendAiMessage(){
  if(aiSending)return;
  const input=document.getElementById("chatInput");
  const text=input.value.trim();
  if(!text)return;

  input.value="";
  appendUserMessage(text);
  chatHistory.push({role:"user",content:text});
  aiSending=true;
  document.querySelector(".chat-send-btn").disabled=true;
  showTyping();

  try{
    const messages=[{role:"system",content:AI_SYSTEM_PROMPT},...chatHistory];
    const res=await fetch(AI_URL,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({model:"openai",messages,seed:42})
    });
    if(!res.ok)throw new Error("HTTP "+res.status);
    const data=await res.json();
    const reply=data.choices?.[0]?.message?.content||"عذراً، لم أستطع الرد الآن.";
    hideTyping();
    appendBotMessage(reply);
    chatHistory.push({role:"assistant",content:reply});
  }catch(err){
    hideTyping();
    appendBotMessage("عذراً، حدث خطأ في الاتصال. تحقق من الإنترنت وحاول مجدداً.");
  }finally{
    aiSending=false;
    document.querySelector(".chat-send-btn").disabled=false;
    input.focus();
  }
}

/* ══════════════════════════════════════════
   HIJRI DATE
══════════════════════════════════════════ */
function renderHijriDate(){
  try{
    const hd=new Intl.DateTimeFormat("ar-SA-u-ca-islamic",{day:"numeric",month:"long",year:"numeric"}).format(new Date());
    document.getElementById("hijriDate").textContent="📅 "+hd;
  }catch(e){document.getElementById("hijriDate").textContent="";}
}

/* ══════════════════════════════════════════
   TOAST
══════════════════════════════════════════ */
let toastTmt=null;
function showToast(msg){
  const t=document.getElementById("toast");
  t.textContent=msg;t.classList.add("show");
  if(toastTmt)clearTimeout(toastTmt);
  toastTmt=setTimeout(()=>t.classList.remove("show"),3000);
}

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
/* ===== THEME (DARK / LIGHT) ===== */
function initTheme(){
  const saved=localStorage.getItem("bm_theme");
  const prefersDark=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark=saved==="dark"||(saved===null&&prefersDark);
  applyTheme(isDark,false);
}
function applyTheme(dark,save=true){
  document.body.classList.toggle("dark",dark);
  const btn=document.getElementById("themeToggle");
  if(btn)btn.textContent=dark?"☀️":"🌙";
  if(save)localStorage.setItem("bm_theme",dark?"dark":"light");
}
function toggleTheme(){
  const isDark=document.body.classList.contains("dark");
  applyTheme(!isDark);
}

document.addEventListener("DOMContentLoaded",function(){
  initTheme();
  loadState();updateTasbeehUI();
  renderSurahs(SURAHS);renderRareRecitations();renderAdhkar();renderHijriDate();initPrayer();
  document.getElementById("apSheikh").textContent="الشيخ "+getCurrentReciter().ar;
  const h=new Date().getHours();
  const greet=h<5?"🌙 لا تنس أذكار النوم":h<12?"🌅 صباح الخير — ابدأ يومك بذكر الله":h<17?"☀️ أهلاً بك في بيت المسلم":h<20?"🌆 مساء الخير — لا تنس أذكار المساء":"🌙 تصبح على خير";
  setTimeout(()=>showToast(greet),1000);
});
