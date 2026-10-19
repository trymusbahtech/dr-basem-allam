const articleCatalogue = {
  denials: {
    eyebrow: 'INSURANCE & CLAIMS',
    titleAr: ['أين تبدأ رحلة', 'منع رفض المطالبات؟'],
    titleEn: ['Where does denial', 'prevention really begin?'],
    deckAr: 'رفض المطالبة ليس حدثًا منفصلًا في نهاية الرحلة. غالبًا ما يكون نتيجة قرار أو توثيق أو ترميز لم ينتقل بوضوح من نقطة الرعاية إلى الدافع.',
    deckEn: 'A denied claim is rarely an isolated event at the end of the journey. It is often the visible result of a clinical, documentation or coding gap upstream.',
    image: '../assets/basem-office.jpg',
    visual: ['CARE', 'DOCUMENT', 'CLAIM'],
    readAr: '٧ دقائق', readEn: '7 min read', noteAr: 'قراءة عملية', noteEn: 'Practical article',
    introAr: 'التركيز على إعادة الإرسال وحدها يعالج النتيجة، لكنه لا يمنع تكرارها. الوقاية الحقيقية تبدأ بتتبّع المسار كاملًا: هل كانت الضرورة الطبية واضحة؟ هل وثّق السجل القصة؟ هل نقل الترميز شدّة الحالة؟ وهل طابقت الموافقة الخدمة الفعلية؟',
    introEn: 'Resubmission may recover one claim, but it does not prevent the next denial. Real prevention traces the whole pathway: medical necessity, documentation, coding, authorization and contract logic.',
    railAr: ['الفكرة الأساسية', 'نقاط التحكم', 'خطة 30 يومًا'],
    railEn: ['Core premise', 'Control points', '30-day plan'],
    sections: [
      { titleAr: 'ابدأ من نقطة الفشل، لا من كود الرفض.', titleEn: 'Start at the failure point—not the denial code.', blocks: [
        { type: 'p', ar: 'كود الرفض يصف ما ظهر عند الدافع، لكنه لا يحدد دائمًا أين بدأت المشكلة. صنّف حالات الرفض حسب المرحلة التي كان يمكن عندها منعها: قرار سريري، توثيق، ترميز، موافقة، أهلية، تسعير أو عقد.', en: 'A denial code describes what surfaced at the payer; it does not always identify where the problem began. Classify denials by the stage that could have prevented them: clinical decision, documentation, coding, authorization, eligibility, pricing or contract.' },
        { type: 'quote', ar: 'اسأل: «ما أول نقطة كان يمكن عندها تغيير النتيجة؟»', en: 'Ask: “What was the earliest point where the outcome could have changed?”' }
      ]},
      { titleAr: 'خمس نقاط تحكم قبل الإرسال.', titleEn: 'Five control points before submission.', blocks: [
        { type: 'framework', items: [
          ['الضرورة الطبية','Medical necessity','هل يشرح السجل لماذا احتاج المريض هذه الخدمة؟','Does the record explain why the patient needed the service?'],
          ['اكتمال التوثيق','Documentation','هل التشخيص والخطة والنتيجة متصلة وواضحة؟','Are diagnosis, plan and outcome clear and connected?'],
          ['دقة الترميز','Coding accuracy','هل نقلت الأكواد القصة السريرية دون فقد للمعنى؟','Do codes carry the clinical story without losing meaning?'],
          ['الموافقة','Authorization','هل تغطي الموافقة الخدمة والنطاق والتوقيت الفعلي؟','Does approval match the actual service, scope and timing?'],
          ['العقد والمطالبة','Contract & claim','هل قواعد العقد مطبقة قبل أن تغادر المطالبة؟','Are contract rules applied before the claim leaves?']
        ]}
      ]},
      { titleAr: 'خطة عمل خلال 30 يومًا.', titleEn: 'A focused 30-day action plan.', blocks: [
        { type: 'steps', items: [
          ['اختر أعلى ثلاثة أسباب رفض من حيث القيمة والتكرار، وليس التكرار وحده.','Select the top three denial drivers by both value and frequency.'],
          ['تتبّع عينة من كل سبب إلى أول نقطة فشل داخل رحلة المريض.','Trace a sample from each driver back to its first failure point.'],
          ['عيّن مالكًا للإجراء التصحيحي ومؤشرًا يمكن قياسه أسبوعيًا.','Assign an owner and one measurable weekly indicator.'],
          ['أعد النتيجة إلى الفريق الذي يستطيع منع التكرار، لا إلى فريق التحصيل فقط.','Return learning to the team that can prevent recurrence—not only collections.']
        ]}
      ]}
    ],
    takeawayAr: 'أفضل برنامج لمنع الرفض لا يبدأ من قائمة الرفض؛ يبدأ من تصميم رحلة تجعل القصة السريرية مفهومة وقابلة للدفاع قبل إرسال المطالبة.',
    takeawayEn: 'The strongest denial-prevention program does not start with a denial list. It starts by designing a pathway that makes the clinical story clear and defensible before submission.'
  },
  drg: {
    eyebrow: 'PAYMENT MODELS & READINESS',
    titleAr: ['كيف تستعد المنشأة', 'لنظام DRG؟'], titleEn: ['How can an organization', 'prepare for DRG?'],
    deckAr: 'الاستعداد لنظام DRG لا يعتمد على الترميز وحده؛ بل يحتاج إلى تعاون واضح بين الفرق الطبية والإدارية والمالية.',
    deckEn: 'Preparing for DRG is not a coding task alone. It requires clear collaboration across clinical, administrative and financial teams.',
    image: '../assets/basem-executive.jpg', visual: ['CLINICAL','DATA','COST'],
    readAr: '٨ دقائق', readEn: '8 min read', noteAr: 'دليل مبسط', noteEn: 'A clear guide',
    introAr: 'اختزال DRG في نظام تجميع أو تدريب للمُرمزين يجعل المؤسسة ترى جزءًا واحدًا من الصورة. النموذج يختبر جودة السجل، واتساق البيانات، وقدرة المنشأة على فهم التكلفة، وسرعة اتخاذ القرار عبر فرق متعددة.',
    introEn: 'Reducing DRG to a grouper or coder training leaves most of the system untouched. The model tests record quality, data consistency, cost visibility and cross-functional decision speed.',
    railAr: ['مفهوم الجاهزية','الأبعاد الستة','مراحل التطبيق'], railEn: ['Readiness','Six dimensions','Implementation'],
    sections: [
      { titleAr: 'الجاهزية ليست شراء نظام.', titleEn: 'Readiness is not a software purchase.', blocks: [{ type:'p', ar:'النظام يحسب النتيجة من البيانات التي تصله؛ لكنه لا يصحح توثيقًا ناقصًا أو تكلفة غير موثوقة أو ملكية قرار غامضة. لذلك تبدأ الجاهزية بتقييم المسار قبل تقييم الأداة.', en:'Software calculates from the data it receives. It cannot repair incomplete documentation, unreliable cost or unclear ownership. Readiness begins with the pathway before the tool.' }]},
      { titleAr: 'ستة أبعاد يجب أن تتحرك معًا.', titleEn: 'Six dimensions must move together.', blocks: [{ type:'framework', wide:true, items:[
        ['الحوكمة','Governance','لجنة قرار وملكية واضحة للفجوات.','Decision forum and clear gap ownership.'],
        ['التوثيق','Documentation','سجل يعبّر عن التعقيد السريري.','A record that reflects clinical complexity.'],
        ['الترميز','Coding','قواعد موحدة وتدقيق موجّه بالمخاطر.','Consistent rules and risk-led audit.'],
        ['البيانات','Data','تعريفات موحدة وجودة قابلة للقياس.','Common definitions and measurable quality.'],
        ['التكلفة','Costing','فهم الموارد على مستوى الحالة.','Case-level resource visibility.'],
        ['العقود','Contracts','نمذجة الأثر قبل التنفيذ.','Model impact before implementation.']
      ]}]},
      { titleAr:'طبّق على أربع مراحل.', titleEn:'Implement in four deliberate phases.', blocks:[{type:'steps', items:[
        ['قيّم التوثيق والترميز والتكلفة والبيانات على حالات فعلية.','Assess documentation, coding, costing and data on real cases.'],
        ['صمّم العمليات والمسؤوليات ومؤشرات النجاح.','Design process, ownership and success measures.'],
        ['جرّب على تخصص أو نطاق يمكن مراقبته بوضوح.','Pilot in one observable specialty or scope.'],
        ['توسّع فيما ثبت نجاحه مع مراجعة الجودة والأثر.','Scale proven controls with regular quality and impact review.']
      ]}]}
    ],
    takeawayAr:'مؤشر جاهزية DRG الحقيقي ليس تشغيل الـgrouper؛ بل قدرة الفرق على تفسير النتيجة والعودة إلى مصدرها واتخاذ قرار مشترك حولها.',
    takeawayEn:'The real sign of DRG readiness is not a running grouper. It is the ability to explain an outcome, trace its source and make a shared decision around it.'
  },
  cdm: {
    eyebrow:'HEALTHCARE PRICING', titleAr:['كيف يُبنى سعر','الخدمة الصحية؟'], titleEn:['How should a healthcare','service be priced?'],
    deckAr:'التسعير الجيد يبدأ من فهم الخدمة وتكلفتها وقيمتها، ثم ربطها بالعقد وطريقة تقديم الرعاية.',
    deckEn:'Good pricing begins with understanding the service, its cost and its value, then connecting them to contracts and care delivery.',
    image:'../assets/basem-studio.jpg', visual:['SERVICE','COST','VALUE'], readAr:'٦ دقائق', readEn:'6 min read', noteAr:'شرح عملي', noteEn:'Practical overview',
    introAr:'قائمة أسعار ضخمة لا تعني وجود Charge Master منضبط. الجودة تظهر عندما تستطيع المنشأة الإجابة عن خمسة أسئلة لأي خدمة: ما هي؟ كيف تُرمّز؟ ماذا تستهلك؟ كيف سُعّرت؟ وكيف يعاملها العقد؟',
    introEn:'A large price list is not a governed Charge Master. Quality appears when the organization can answer five questions for every service: what is it, how is it coded, what does it consume, how is it priced and how is it treated by contract?',
    railAr:['سلسلة القيمة','علامات الخطر','حوكمة التغيير'], railEn:['Value chain','Warning signs','Change control'],
    sections:[
      {titleAr:'ابنِ سلسلة واحدة يمكن تتبّعها.',titleEn:'Build one traceable chain.',blocks:[{type:'chain',items:['SERVICE','CODE','COST','PRICE','CONTRACT']},{type:'p',ar:'أي انقطاع في هذه السلسلة قد ينتج خطأ فوترة أو تفاوتًا في التسعير أو تسربًا في الإيراد. تعريف الخدمة هو نقطة البداية لأنه يحدد الوحدة والنطاق والمكوّنات والمسؤول السريري.',en:'A break anywhere in this chain can create billing error, pricing inconsistency or leakage. Service definition is the starting point because it establishes unit, scope, components and clinical owner.'}]},
      {titleAr:'علامات تستحق المراجعة فورًا.',titleEn:'Signals that deserve immediate review.',blocks:[{type:'checklist',items:[
        ['خدمات متشابهة بأسماء أو أكواد مختلفة دون سبب واضح.','Similar services with different names or codes and no clear rationale.'],
        ['سعر يتغير دون تحديث موثّق للتكلفة أو العقد.','Price changes without documented cost or contract review.'],
        ['بنود غير مستخدمة لفترة طويلة أو بنود جديدة بلا مالك.','Long-unused items or newly created items without an owner.'],
        ['تفاوت كبير بين المنشآت لنفس تعريف الخدمة.','Large variation between facilities for the same service.']
      ]}]},
      {titleAr:'حوكمة التغيير أهم من حملة التنظيف.',titleEn:'Change governance matters more than a clean-up campaign.',blocks:[{type:'p',ar:'التنظيف يصحح الوضع اليوم، لكن الحوكمة تمنع عودة الفوضى غدًا. يجب أن يمر أي إنشاء أو تعديل عبر طلب موحّد يراجع التعريف والترميز والتكلفة والتسعير والأثر التعاقدي قبل الاعتماد.',en:'Clean-up corrects today; governance protects tomorrow. Every new or changed item should follow one request path that reviews definition, code, cost, price and contract impact before approval.'},{type:'steps',items:[
        ['طلب تغيير موحد بمالك واضح.','One change request with a clear owner.'],['مراجعة مشتركة سريرية ومالية وترميزية.','Joint clinical, finance and coding review.'],['اختبار الأثر على العقود والفوترة.','Contract and billing impact test.'],['سجل قرار ومراجعة دورية بعد التطبيق.','Decision log and post-launch review.']
      ]}]}
    ],
    takeawayAr:'القيمة لا تأتي من رفع السعر؛ بل من تعريف خدمة يمكن فهم تكلفتها وتسعيرها والتعاقد عليها وقياسها بثقة.',
    takeawayEn:'Value does not come from increasing a price. It comes from defining a service whose cost, price, contract treatment and outcome can be understood with confidence.'
  },
  cdi: {
    eyebrow:'CLINICAL DOCUMENTATION', titleAr:['لماذا يبدأ التحصيل','من توثيق واضح؟'], titleEn:['Why does better revenue begin','with a clear record?'],
    deckAr:'التوثيق الواضح يحفظ قصة المريض، ويساعد الفرق الطبية والإدارية وشركات التأمين على فهم الرعاية واتخاذ قرار أدق.',
    deckEn:'Clear documentation protects the patient story and helps clinical, administrative and insurance teams make better decisions.',
    image:'../assets/basem-blue-blazer.jpg', visual:['CLINICAL TRUTH','CLEAR RECORD'], readAr:'٧ دقائق', readEn:'7 min read', noteAr:'قراءة عملية', noteEn:'Practical article',
    introAr:'عندما لا يوضح السجل سبب القرار السريري أو شدّة الحالة أو العلاقة بين التشخيص والعلاج، تفقد المنظومة جزءًا من الحقيقة. الأثر يظهر في الجودة والترميز والمطالبة والبيانات، وليس في الإيراد فقط.',
    introEn:'When the record does not explain clinical reasoning, severity or the link between diagnosis and treatment, the system loses part of the truth. The impact appears in quality, coding, claims and data—not revenue alone.',
    railAr:['الهدف الحقيقي','الاستفسار الجيد','قياس الأثر'],railEn:['True purpose','Better queries','Measuring impact'],
    sections:[
      {titleAr:'CDI تعاون، وليس تدقيقًا لغويًا.',titleEn:'CDI is collaboration—not a language audit.',blocks:[{type:'p',ar:'البرنامج الفعّال يبني حوارًا محترمًا بين الطبيب ومتخصص التوثيق والمُرمّز. كل طرف يرى جانبًا مختلفًا، والهدف المشترك هو سجل يعكس الحالة دون إضافة غير مدعومة أو فقد لمعلومة مؤثرة.',en:'An effective program creates respectful collaboration between clinician, documentation specialist and coder. Each sees a different part of the story; the shared goal is a complete record without unsupported additions.'}]},
      {titleAr:'الاستفسار الجيد يبدأ من فجوة حقيقية.',titleEn:'A good query begins with a real gap.',blocks:[{type:'framework',items:[
        ['واضح','Clear','يحدد موضع الغموض دون افتراض الإجابة.','Identifies ambiguity without assuming the answer.'],
        ['سريري','Clinical','مبني على مؤشرات موجودة في السجل.','Grounded in indicators already in the record.'],
        ['محايد','Neutral','لا يوجّه الطبيب إلى نتيجة مالية.','Does not lead toward a financial result.'],
        ['قابل للتنفيذ','Actionable','يصل في الوقت المناسب وضمن مسار واضح.','Arrives on time through a clear workflow.']
      ]}]},
      {titleAr:'قس الوضوح، لا العدد فقط.',titleEn:'Measure clarity—not volume alone.',blocks:[{type:'p',ar:'عدد الاستفسارات لا يساوي جودة البرنامج. القياس المتوازن يربط بين اكتمال السجل، ومعدل الاستجابة، واتساق الترميز، ومؤشرات الجودة، والتعلم المتكرر لدى التخصصات الأعلى أثرًا.',en:'Query count is not program quality. Balanced measurement connects record completeness, response, coding consistency, quality indicators and repeat learning in high-impact specialties.'},{type:'checklist',items:[
        ['راقب أنماط الفجوات حسب التخصص، لا حسب الطبيب فقط.','Track gap patterns by specialty—not clinician alone.'],
        ['استخدم حالات فعلية في التغذية الراجعة والتعليم.','Use real cases in feedback and education.'],
        ['افصل الجودة المهنية عن الأهداف المالية المباشرة.','Protect professional quality from direct financial targets.']
      ]}]}
    ],
    takeawayAr:'عندما يكون السجل واضحًا، تتحسن قدرة كل من يأتي بعد الطبيب على فهم الرعاية واتخاذ قرار أدق—من الجودة إلى الترميز والدافع.',
    takeawayEn:'When the record is clear, everyone after the clinician can understand care and make a better decision—from quality and coding to the payer.'
  }
};

