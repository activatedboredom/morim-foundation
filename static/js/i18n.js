(function () {
  "use strict";

  var I18N = {
    en: {
      tagline:
        "We bet on&nbsp;teachers",
      cta: "Want to do something together?",
      h_programs: "Programs",
      a_programs:
        '<p class="programs-lead">We run programs for teachers and coordinators. Each one starts with an&nbsp;intensive and quickly moves into practice: teachers teach children; coordinators bring real situations from their schools and work through them together. A&nbsp;mentor stays with the group throughout. More than half of&nbsp;every program is practice.</p>' +
        '<p class="programs-lead">We don’t have a new pedagogy to&nbsp;sell. We use approaches we trust — and that have been studied and tested, such as inquiry, structured discussion, and the everyday craft of&nbsp;teaching.</p>' +
        '<p class="programs-lead">The test is simple: does it still work in&nbsp;a class of&nbsp;35 on&nbsp;a Tuesday morning?</p>' +
        '<div class="programs">' +
          '<div class="program">' +
            '<h3>For teachers</h3>' +
            '<ul>' +
              '<li>an&nbsp;intensive on the hardest parts of&nbsp;the craft</li>' +
              '<li>then several weeks of&nbsp;teaching children, with a weekly mentor debrief</li>' +
              '<li>late primary and early middle school — around the age when many children begin to&nbsp;lose interest in&nbsp;learning</li>' +
            '</ul>' +
            '<p class="label">Ordinary questions, hard ones</p>' +
            '<ul>' +
              '<li>how do you get a class’s attention without raising your voice?</li>' +
              '<li>how do you build motivation that doesn’t depend on&nbsp;grades?</li>' +
              '<li>how do you start a lesson with a real question?</li>' +
              '<li>how do you get children talking to&nbsp;each other instead of&nbsp;guessing what the teacher wants to&nbsp;hear?</li>' +
            '</ul>' +
          '</div>' +
          '<div class="program">' +
            '<h3>For coordinators</h3>' +
            '<ul>' +
              '<li>rakazim are teachers too — they teach their own classes and help a whole team work better</li>' +
              '<li>leading people who don’t formally report to&nbsp;you</li>' +
              '<li>feedback people can actually use</li>' +
              '<li>sharing the load — and somehow still finding time to&nbsp;teach</li>' +
              '<li>built together with rakazim</li>' +
              '<li>the first pilot starts in&nbsp;fall 2026</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<p>Strong teachers need schools where they can do good work and want to&nbsp;stay. That’s why this program exists.</p>',
      h_believe: "Why teachers?",
      a_believe:
        '<p>One good teacher can shape hundreds of&nbsp;children. Some teachers also shape the adults around them.</p>' +
        '<p>That’s why we bet on&nbsp;teachers.</p>' +
        '<p class="label">What about AI?</p>' +
        '<p>We teach teachers to&nbsp;use AI — and to&nbsp;teach children how to&nbsp;use it — instead of&nbsp;training AI to&nbsp;replace teachers.</p>',
      h_pilot: "The first pilot",
      a_pilot:
        '<p>In&nbsp;summer 2026, <strong>17&nbsp;teachers</strong> finished our first intensive. <strong>16&nbsp;of&nbsp;them</strong> are now continuing paid teaching practice with children and meet with a mentor every week; <strong>14&nbsp;of&nbsp;the&nbsp;17</strong> would recommend the program to&nbsp;colleagues.</p>' +
        '<p><strong>Two-thirds of&nbsp;the children</strong> we surveyed said they’d like to&nbsp;have lessons like these at&nbsp;school.</p>' +
        '<p>That’s encouraging, but it’s still a small, unusually friendly setting. We’ll be much more convinced if the same thing happens in&nbsp;ordinary classrooms.</p>' +
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
        '<p>If you’re a teacher, work with a school or municipality, or just think we should talk — <a class="join-link" href="https://survey.morim.foundation/s/join-v1?src=landing&lang=en">leave your contact in&nbsp;the form</a> or write to&nbsp;us.</p>' +
        '<p><a href="mailto:contact@morim.foundation">contact@morim.foundation</a></p>'
    },

    ru: {
      tagline:
        "Мы делаем ставку на&nbsp;учителей",
      cta: "Хотите что-то сделать вместе?",
      h_programs: "Программы",
      a_programs:
        '<p class="programs-lead">Мы делаем программы для учителей и&nbsp;координаторов. Каждая начинается с&nbsp;интенсива и&nbsp;быстро переходит к&nbsp;практике: учителя ведут занятия с&nbsp;детьми, а&nbsp;координаторы приносят реальные ситуации из&nbsp;своих школ и&nbsp;разбирают их вместе. На&nbsp;протяжении всей программы группу сопровождает ментор. Больше половины каждой программы — практика.</p>' +
        '<p class="programs-lead">Мы не&nbsp;пришли продавать новую педагогику. Мы используем подходы, которым доверяем — и&nbsp;которые уже изучали и&nbsp;проверяли, такие как: исследовательское обучение, структурированные дискуссии и&nbsp;повседневное учительское ремесло.</p>' +
        '<p class="programs-lead">Проверка простая: работает&nbsp;ли это в&nbsp;обычном классе из&nbsp;35&nbsp;человек во&nbsp;вторник утром?</p>' +
        '<div class="programs">' +
          '<div class="program">' +
            '<h3>Для учителей</h3>' +
            '<ul>' +
              '<li>интенсив о&nbsp;самом сложном в&nbsp;ремесле</li>' +
              '<li>затем несколько недель занятий с&nbsp;детьми и&nbsp;еженедельный разбор с&nbsp;ментором</li>' +
              '<li>конец начальной и&nbsp;начало средней школы — примерно тот возраст, когда у&nbsp;многих детей начинает пропадать интерес к&nbsp;учёбе</li>' +
            '</ul>' +
            '<p class="label">Обычные вопросы — но&nbsp;трудные</p>' +
            '<ul>' +
              '<li>как собрать внимание класса, не&nbsp;повышая голоса?</li>' +
              '<li>как строить мотивацию, которая не&nbsp;держится на&nbsp;оценках?</li>' +
              '<li>как начать урок с&nbsp;настоящего вопроса?</li>' +
              '<li>как сделать так, чтобы дети разговаривали друг с&nbsp;другом, а&nbsp;не&nbsp;угадывали, что хочет услышать учитель?</li>' +
            '</ul>' +
          '</div>' +
          '<div class="program">' +
            '<h3>Для координаторов</h3>' +
            '<ul>' +
              '<li>раказим тоже учителя — они ведут свои классы и&nbsp;помогают целой команде работать лучше</li>' +
              '<li>вести людей, которые формально тебе не&nbsp;подчиняются</li>' +
              '<li>давать обратную связь, которой действительно можно воспользоваться</li>' +
              '<li>делить нагрузку — и&nbsp;при этом как-то находить время на&nbsp;преподавание</li>' +
              '<li>программу делаем вместе с&nbsp;самими раказим</li>' +
              '<li>первый пилот стартует осенью 2026 года</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<p>Сильным учителям нужны школы, в&nbsp;которых можно хорошо работать и&nbsp;хочется оставаться. Поэтому эта программа и&nbsp;существует.</p>',
      h_believe: "Почему именно учителя?",
      a_believe:
        '<p>Один хороший учитель может повлиять на&nbsp;сотни детей. Некоторые учителя влияют ещё и&nbsp;на&nbsp;взрослых вокруг себя.</p>' +
        '<p>Поэтому мы делаем ставку на&nbsp;учителей.</p>' +
        '<p class="label">А&nbsp;что с&nbsp;ИИ?</p>' +
        '<p>Мы учим учителей пользоваться ИИ и&nbsp;учить этому детей — а&nbsp;не&nbsp;обучаем ИИ заменять учителей.</p>',
      h_pilot: "Первый пилот",
      a_pilot:
        '<p>Летом 2026 года первый интенсив закончили <strong>17&nbsp;учителей</strong>. <strong>16 из&nbsp;них</strong> сейчас продолжают оплачиваемую практику с&nbsp;детьми и&nbsp;каждую неделю встречаются с&nbsp;ментором; <strong>14 из&nbsp;17</strong> готовы рекомендовать программу коллегам.</p>' +
        '<p><strong>Две трети опрошенных детей</strong> сказали, что хотели&nbsp;бы, чтобы такие уроки были у&nbsp;них в&nbsp;школе.</p>' +
        '<p>Это обнадёживает, но&nbsp;группа пока маленькая, а&nbsp;условия — необычно благоприятные. Нам будет гораздо легче поверить в&nbsp;результат, если то&nbsp;же самое повторится в&nbsp;обычных классах.</p>' +
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
        '<p>Если вы учитель, работаете со&nbsp;школой или муниципалитетом или просто думаете, что нам стоит поговорить — <a class="join-link" href="https://survey.morim.foundation/s/join-v1?src=landing&lang=ru">оставьте контакт в&nbsp;форме</a> или напишите нам.</p>' +
        '<p><a href="mailto:contact@morim.foundation">contact@morim.foundation</a></p>'
    },

    he: {
      tagline:
        "אנחנו מהמרים על&nbsp;המורים",
      cta: "רוצים לעשות משהו יחד?",
      h_programs: "תוכניות",
      a_programs:
        '<p class="programs-lead">אנחנו מפעילים תוכניות למורים ולרכזים ורכזות. כל תוכנית מתחילה בהכשרה אינטנסיבית ועוברת מהר לעבודה מעשית: מורים מלמדים ילדים, ורכזים ורכזות מביאים מצבים אמיתיים מבתי הספר שלהם ועובדים עליהם יחד. מנטור מלווה את הקבוצה לאורך כל התוכנית. יותר ממחצית מכל תוכנית מוקדשת לתרגול.</p>' +
        '<p class="programs-lead">אין לנו פדגוגיה חדשה למכור. אנחנו משתמשים בגישות שאנחנו סומכים עליהן — ושכבר נחקרו ונבדקו, כמו: למידת חקר, דיון מובנה והמלאכה היומיומית של ההוראה.</p>' +
        '<p class="programs-lead">המבחן פשוט: האם זה עדיין עובד בכיתה רגילה של 35 ילדים ביום שלישי בבוקר?</p>' +
        '<div class="programs">' +
          '<div class="program">' +
            '<h3>למורים</h3>' +
            '<ul>' +
              '<li>אינטנסיב על החלקים הקשים ביותר במקצוע</li>' +
              '<li>ואחריו כמה שבועות של הוראת ילדים, עם ניתוח שבועי עם מנטור</li>' +
              '<li>הכיתות הגבוהות של בית הספר היסודי ותחילת חטיבת הביניים — בערך בגיל שבו ילדים רבים מתחילים לאבד עניין בלמידה</li>' +
            '</ul>' +
            '<p class="label">שאלות יומיומיות, אבל קשות</p>' +
            '<ul>' +
              '<li>איך מרכזים את הקשב של הכיתה בלי להרים את הקול?</li>' +
              '<li>איך בונים מוטיבציה שלא תלויה בציונים?</li>' +
              '<li>איך מתחילים שיעור בשאלה אמיתית?</li>' +
              '<li>איך גורמים לילדים לדבר זה עם זה במקום לנחש מה המורה רוצה לשמוע?</li>' +
            '</ul>' +
          '</div>' +
          '<div class="program">' +
            '<h3>לרכזים ולרכזות</h3>' +
            '<ul>' +
              '<li>רכזים ורכזות הם גם מורים — הם מלמדים בכיתות שלהם ועוזרים לצוות שלם לעבוד טוב יותר</li>' +
              '<li>להוביל אנשים שלא כפופים לכם רשמית</li>' +
              '<li>לתת משוב שאנשים באמת יכולים להשתמש בו</li>' +
              '<li>לחלוק את העומס — ובכל זאת איכשהו למצוא זמן ללמד</li>' +
              '<li>בונים יחד עם רכזים ורכזות</li>' +
              '<li>פיילוט ראשון יוצא לדרך בסתיו 2026</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<p>מורים חזקים צריכים בתי ספר שבהם אפשר לעבוד טוב ושבהם רוצים להישאר. בשביל זה התוכנית הזאת קיימת.</p>',
      h_believe: "למה דווקא מורים?",
      a_believe:
        '<p>מורה טוב אחד יכול להשפיע על מאות ילדים. יש מורים שמשפיעים גם על המבוגרים שסביבם.</p>' +
        '<p>לכן אנחנו מהמרים על המורים.</p>' +
        '<p class="label">ומה עם AI?</p>' +
        '<p>אנחנו מלמדים מורים להשתמש ב-AI — וללמד ילדים איך להשתמש בו — במקום לאמן AI להחליף מורים.</p>',
      h_pilot: "הפיילוט הראשון",
      a_pilot:
        '<p>בקיץ 2026 סיימו <strong>17 מורים ומורות</strong> את האינטנסיב הראשון שלנו. <strong>16 מהם</strong> ממשיכים כעת בהתנסות מעשית בתשלום: מלמדים ילדים ונפגשים עם מנטור מדי שבוע; <strong>14 מתוך 17</strong> היו ממליצים על התוכנית לעמיתים.</p>' +
        '<p><strong>שני שלישים מהילדים</strong> ששאלנו אמרו שהיו רוצים שיעורים כאלה גם בבית הספר שלהם.</p>' +
        '<p>זה מעודד, אבל זו עדיין קבוצה קטנה, ובתנאים נוחים במיוחד. נהיה הרבה יותר משוכנעים אם נראה את אותו הדבר גם בכיתות רגילות.</p>' +
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
        '<p>אם אתם מורים, עובדים עם בית ספר או רשות מקומית, או פשוט חושבים שכדאי לנו לדבר — <a class="join-link" href="https://survey.morim.foundation/s/join-v1?src=landing&lang=he">השאירו פרטים בטופס</a> או כתבו לנו.</p>' +
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
