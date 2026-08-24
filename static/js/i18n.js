(function () {
  "use strict";

  var I18N = {
    en: {
      tagline:
        "We bet on&nbsp;teachers",
      mission:
        '<p>One good teacher shapes hundreds of&nbsp;children over a career. The Foundation runs training programs that help teachers and coordinators get better at&nbsp;the work they already do.</p>',
      cta: "Want to do something together?",
      h_programs: "Programs",
      a_programs:
        '<p class="programs-lead">Each program combines an&nbsp;intensive, hands-on practice, and work with a mentor. More than half of&nbsp;every program is practice. The programs are built on&nbsp;approaches with a well-studied track record: inquiry-based learning, structured discussion, the craft of&nbsp;teaching.</p>' +
        '<div class="programs">' +
          '<div class="program">' +
            '<h3>For teachers</h3>' +
            '<ul>' +
              '<li>an&nbsp;intensive on the hardest parts of&nbsp;the craft</li>' +
              '<li>then several weeks of&nbsp;teaching children, with a weekly mentor debrief</li>' +
              '<li>late primary and early middle school — when many children’s interest in&nbsp;learning starts to&nbsp;fade</li>' +
            '</ul>' +
            '<p class="label">Practical craft</p>' +
            '<ul>' +
              '<li>getting a class’s attention without raising your voice</li>' +
              '<li>motivation that doesn’t run on&nbsp;grades</li>' +
              '<li>lessons that start with a real question</li>' +
              '<li>discussions where children answer each other instead of&nbsp;guessing what the teacher wants to&nbsp;hear</li>' +
            '</ul>' +
          '</div>' +
          '<div class="program">' +
            '<h3>For coordinators</h3>' +
            '<ul>' +
              '<li>rakazim keep teaching while also helping a whole team work well</li>' +
              '<li>practice on&nbsp;real situations from their own schools</li>' +
              '<li>leading people who don’t formally report to&nbsp;you</li>' +
              '<li>feedback that actually helps</li>' +
              '<li>load that’s shared instead of&nbsp;carried alone</li>' +
              '<li>built together with rakazim</li>' +
              '<li>the first pilot starts in&nbsp;fall 2026</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<p>The two programs are connected: strong teachers need schools where they can do good work and want to&nbsp;stay.</p>',
      h_believe: "What we believe",
      a_believe:
        '<p>We care less about what looks good in&nbsp;a workshop than what still works afterwards — in&nbsp;a regular class of&nbsp;35 on&nbsp;a Tuesday morning.</p>' +
        '<p class="label">What about AI?</p>' +
        '<p>We teach teachers to&nbsp;use AI — and to&nbsp;teach children how to&nbsp;use it — instead of&nbsp;training AI to&nbsp;replace teachers.</p>',
      h_pilot: "The first pilot",
      a_pilot:
        '<p>In&nbsp;summer 2026, <strong>17&nbsp;teachers</strong> finished our first intensive. <strong>16&nbsp;of&nbsp;them</strong> are now continuing paid teaching practice with children and meet with a mentor every week; <strong>14&nbsp;of&nbsp;the&nbsp;17</strong> would recommend the program to&nbsp;colleagues.</p>' +
        '<p><strong>Two-thirds of&nbsp;the children</strong> we surveyed said they’d like to&nbsp;have lessons like these at&nbsp;school. For now, it’s an&nbsp;early signal from a very favorable setting — we’ll see whether it holds up in&nbsp;regular classrooms.</p>' +
        '<p><a href="https://summer-pilot-2026.utterstep.app/" target="_blank" rel="noopener">More about the first pilot</a></p>',
      h_paid: "Do participants get paid?",
      a_paid:
        '<p>Yes. Teachers have more than enough work without us, so we pay participants a stipend — both for the training and for the practice with children.</p>' +
        '<p>If we believe a teacher’s time matters, it makes sense to&nbsp;act like it.</p>',
      h_who: "Who we are",
      a_who:
        '<div class="cards">' +
          '<div class="card">' +
            '<img class="card-photo" src="static/img/elena.jpg" alt="Elena Bunina" width="420" height="510" />' +
            '<p class="role">Founder &amp; Patron</p>' +
            '<p class="name"><a href="https://www.linkedin.com/in/elena-bunina-738522eb/" target="_blank" rel="noopener">Elena Bunina</a></p>' +
            '<p class="bio">Professor of&nbsp;Mathematics at&nbsp;Bar-Ilan University and head of&nbsp;<a href="https://academy.nebius.com" target="_blank" rel="noopener">Nebius Academy</a>.</p>' +
          '</div>' +
          '<div class="card">' +
            '<img class="card-photo" src="static/img/vlad.jpg" alt="Vlad Stepanov" width="420" height="510" />' +
            '<p class="role">Co-Founder &amp; CEO</p>' +
            '<p class="name"><a href="https://www.linkedin.com/in/utterstep/" target="_blank" rel="noopener">Vlad Stepanov</a></p>' +
            '<p class="bio">Former CEO of&nbsp;<a href="https://gradarius.com" target="_blank" rel="noopener">Gradarius</a>; previously CTO and Head of&nbsp;Informatika at&nbsp;Yandex Education. 13+ years in&nbsp;EdTech in&nbsp;the US and the CIS.</p>' +
          '</div>' +
        '</div>',
      h_contact: "Let’s talk",
      a_contact:
        '<p>If you run a school or a municipality — let’s talk about a program for your teams. If you teach or coordinate — <a class="join-link" href="https://survey.morim.foundation/s/join-v1?src=landing&lang=en">leave your contact in&nbsp;the form</a>. And if you simply want to&nbsp;see whether we could do something together — write to&nbsp;us.</p>' +
        '<p><a href="mailto:contact@morim.foundation">contact@morim.foundation</a></p>'
    },

    ru: {
      tagline:
        "Мы делаем ставку на&nbsp;учителей",
      mission:
        '<p>Один хороший учитель за&nbsp;свою карьеру влияет на&nbsp;сотни детей. Фонд организует обучающие программы, которые помогают учителям и&nbsp;координаторам становиться сильнее в&nbsp;своей работе.</p>',
      cta: "Хотите что-то сделать вместе?",
      h_programs: "Программы",
      a_programs:
        '<p class="programs-lead">В&nbsp;каждой программе есть интенсив, практика и&nbsp;работа с&nbsp;ментором. Больше половины каждой программы — практика. В&nbsp;основе программ — подходы с&nbsp;хорошо изученным эффектом: обучение через исследование, структурированные дискуссии, ремесло преподавания.</p>' +
        '<div class="programs">' +
          '<div class="program">' +
            '<h3>Для учителей</h3>' +
            '<ul>' +
              '<li>интенсив о&nbsp;самом сложном в&nbsp;ремесле</li>' +
              '<li>затем несколько недель занятий с&nbsp;детьми и&nbsp;еженедельный разбор с&nbsp;ментором</li>' +
              '<li>конец начальной школы и&nbsp;начало средней — время, когда интерес к&nbsp;учёбе у&nbsp;многих детей начинает снижаться</li>' +
            '</ul>' +
            '<p class="label">Ремесло</p>' +
            '<ul>' +
              '<li>собрать внимание класса, не&nbsp;повышая голоса</li>' +
              '<li>мотивация, которая не&nbsp;держится на&nbsp;оценках</li>' +
              '<li>урок, который начинается с&nbsp;настоящего вопроса</li>' +
              '<li>дискуссии, в&nbsp;которых дети отвечают друг другу, а&nbsp;не&nbsp;угадывают, что хочет услышать учитель</li>' +
            '</ul>' +
          '</div>' +
          '<div class="program">' +
            '<h3>Для координаторов</h3>' +
            '<ul>' +
              '<li>раказим продолжают преподавать и&nbsp;одновременно помогают целой команде работать лучше</li>' +
              '<li>практика на&nbsp;реальных ситуациях из&nbsp;своей работы</li>' +
              '<li>вести людей, которые формально тебе не&nbsp;подчиняются</li>' +
              '<li>обратная связь, которая действительно помогает</li>' +
              '<li>нагрузка, которую делят, а&nbsp;не&nbsp;тащат в&nbsp;одиночку</li>' +
              '<li>программу делаем вместе с&nbsp;самими раказим</li>' +
              '<li>первый пилот стартует осенью 2026 года</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<p>Оба направления связаны: сильным учителям нужны школы, в&nbsp;которых можно хорошо работать и&nbsp;хочется оставаться.</p>',
      h_believe: "Во что мы верим",
      a_believe:
        '<p>Важно не&nbsp;то, что хорошо выглядит на&nbsp;воркшопе, а&nbsp;то, что работает потом — в&nbsp;обычном классе из&nbsp;35&nbsp;человек во&nbsp;вторник утром.</p>' +
        '<p class="label">А&nbsp;что с&nbsp;ИИ?</p>' +
        '<p>Мы учим учителей пользоваться ИИ и&nbsp;учить этому детей — а&nbsp;не&nbsp;обучаем ИИ заменять учителей.</p>',
      h_pilot: "Первый пилот",
      a_pilot:
        '<p>Летом 2026 года первый интенсив закончили <strong>17&nbsp;учителей</strong>. <strong>16 из&nbsp;них</strong> сейчас продолжают оплачиваемую практику с&nbsp;детьми и&nbsp;каждую неделю встречаются с&nbsp;ментором; <strong>14 из&nbsp;17</strong> готовы рекомендовать программу коллегам.</p>' +
        '<p><strong>Две трети опрошенных детей</strong> сказали, что хотели&nbsp;бы видеть похожие уроки в&nbsp;своей школе. Пока это ранний сигнал из&nbsp;очень дружелюбной среды. Посмотрим, повторится&nbsp;ли этот результат в&nbsp;обычных классах.</p>' +
        '<p><a href="https://summer-pilot-2026.utterstep.app/" target="_blank" rel="noopener">Подробнее о&nbsp;первом пилоте</a></p>',
      h_paid: "За участие платят?",
      a_paid:
        '<p>Да. У&nbsp;учителей и&nbsp;без нас достаточно работы, поэтому мы платим участникам стипендию — и&nbsp;за&nbsp;обучение, и&nbsp;за&nbsp;практику с&nbsp;детьми.</p>' +
        '<p>Если мы считаем время учителя важным, логично вести себя соответственно.</p>',
      h_who: "Кто мы",
      a_who:
        '<div class="cards">' +
          '<div class="card">' +
            '<img class="card-photo" src="static/img/elena.jpg" alt="Елена Бунина" width="420" height="510" />' +
            '<p class="role">Основательница и попечитель</p>' +
            '<p class="name"><a href="https://www.linkedin.com/in/elena-bunina-738522eb/" target="_blank" rel="noopener">Елена Бунина</a></p>' +
            '<p class="bio">профессор математики Университета Бар-Илан и&nbsp;руководитель <a href="https://academy.nebius.com" target="_blank" rel="noopener">Nebius Academy</a>.</p>' +
          '</div>' +
          '<div class="card">' +
            '<img class="card-photo" src="static/img/vlad.jpg" alt="Влад Степанов" width="420" height="510" />' +
            '<p class="role">Сооснователь и CEO</p>' +
            '<p class="name"><a href="https://www.linkedin.com/in/utterstep/" target="_blank" rel="noopener">Влад Степанов</a></p>' +
            '<p class="bio">экс-CEO <a href="https://gradarius.com" target="_blank" rel="noopener">Gradarius</a>, экс-CTO и&nbsp;руководитель Информатики в&nbsp;Яндекс.Образовании. 13+ лет опыта в&nbsp;EdTech в&nbsp;США и&nbsp;СНГ.</p>' +
          '</div>' +
        '</div>',
      h_contact: "Давайте поговорим",
      a_contact:
        '<p>Если вы школа или муниципалитет — давайте обсудим программу для ваших команд. Если вы преподаёте или координируете — <a class="join-link" href="https://survey.morim.foundation/s/join-v1?src=landing&lang=ru">оставьте контакт в&nbsp;форме</a>. А&nbsp;если просто хотите понять, можем&nbsp;ли мы что-то сделать вместе, — напишите нам.</p>' +
        '<p><a href="mailto:contact@morim.foundation">contact@morim.foundation</a></p>'
    },

    he: {
      tagline:
        "אנחנו מהמרים על&nbsp;המורים",
      mission:
        '<p>מורה טוב אחד משפיע במהלך הקריירה על מאות ילדים. הקרן מפעילה תוכניות הכשרה שעוזרות למורים ולרכזים להיות טובים יותר במה שהם כבר עושים.</p>',
      cta: "רוצים לעשות משהו יחד?",
      h_programs: "תוכניות",
      a_programs:
        '<p class="programs-lead">בכל תוכנית יש אינטנסיב, תרגול מעשי ועבודה עם מנטור. יותר ממחצית מכל תוכנית היא תרגול. התוכניות בנויות על גישות שנחקרו היטב: למידת חקר, דיונים מובנים, אומנות ההוראה.</p>' +
        '<div class="programs">' +
          '<div class="program">' +
            '<h3>למורים</h3>' +
            '<ul>' +
              '<li>אינטנסיב על החלקים הקשים ביותר במקצוע</li>' +
              '<li>ואחריו כמה שבועות של הוראת ילדים, עם ניתוח שבועי עם מנטור</li>' +
              '<li>הכיתות הגבוהות של היסודי ותחילת חטיבת הביניים — השנים שבהן העניין בלמידה אצל ילדים רבים מתחיל לדעוך</li>' +
            '</ul>' +
            '<p class="label">המלאכה עצמה</p>' +
            '<ul>' +
              '<li>לרכז את הקשב של הכיתה בלי להרים את הקול</li>' +
              '<li>מוטיבציה שלא נשענת על ציונים</li>' +
              '<li>שיעור שמתחיל משאלה אמיתית</li>' +
              '<li>דיונים שבהם הילדים עונים זה לזה במקום לנחש מה המורה רוצה לשמוע</li>' +
            '</ul>' +
          '</div>' +
          '<div class="program">' +
            '<h3>לרכזים ולרכזות</h3>' +
            '<ul>' +
              '<li>רכזים ורכזות ממשיכים ללמד ובמקביל עוזרים לצוות שלם לעבוד טוב יותר</li>' +
              '<li>תרגול על מצבים אמיתיים מהעבודה</li>' +
              '<li>להוביל אנשים שלא כפופים לך פורמלית</li>' +
              '<li>משוב שבאמת עוזר</li>' +
              '<li>עומס שמתחלק במקום ליפול על אדם אחד</li>' +
              '<li>בונים יחד עם רכזים ורכזות</li>' +
              '<li>פיילוט ראשון יוצא לדרך בסתיו 2026</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<p>שני הכיוונים קשורים: מורים חזקים צריכים בתי ספר שבהם הם יכולים לעבוד טוב וגם רוצים להישאר.</p>',
      h_believe: "במה אנחנו מאמינים",
      a_believe:
        '<p>מה שחשוב הוא לא מה שנראה טוב בסדנה, אלא מה שעובד אחר כך — בכיתה רגילה של 35 ילדים ביום שלישי בבוקר.</p>' +
        '<p class="label">ומה עם AI?</p>' +
        '<p>אנחנו מלמדים מורים להשתמש ב-AI — וללמד ילדים איך להשתמש בו — במקום לאמן AI להחליף מורים.</p>',
      h_pilot: "הפיילוט הראשון",
      a_pilot:
        '<p>בקיץ 2026 סיימו <strong>17 מורים ומורות</strong> את האינטנסיב הראשון שלנו. <strong>16 מהם</strong> ממשיכים כעת בהתנסות מעשית בתשלום: מלמדים ילדים ונפגשים עם מנטור מדי שבוע; <strong>14 מתוך 17</strong> היו ממליצים על התוכנית לעמיתים.</p>' +
        '<p><strong>שני שלישים מהילדים</strong> שנשאלו אמרו שהיו רוצים שיעורים כאלה גם בבית הספר שלהם. בינתיים זה סימן מוקדם מסביבה תומכת במיוחד — נראה אם התוצאה הזאת תחזור על עצמה בכיתות רגילות.</p>' +
        '<p><a href="https://summer-pilot-2026.utterstep.app/" target="_blank" rel="noopener">עוד על הפיילוט הראשון</a></p>',
      h_paid: "האם משלמים על ההשתתפות?",
      a_paid:
        '<p>כן. למורים יש מספיק עבודה גם בלעדינו, ולכן אנחנו משלמים למשתתפים מלגה — גם על ההכשרה וגם על התרגול עם ילדים.</p>' +
        '<p>אם אנחנו מאמינים שזמנו של מורה חשוב, הגיוני להתנהג בהתאם.</p>',
      h_who: "מי אנחנו",
      a_who:
        '<div class="cards">' +
          '<div class="card">' +
            '<img class="card-photo" src="static/img/elena.jpg" alt="אלנה בונינה" width="420" height="510" />' +
            '<p class="role">מייסדת ופטרונית</p>' +
            '<p class="name"><a href="https://www.linkedin.com/in/elena-bunina-738522eb/" target="_blank" rel="noopener">אלנה בונינה</a></p>' +
            '<p class="bio">פרופסור למתמטיקה באוניברסיטת בר-אילן וראש <a href="https://academy.nebius.com" target="_blank" rel="noopener">Nebius Academy</a>.</p>' +
          '</div>' +
          '<div class="card">' +
            '<img class="card-photo" src="static/img/vlad.jpg" alt="ולאד סטפנוב" width="420" height="510" />' +
            '<p class="role">מייסד שותף ומנכ״ל</p>' +
            '<p class="name"><a href="https://www.linkedin.com/in/utterstep/" target="_blank" rel="noopener">ולאד סטפנוב</a></p>' +
            '<p class="bio">לשעבר מנכ״ל <a href="https://gradarius.com" target="_blank" rel="noopener">Gradarius</a>, לשעבר CTO וראש תחום Informatika ב-Yandex Education. 13+ שנות ניסיון ב-EdTech בארה״ב ובחבר המדינות.</p>' +
          '</div>' +
        '</div>',
      h_contact: "בואו נדבר",
      a_contact:
        '<p>אם אתם בית ספר או רשות מקומית — בואו נדבר על תוכנית לצוותים שלכם. אם אתם מלמדים או מרכזים — <a class="join-link" href="https://survey.morim.foundation/s/join-v1?src=landing&lang=he">השאירו פרטי קשר בטופס</a>. ואם אתם פשוט רוצים לבדוק אם נוכל לעשות משהו יחד — כתבו לנו.</p>' +
        '<p><a href="mailto:contact@morim.foundation">contact@morim.foundation</a></p>'
    }
  };

  var buttons = Array.prototype.slice.call(document.querySelectorAll(".lang button"));

  function setLang(lang, opts) {
    opts = opts || {};
    var dict = I18N[lang];
    if (!dict) return;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var value = dict[el.getAttribute("data-i18n")];
      if (value == null) continue;
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    }

    var ctas = document.querySelectorAll("a.cta, a.join-link");
    for (var c = 0; c < ctas.length; c++) {
      ctas[c].setAttribute("href", "https://survey.morim.foundation/s/join-v1?src=landing&lang=" + lang);
    }

    for (var j = 0; j < buttons.length; j++) {
      var b = buttons[j];
      b.setAttribute("aria-current", b.getAttribute("data-lang") === lang ? "true" : "false");
    }

    if (opts.persist) {
      try { localStorage.setItem("lang", lang); } catch (e) {}
    }

    /* keep ?lang= in the address bar in sync, so copying the URL shares this language */
    if (opts.updateUrl && window.history && history.replaceState) {
      try {
        var search = location.search;
        if (/[?&]lang=/.test(search)) {
          search = search.replace(/([?&]lang=)[^&]*/, "$1" + lang);
        } else {
          search = (search ? search + "&" : "?") + "lang=" + lang;
        }
        history.replaceState(null, "", location.pathname + search + location.hash);
      } catch (e) {}
    }
  }

  for (var k = 0; k < buttons.length; k++) {
    (function (b) {
      b.addEventListener("click", function () {
        setLang(b.getAttribute("data-lang"), { persist: true, updateUrl: true });
      });
    })(buttons[k]);
  }

  /* a ?lang= in a shared link wins over the visitor's stored preference,
     but doesn't overwrite it — only an explicit button click persists */
  var urlLang = (location.search.match(/[?&]lang=(en|ru|he)(?:&|$)/) || [])[1];
  var saved;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  setLang(urlLang || (I18N[saved] ? saved : "en"));
})();