const articleRoutes = {
  denials: 'denial-prevention.html',
  drg: 'drg-readiness.html',
  cdm: 'charge-master-governance.html',
  cdi: 'clinical-documentation.html'
};

function renderArticleBlock(block) {
  if (block.type === 'p') return `<p class="lang-ar">${block.ar}</p><p class="lang-en">${block.en}</p>`;
  if (block.type === 'quote') return `<blockquote><span class="lang-ar">${block.ar}</span><span class="lang-en">${block.en}</span></blockquote>`;
  if (block.type === 'chain') return `<div class="value-chain">${block.items.map((item, index) => `${index ? '<i>→</i>' : ''}<span>${item}</span>`).join('')}</div>`;
  if (block.type === 'framework') return `<div class="article-framework${block.wide ? ' article-framework-six' : ''}">${block.items.map((item, index) => `<div><b>${String(index + 1).padStart(2,'0')}</b><h3 class="lang-ar">${item[0]}</h3><h3 class="lang-en">${item[1]}</h3><p class="lang-ar">${item[2]}</p><p class="lang-en">${item[3]}</p></div>`).join('')}</div>`;
  if (block.type === 'steps') return `<ol class="article-steps">${block.items.map((item,index) => `<li><b>${String(index + 1).padStart(2,'0')}</b><span class="lang-ar">${item[0]}</span><span class="lang-en">${item[1]}</span></li>`).join('')}</ol>`;
  if (block.type === 'checklist') return `<ul class="article-checklist">${block.items.map((item) => `<li><span class="lang-ar">${item[0]}</span><span class="lang-en">${item[1]}</span></li>`).join('')}</ul>`;
  return '';
}

function renderSiteHeader() {
  return `<div class="scroll-progress" aria-hidden="true"><span></span></div><a class="skip-link" href="#main"><span class="lang-ar">انتقل إلى المحتوى</span><span class="lang-en">Skip to content</span></a><header class="site-header inner-header"><div class="header-shell"><a class="brand" href="../index.html"><img src="../assets/dr-allam-logo.jpg" alt=""><span><strong class="lang-ar">د. باسم علام</strong><strong class="lang-en">Dr. Basem Allam</strong><small>HEALTHCARE RCM EXECUTIVE</small></span></a><nav class="desktop-nav" aria-label="Primary navigation"><a href="../about.html" data-page="about"><span class="lang-ar">عن الدكتور</span><span class="lang-en">About</span></a><a href="../expertise.html" data-page="expertise"><span class="lang-ar">مجالات الخبرة</span><span class="lang-en">Expertise</span></a><a href="../career.html" data-page="career"><span class="lang-ar">المسيرة</span><span class="lang-en">Career</span></a><a href="../media.html" data-page="media"><span class="lang-ar">المعرفة</span><span class="lang-en">Media</span></a><a href="../insights.html" data-page="insights"><span class="lang-ar">المقالات</span><span class="lang-en">Insights</span></a></nav><div class="header-actions"><button class="lang-toggle" type="button" aria-label="Switch language"><span class="lang-ar">EN</span><span class="lang-en">عربي</span></button><a class="header-contact" href="../contact.html"><span class="lang-ar">ابدأ حوارًا</span><span class="lang-en">Let's talk</span><svg class="icon"><use href="../assets/icons.svg#arrow"></use></svg></a><button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button></div></div><div class="mobile-nav" hidden><a href="../index.html"><b>00</b><span class="lang-ar">الرئيسية</span><span class="lang-en">Home</span></a><a href="../about.html"><b>01</b><span class="lang-ar">عن الدكتور</span><span class="lang-en">About</span></a><a href="../expertise.html"><b>02</b><span class="lang-ar">مجالات الخبرة</span><span class="lang-en">Expertise</span></a><a href="../career.html"><b>03</b><span class="lang-ar">المسيرة</span><span class="lang-en">Career</span></a><a href="../media.html"><b>04</b><span class="lang-ar">المعرفة</span><span class="lang-en">Media</span></a><a href="../insights.html"><b>05</b><span class="lang-ar">المقالات</span><span class="lang-en">Insights</span></a><a href="../contact.html"><b>06</b><span class="lang-ar">تواصل</span><span class="lang-en">Contact</span></a></div></header>`;
}

function renderArticlePage(slug, article) {
  const sections = article.sections.map((section,index) => `<section><span class="article-section-no">${String(index + 1).padStart(2,'0')}</span><h2 class="lang-ar">${section.titleAr}</h2><h2 class="lang-en">${section.titleEn}</h2>${section.blocks.map(renderArticleBlock).join('')}</section>`).join('');
  const visual = article.visual.map((item,index) => `${index ? '<i>→</i>' : ''}<span>${item}</span>`).join('');
  const related = Object.entries(articleCatalogue).filter(([key]) => key !== slug).slice(0,3).map(([key,item]) => `<a href="${articleRoutes[key]}"><small>${item.eyebrow.split(' · ')[0]}</small><strong class="lang-ar">${item.titleAr[1]}</strong><strong class="lang-en">${item.titleEn[1]}</strong><span>↗</span></a>`).join('');
  return `${renderSiteHeader()}<main id="main"><article class="article-document" data-article="${slug}"><section class="article-detail-hero"><div class="article-hero-copy reveal"><div class="page-breadcrumb"><a href="../index.html"><span class="lang-ar">الرئيسية</span><span class="lang-en">Home</span></a><i>/</i><a href="../insights.html"><span class="lang-ar">المقالات</span><span class="lang-en">Insights</span></a></div><span class="eyebrow">${article.eyebrow}</span><h1 class="article-title"><span class="lang-ar">${article.titleAr[0]}<br><em>${article.titleAr[1]}</em></span><span class="lang-en">${article.titleEn[0]}<br><em>${article.titleEn[1]}</em></span></h1><p class="article-deck lang-ar">${article.deckAr}</p><p class="article-deck lang-en">${article.deckEn}</p><div class="article-byline"><span><b class="lang-ar">د. باسم علام</b><b class="lang-en">Dr. Basem Allam</b><small class="lang-ar">طبيب وقائد دورة الإيرادات الصحية</small><small class="lang-en">Physician & healthcare RCM leader</small></span><span><b class="lang-ar">${article.readAr}</b><b class="lang-en">${article.readEn}</b><small class="lang-ar">${article.noteAr}</small><small class="lang-en">${article.noteEn}</small></span></div></div><figure class="article-hero-visual reveal reveal-delay"><img src="${article.image}" alt="Dr. Basem Allam"><figcaption>${visual}</figcaption></figure></section><div class="article-reading-shell"><aside class="article-rail"><a href="../insights.html"><span>←</span><span class="lang-ar">العودة إلى المقالات</span><span class="lang-en">Back to insights</span></a><div><small>IN THIS ARTICLE</small>${article.railAr.map(item => `<span class="lang-ar">${item}</span>`).join('')}${article.railEn.map(item => `<span class="lang-en">${item}</span>`).join('')}</div></aside><div class="article-prose"><p class="article-intro lang-ar">${article.introAr}</p><p class="article-intro lang-en">${article.introEn}</p>${sections}<div class="article-takeaway"><span>THE PRACTICAL TAKEAWAY</span><p class="lang-ar">${article.takeawayAr}</p><p class="lang-en">${article.takeawayEn}</p></div></div><aside class="article-side-note"><strong>PROFESSIONAL NOTE</strong><p class="lang-ar">المحتوى تعليمي عام. يجب مواءمة التطبيق مع الأنظمة والعقود وسياسات المنشأة.</p><p class="lang-en">General educational content. Apply it in line with local regulation, contracts and organizational policy.</p></aside></div></article><section class="article-more"><div class="section-index section-index-light"><span>+</span><b class="lang-ar">تابع القراءة</b><b class="lang-en">Continue reading</b></div><div class="article-more-head"><h2 class="lang-ar">مقالات مستقلة<br>مرتبطة بالموضوع.</h2><h2 class="lang-en">Related standalone<br>articles.</h2><a href="../insights.html"><span class="lang-ar">كل المقالات</span><span class="lang-en">All insights</span><svg class="icon"><use href="../assets/icons.svg#arrow"></use></svg></a></div><div class="article-more-grid article-more-grid-three">${related}</div></section></main>${renderSiteFooter()}`;
}

function renderSiteFooter() {
  return `<footer class="site-footer"><a class="footer-brand" href="../index.html"><img src="../assets/dr-allam-logo.jpg" alt=""><span><strong class="lang-ar">د. باسم علام</strong><strong class="lang-en">Dr. Basem Allam</strong><small>Medicine · RCM · Insurance · Knowledge</small></span></a><nav><a href="../about.html"><span class="lang-ar">عن الدكتور</span><span class="lang-en">About</span></a><a href="../expertise.html"><span class="lang-ar">الخبرات</span><span class="lang-en">Expertise</span></a><a href="../media.html"><span class="lang-ar">المعرفة</span><span class="lang-en">Media</span></a><a href="../insights.html"><span class="lang-ar">المقالات</span><span class="lang-en">Insights</span></a></nav><div class="footer-social"><a href="https://www.linkedin.com/in/dr-basem-allam-%D8%AF%D9%83%D8%AA%D9%88%D8%B1-%D8%B9%D9%84%D8%A7%D9%85-30223a1a0/" target="_blank" aria-label="LinkedIn"><svg class="icon"><use href="../assets/icons.svg#linkedin"></use></svg></a><a href="https://www.youtube.com/@Dr3llam" target="_blank" aria-label="YouTube"><svg class="icon"><use href="../assets/icons.svg#youtube"></use></svg></a><a href="https://www.facebook.com/Doctor.3llam" target="_blank" aria-label="Facebook"><svg class="icon"><use href="../assets/icons.svg#facebook"></use></svg></a></div><p>© <span id="year"></span> Dr. Basem Allam</p></footer><aside class="floating-social" aria-label="Social media"><a href="https://www.linkedin.com/in/dr-basem-allam-%D8%AF%D9%83%D8%AA%D9%88%D8%B1-%D8%B9%D9%84%D8%A7%D9%85-30223a1a0/" target="_blank" aria-label="LinkedIn"><svg class="icon"><use href="../assets/icons.svg#linkedin"></use></svg></a><a href="https://www.youtube.com/@Dr3llam" target="_blank" aria-label="YouTube"><svg class="icon"><use href="../assets/icons.svg#youtube"></use></svg></a><a href="https://www.facebook.com/Doctor.3llam" target="_blank" aria-label="Facebook"><svg class="icon"><use href="../assets/icons.svg#facebook"></use></svg></a></aside><a class="whatsapp-float" href="https://wa.me/966558551691" target="_blank" aria-label="WhatsApp"><svg class="icon"><use href="../assets/icons.svg#whatsapp"></use></svg><span class="lang-ar">تواصل سريع</span><span class="lang-en">Quick contact</span></a>`;
}

const selectedArticle = articleCatalogue[document.body.dataset.articleSlug] || articleCatalogue.denials;
document.body.dataset.page = 'insights';
document.body.className = 'inner-page article-page article-standalone';
document.body.innerHTML = renderArticlePage(document.body.dataset.articleSlug || 'denials', selectedArticle);

const articleRailLabel = document.querySelector('.article-rail small');
if (articleRailLabel) articleRailLabel.innerHTML = '<span class="lang-ar">في هذا المقال</span><span class="lang-en">In this article</span>';
const articleTakeawayLabel = document.querySelector('.article-takeaway > span');
if (articleTakeawayLabel) articleTakeawayLabel.innerHTML = '<span class="lang-ar">الخلاصة</span><span class="lang-en">Key takeaway</span>';
const articleNoteLabel = document.querySelector('.article-side-note strong');
if (articleNoteLabel) articleNoteLabel.innerHTML = '<span class="lang-ar">ملاحظة</span><span class="lang-en">Note</span>';
const articleRelatedArabic = document.querySelector('.article-more-head h2.lang-ar');
const articleRelatedEnglish = document.querySelector('.article-more-head h2.lang-en');
if (articleRelatedArabic) articleRelatedArabic.innerHTML = 'مقالات أخرى<br>قد تهمك.';
if (articleRelatedEnglish) articleRelatedEnglish.innerHTML = 'More articles<br>you may find useful.';
const articleFooterTagline = document.querySelector('.footer-brand small');
if (articleFooterTagline) articleFooterTagline.innerHTML = '<span class="lang-ar">طبيب · قائد صحي · صانع معرفة</span><span class="lang-en">Physician · Healthcare Leader · Educator</span>';
const articleBylineArabic = document.querySelector('.article-byline span:first-child small.lang-ar');
const articleBylineEnglish = document.querySelector('.article-byline span:first-child small.lang-en');
if (articleBylineArabic) articleBylineArabic.textContent = 'طبيب وقائد في الرعاية الصحية';
if (articleBylineEnglish) articleBylineEnglish.textContent = 'Physician & healthcare leader';
const articleNoteArabic = document.querySelector('.article-side-note p.lang-ar');
const articleNoteEnglish = document.querySelector('.article-side-note p.lang-en');
if (articleNoteArabic) articleNoteArabic.textContent = 'تعكس هذه القراءة خبرة مهنية عامة، ويختلف التطبيق بحسب طبيعة كل منشأة وأنظمتها.';
if (articleNoteEnglish) articleNoteEnglish.textContent = 'This article shares general professional experience; application will vary by organization and local requirements.';
