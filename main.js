/* ============================================
   AI24GO — Motion, i18n & Interaction Engine
   ============================================ */

(function () {
    'use strict';

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* -------------------------------------------------
       Internationalization (AR · EN · NL)
    ------------------------------------------------- */
    const I18N = {
        ar: {
            'meta.title': 'AI24GO',
            'nav.home': 'الرئيسية',
            'nav.services': 'الخدمات',
            'nav.process': 'منهجيتنا',
            'nav.work': 'أعمالنا',
            'nav.about': 'من نحن',
            'nav.contact': 'تواصل معنا',
            'nav.cta': 'ابدأ مشروعك',
            'hero.badge': 'AI24GO — أنظمة رقمية ذكية من هولندا',
            'hero.t1': 'حوّل أفكارك إلى',
            'hero.t2': 'أنظمة ذكية',
            'hero.sub': 'نصمم ونبني حلولاً ذكية تجمع بين الذكاء الاصطناعي، الأتمتة، المواقع والمنتجات الرقمية لتحويل تحديات الأعمال إلى أنظمة قابلة للنمو والتوسع',
            'hero.b1': 'ابدأ مشروعك',
            'hero.b2': 'اكتشف خدماتنا',
            'hero.f1': 'مقرنا في هولندا',
            'hero.f2': 'نخدم أوروبا والعالم العربي',
            'hero.f3': 'من الفكرة حتى الإطلاق',
            'hero.scroll': 'اكتشف المزيد',
            'marq.1': 'الذكاء الاصطناعي',
            'marq.2': 'الأتمتة الذكية',
            'marq.3': 'تصميم وتطوير المواقع',
            'marq.4': 'المنتجات والمنصات الرقمية',
            'marq.5': 'حلول مصممة خصيصاً',
            'marq.6': 'قابلة للنمو والتوسع',
            'services.tag': 'خدماتنا',
            'services.title': 'نبني <span class="text-gradient">أنظمة تجعل أعمالك أذكى</span>',
            'services.desc': 'من الذكاء الاصطناعي والأتمتة إلى المواقع والمنتجات الرقمية، نبني حلولاً تقنية مصممة حول احتياجات عملك ونتائجك',
            'svc.ai.title': 'حلول الذكاء الاصطناعي',
            'svc.ai.desc': 'نصمم ونبني حلول ذكاء اصطناعي مخصصة تساعد الشركات على تحليل المعلومات، تحسين العمليات واتخاذ قرارات أكثر ذكاءً',
            'svc.ai.f1': 'AI Assistants',
            'svc.ai.f2': 'AI Agents',
            'svc.ai.f3': 'أنظمة المعرفة الذكية',
            'svc.ai.f4': 'معالجة اللغة الطبيعية',
            'svc.ai.f5': 'تحليل البيانات والتنبؤ',
            'svc.ai.f6': 'Computer Vision',
            'svc.ai.f7': 'حلول AI مخصصة',
            'svc.ai.out': 'حوّل بياناتك ومعرفتك إلى ذكاء قابل للتنفيذ',
            'svc.au.title': 'الأتمتة الذكية',
            'svc.au.desc': 'نحوّل العمليات المتكررة والمعقدة إلى تدفقات عمل ذكية تقلل العمل اليدوي وتزيد سرعة وكفاءة الأعمال',
            'svc.au.f1': 'أتمتة العمليات',
            'svc.au.f2': 'AI Workflows',
            'svc.au.f3': 'أتمتة خدمة العملاء',
            'svc.au.f4': 'معالجة المستندات والبيانات',
            'svc.au.f5': 'تكامل الأنظمة',
            'svc.au.f6': 'API Automation',
            'svc.au.out': 'قلّل العمل اليدوي وزد كفاءة أعمالك',
            'svc.web.title': 'تصميم وتطوير المواقع',
            'svc.web.desc': 'نصمم ونطور مواقع رقمية متقدمة تجمع التصميم الراقي مع الأداء العالي، تجربة المستخدم وتحسين الظهور في محركات البحث',
            'svc.web.f1': 'تصميم UI/UX',
            'svc.web.f2': 'مواقع الشركات',
            'svc.web.f3': 'مواقع الخدمات',
            'svc.web.f4': 'Landing Pages',
            'svc.web.f5': 'مواقع SaaS وAI',
            'svc.web.f6': 'تطوير Front-end وBack-end',
            'svc.web.f7': 'SEO التقني',
            'svc.web.f8': 'Responsive Design',
            'svc.web.f9': 'AI & API Integrations',
            'svc.web.out': 'حوّل حضورك الرقمي إلى تجربة تعكس قيمة علامتك التجارية وتحوّل الزوار إلى فرص',
            'svc.pr.title': 'المنتجات والمنصات الرقمية',
            'svc.pr.desc': 'نحوّل الأفكار إلى منتجات رقمية قابلة للنمو، من تطبيقات الهاتف ومنصات الويب إلى الأنظمة والتجارب الرقمية المخصصة',
            'svc.pr.f1': 'Web Applications',
            'svc.pr.f2': 'Mobile Applications',
            'svc.pr.f3': 'SaaS',
            'svc.pr.f4': 'Digital Platforms',
            'svc.pr.f5': 'Business Systems',
            'svc.pr.f6': 'Dashboards',
            'svc.pr.f7': 'Internal Tools',
            'svc.pr.f8': 'APIs & Integrations',
            'svc.pr.out': 'حوّل فكرتك إلى منتج رقمي قابل للنمو والتوسع',
            'svc.cta': 'ابدأ مشروعاً',
            'cn.ai': 'الذكاء الاصطناعي',
            'cn.au': 'الأتمتة',
            'cn.web': 'المواقع',
            'cn.pr': 'المنتجات الرقمية',
            'why.tag': 'مميّزاتنا',
            'why.title': 'لماذا <span class="text-gradient">AI24GO</span>؟',
            'why.desc': 'أربع مبادئ تحكم كل مشروع نبني مع عملائنا',
            'why.1t': 'AI أولاً',
            'why.1d': 'نستخدم الذكاء الاصطناعي عندما يصنع قيمة حقيقية',
            'why.2t': 'من الفكرة إلى التنفيذ',
            'why.2d': 'لا نقدم توصيات فقط — نبني الحل ونطوره حتى التشغيل',
            'why.3t': 'حلول مخصصة',
            'why.3d': 'لا قوالب جاهزة ولا حلول مفروضة على مشروعك',
            'why.4t': 'مصمم للنمو',
            'why.4d': 'نبني أنظمة يمكن تطويرها وتوسيعها مع نمو أعمالك',
            'process.tag': 'منهجيتنا',
            'process.title': 'كيف <span class="text-gradient">نعمل</span>',
            'process.desc': 'منهجية واضحة وشفافة تأخذ مشروعك من الفكرة إلى الإطلاق بخطوات محكمة',
            'pr.1t': 'الاستكشاف والفهم',
            'pr.1d': 'نفهم أهدافك، تحدياتك ومتطلباتك قبل أي خطوة تقنية',
            'pr.2t': 'التصميم والتفصيل',
            'pr.2d': 'نضع الحل المناسب وخارطة طريق واضحة وأهدافاً قابلة للقياس',
            'pr.3t': 'البناء والتطوير',
            'pr.3d': 'نطور ونختبر ونربط الحل بالأنظمة المطلوبة',
            'pr.4t': 'الإطلاق والدعم',
            'pr.4d': 'نطلق الحل ونواصل تحسينه ودعمه لضمان الأداء والاستقرار',
            'work.tag': 'أعمالنا',
            'work.title': 'دراسات <span class="text-gradient">حالة</span>',
            'work.desc': 'نعرض أعمالنا بهيكل موثق وواضح — التحدي، الحل، التقنية، والنتيجة. تُضاف دراسات الحالة الحقيقية هنا عند إطلاقها',
            'work.example': 'نموذج توثيق',
            'wf.ch': 'التحدي',
            'wf.c': 'تسريع العمليات وتقليل العمل اليدوي في مؤسسة متنامية',
            'wf.so': 'الحل',
            'wf.s': 'نظام أتمتة ذكي يربط الأدوات والبيانات في تدفق عمل واحد',
            'wf.te': 'التقنية',
            'wf.t': 'أتمتة العمليات + تكامل API + نماذج ذكاء اصطناعي مخصصة',
            'wf.re': 'النتيجة',
            'wf.r': 'معالجة أسرع وقرارات أدق، مع قابلية التوسع للنمو',
            'work.note': 'هذا القالب يُستبدل بدراسات حالة حقيقية ومشاريع موثقة عند توفرها',
            'about.tag': 'مختبر ابتكار رقمي من هولندا',
            'about.title': 'تكنولوجيا تحل <span class="text-gradient">مشكلات حقيقية</span>',
            'about.p1': 'AI24GO شركة تكنولوجيا متخصصة في الذكاء الاصطناعي، الأتمتة، تصميم وتطوير المواقع والمنتجات الرقمية. نساعد الشركات على تحويل الأفكار والتحديات المعقدة إلى حلول تقنية عملية وقابلة للنمو',
            'about.viz': 'تمثيل نظامنا الذكي',
            'ab.1t': 'AI-First',
            'ab.1d': 'نستخدم الذكاء الاصطناعي عندما يصنع قيمة حقيقية',
            'ab.2t': 'حلول مخصصة',
            'ab.2d': 'نبني الحل حول احتياجات العمل، وليس حول قالب جاهز',
            'ab.3t': 'قابلية التوسع',
            'ab.3d': 'نصمم الأنظمة لتتطور مع نمو الأعمال',
            'ab.4t': 'شراكة مستمرة',
            'ab.4d': 'نبقى مع المشروع بعد الإطلاق للتطوير والتحسين',
            'cta.tag': 'افتح مشروعك',
            'cta.title': 'لنبنِ <span class="text-gradient">ما هو قادم</span>',
            'cta.text': 'أخبرنا عن مشروعك وسنراجع احتياجاته ونساعدك على تحديد أفضل مسار تقني له',
            'cta.a1': 'أمستردام، هولندا',
            'cta.f.name': 'الاسم',
            'cta.f.namePh': 'اسمك الكامل',
            'cta.f.email': 'البريد الإلكتروني',
            'cta.f.emailPh': 'you@company.com',
            'cta.f.service': 'الخدمة',
            'cta.f.svc1': 'حلول الذكاء الاصطناعي',
            'cta.f.svc2': 'الأتمتة الذكية',
            'cta.f.svc3': 'تصميم وتطوير المواقع',
            'cta.f.svc4': 'المنتجات والمنصات الرقمية',
            'cta.f.svc5': 'أخرى / غير متأكد',
            'cta.f.msg': 'عن مشروعك',
            'cta.f.msgPh': 'وصف مختصر لمشروعك وأهدافه',
            'cta.f.btn': 'أرسل طلبك',
            'cta.f.note': 'سيتم فتح تطبيق البريد الإلكتروني لإرسال طلبك',
            'ft.desc': 'نحوّل الأفكار والتحديات التجارية إلى حلول ذكية تجمع بين الذكاء الاصطناعي، الأتمتة، المواقع والمنتجات الرقمية',
            'ft.c1': 'الخدمات',
            'ft.s1': 'حلول الذكاء الاصطناعي',
            'ft.s2': 'الأتمتة الذكية',
            'ft.s3': 'تصميم وتطوير المواقع',
            'ft.s4': 'المنتجات والمنصات الرقمية',
            'ft.c2': 'الشركة',
            'ft.cp1': 'من نحن',
            'ft.cp2': 'منهجيتنا',
            'ft.cp3': 'أعمالنا',
            'ft.cp4': 'تواصل معنا',
            'ft.c3': 'التواصل',
            'ft.cn2': 'نموذج التواصل',
            'ft.cn4': 'أمستردام / هولندا',
            'ft.bot': 'جميع الحقوق محفوظة',
            'ft.priv': 'سياسة الخصوصية',
            'ft.terms': 'شروط الاستخدام',
            'form.subject': 'طلب مشروع — {s} — من {n}',
            'form.name': 'الاسم',
            'form.email': 'البريد',
            'form.service': 'الخدمة',
            'form.details': 'تفاصيل المشروع',
            'form.err': 'يرجى تعبئة الاسم والبريد الإلكتروني لإرسال طلبك',
            'form.ok': 'تم تجهيز رسالتك في بريدك. شكراً لتواصلك معنا!'
        },

        en: {
            'meta.title': 'AI24GO',
            'nav.home': 'Home',
            'nav.services': 'Services',
            'nav.process': 'Our process',
            'nav.work': 'Work',
            'nav.about': 'About',
            'nav.contact': 'Contact',
            'nav.cta': 'Start a project',
            'hero.badge': 'AI24GO — Intelligent Digital Systems from the Netherlands',
            'hero.t1': 'Turn your ideas into',
            'hero.t2': 'intelligent systems',
            'hero.sub': 'We design and build intelligent solutions that combine AI, automation, websites and digital products to turn business challenges into systems built to scale',
            'hero.b1': 'Start a project',
            'hero.b2': 'Explore services',
            'hero.f1': 'Based in the Netherlands',
            'hero.f2': 'Serving Europe & the Arab world',
            'hero.f3': 'From idea to launch',
            'hero.scroll': 'Discover more',
            'marq.1': 'Artificial Intelligence',
            'marq.2': 'Intelligent Automation',
            'marq.3': 'Web Design & Development',
            'marq.4': 'Digital Products & Platforms',
            'marq.5': 'Built to your needs',
            'marq.6': 'Ready to scale',
            'services.tag': 'Services',
            'services.title': 'We build <span class="text-gradient">smarter systems</span> for your business',
            'services.desc': 'From AI and automation to websites and digital products, we build technology shaped around your business needs and outcomes',
            'svc.ai.title': 'AI Solutions',
            'svc.ai.desc': 'We design and build custom AI solutions that help businesses analyse information, improve operations and make smarter decisions',
            'svc.ai.f1': 'AI Assistants',
            'svc.ai.f2': 'AI Agents',
            'svc.ai.f3': 'Intelligent Knowledge Systems',
            'svc.ai.f4': 'Natural Language Processing',
            'svc.ai.f5': 'Data Analytics & Predictions',
            'svc.ai.f6': 'Computer Vision',
            'svc.ai.f7': 'Custom AI Solutions',
            'svc.ai.out': 'Turn your data and knowledge into actionable intelligence',
            'svc.au.title': 'Intelligent Automation',
            'svc.au.desc': 'We convert repetitive and complex operations into smart workflows that reduce manual work and increase the speed and efficiency of your business',
            'svc.au.f1': 'Process Automation',
            'svc.au.f2': 'AI Workflows',
            'svc.au.f3': 'Customer Service Automation',
            'svc.au.f4': 'Document & Data Processing',
            'svc.au.f5': 'Systems Integration',
            'svc.au.f6': 'API Automation',
            'svc.au.out': 'Less manual work, more operational efficiency',
            'svc.web.title': 'Web Design & Development',
            'svc.web.desc': 'We design and develop advanced digital websites that combine refined design with high performance, user experience and search visibility',
            'svc.web.f1': 'UI/UX Design',
            'svc.web.f2': 'Corporate Websites',
            'svc.web.f3': 'Service Websites',
            'svc.web.f4': 'Landing Pages',
            'svc.web.f5': 'SaaS & AI Websites',
            'svc.web.f6': 'Front-end & Back-end Development',
            'svc.web.f7': 'Technical SEO',
            'svc.web.f8': 'Responsive Design',
            'svc.web.f9': 'AI & API Integrations',
            'svc.web.out': 'Turn your digital presence into an experience that reflects your brand and converts visitors into opportunities',
            'svc.pr.title': 'Digital Products & Platforms',
            'svc.pr.desc': 'We turn ideas into growing digital products — from mobile apps and web platforms to custom systems and digital experiences',
            'svc.pr.f1': 'Web Applications',
            'svc.pr.f2': 'Mobile Applications',
            'svc.pr.f3': 'SaaS',
            'svc.pr.f4': 'Digital Platforms',
            'svc.pr.f5': 'Business Systems',
            'svc.pr.f6': 'Dashboards',
            'svc.pr.f7': 'Internal Tools',
            'svc.pr.f8': 'APIs & Integrations',
            'svc.pr.out': 'Turn your idea into a digital product ready to grow and scale',
            'svc.cta': 'Start a project',
            'cn.ai': 'AI',
            'cn.au': 'Automation',
            'cn.web': 'Web',
            'cn.pr': 'Digital products',
            'why.tag': 'Why us',
            'why.title': 'Why <span class="text-gradient">AI24GO</span>?',
            'why.desc': 'Four principles guide every project we build with our clients',
            'why.1t': 'AI-First',
            'why.1d': 'We use AI when it creates real value',
            'why.2t': 'From idea to execution',
            'why.2d': 'We do not just advise — we build the solution and develop it until it runs',
            'why.3t': 'Tailored solutions',
            'why.3d': 'No templates, no one-size-fits-all',
            'why.4t': 'Designed to grow',
            'why.4d': 'We build systems that evolve and expand with your business',
            'process.tag': 'Our approach',
            'process.title': 'How we <span class="text-gradient">work</span>',
            'process.desc': 'A clear, transparent approach that takes your project from idea to launch in well-defined steps',
            'pr.1t': 'Discovery & understanding',
            'pr.1d': 'We understand your goals, challenges and requirements before any technical step',
            'pr.2t': 'Design & detail',
            'pr.2d': 'We define the right solution with a clear roadmap and measurable objectives',
            'pr.3t': 'Build & develop',
            'pr.3d': 'We build, test and integrate the solution with the required systems',
            'pr.4t': 'Launch & support',
            'pr.4d': 'We launch the solution and keep improving and supporting it for performance and stability',
            'work.tag': 'Work',
            'work.title': 'Case <span class="text-gradient">studies</span>',
            'work.desc': 'We present our work in a clear, documented format — the challenge, the solution, the technology and the result. Real case studies will be added here as they launch',
            'work.example': 'Documentation template',
            'wf.ch': 'Challenge',
            'wf.c': 'Faster operations and less manual work at a growing organisation',
            'wf.so': 'Solution',
            'wf.s': 'An intelligent automation system connecting tools and data into a single workflow',
            'wf.te': 'Technology',
            'wf.t': 'Process automation + API integration + custom AI models',
            'wf.re': 'Result',
            'wf.r': 'Faster processing and sharper decisions, built to scale',
            'work.note': 'This template will be replaced with real, documented case studies as they become available',
            'about.tag': 'Digital innovation lab from the Netherlands',
            'about.title': 'Technology that solves <span class="text-gradient">real problems</span>',
            'about.p1': 'AI24GO is a technology company focused on AI, automation, web design & development and digital products. We help businesses turn ideas and complex challenges into practical, scalable technology',
            'about.viz': 'Representation of our intelligent system',
            'ab.1t': 'AI-First',
            'ab.1d': 'We use AI when it creates real value',
            'ab.2t': 'Tailored solutions',
            'ab.2d': 'We build around your business needs, not a template',
            'ab.3t': 'Scalability',
            'ab.3d': 'We design systems to grow with your business',
            'ab.4t': 'Ongoing partnership',
            'ab.4d': 'We stay with the project after launch to improve and evolve it',
            'cta.tag': 'Start your project',
            'cta.title': 'Let\u2019s build <span class="text-gradient">what\u2019s next</span>',
            'cta.text': 'Tell us about your project and we\u2019ll review your needs and help you define the best technical path for it',
            'cta.a1': 'Amsterdam, Netherlands',
            'cta.f.name': 'Name',
            'cta.f.namePh': 'Your full name',
            'cta.f.email': 'Email',
            'cta.f.emailPh': 'you@company.com',
            'cta.f.service': 'Service',
            'cta.f.svc1': 'AI Solutions',
            'cta.f.svc2': 'Intelligent Automation',
            'cta.f.svc3': 'Web Design & Development',
            'cta.f.svc4': 'Digital Products & Platforms',
            'cta.f.svc5': 'Other / not sure yet',
            'cta.f.msg': 'About your project',
            'cta.f.msgPh': 'A short description of your project and its goals',
            'cta.f.btn': 'Send your request',
            'cta.f.note': 'This will open your email application to send your request',
            'ft.desc': 'We turn ideas and business challenges into intelligent solutions combining AI, automation, websites and digital products',
            'ft.c1': 'Services',
            'ft.s1': 'AI Solutions',
            'ft.s2': 'Intelligent Automation',
            'ft.s3': 'Web Design & Development',
            'ft.s4': 'Digital Products & Platforms',
            'ft.c2': 'Company',
            'ft.cp1': 'About',
            'ft.cp2': 'Our process',
            'ft.cp3': 'Work',
            'ft.cp4': 'Contact',
            'ft.c3': 'Contact',
            'ft.cn2': 'Contact form',
            'ft.cn4': 'Amsterdam / Netherlands',
            'ft.bot': 'All rights reserved',
            'ft.priv': 'Privacy policy',
            'ft.terms': 'Terms of use',
            'form.subject': 'Project request — {s} — from {n}',
            'form.name': 'Name',
            'form.email': 'Email',
            'form.service': 'Service',
            'form.details': 'Project details',
            'form.err': 'Please fill in your name and email to send your request',
            'form.ok': 'Your message is ready in your email. Thank you for reaching out!'
        },

        nl: {
            'meta.title': 'AI24GO',
            'nav.home': 'Home',
            'nav.services': 'Diensten',
            'nav.process': 'Onze aanpak',
            'nav.work': 'Werk',
            'nav.about': 'Over ons',
            'nav.contact': 'Contact',
            'nav.cta': 'Start een project',
            'hero.badge': 'AI24GO — Intelligente digitale systemen uit Nederland',
            'hero.t1': 'Maak van je ideeën',
            'hero.t2': 'intelligente systemen',
            'hero.sub': 'We ontwerpen en bouwen slimme oplossingen die AI, automatisering, websites en digitale producten combineren om bedrijfsuitdagingen om te zetten in schaalbare systemen',
            'hero.b1': 'Start een project',
            'hero.b2': 'Ontdek onze diensten',
            'hero.f1': 'Gevestigd in Nederland',
            'hero.f2': 'Actief in Europa & de Arabische wereld',
            'hero.f3': 'Van idee tot lancering',
            'hero.scroll': 'Ontdek meer',
            'marq.1': 'Kunstmatige intelligentie',
            'marq.2': 'Slimme automatisering',
            'marq.3': 'Webdesign & -ontwikkeling',
            'marq.4': 'Digitale producten & platforms',
            'marq.5': 'Op maat gemaakt',
            'marq.6': 'Klaar om te schalen',
            'services.tag': 'Diensten',
            'services.title': 'We bouwen <span class="text-gradient">slimmere systemen</span> voor jouw bedrijf',
            'services.desc': 'Van AI en automatisering tot websites en digitale producten — we bouwen technologie rondom de behoeften en resultaten van jouw bedrijf',
            'svc.ai.title': 'AI-oplossingen',
            'svc.ai.desc': 'We ontwerpen en bouwen op maat gemaakte AI-oplossingen die bedrijven helpen informatie te analyseren, processen te verbeteren en slimmere beslissingen te nemen',
            'svc.ai.f1': 'AI-assistenten',
            'svc.ai.f2': 'AI-agents',
            'svc.ai.f3': 'Intelligente kennissystemen',
            'svc.ai.f4': 'Natuurlijke taalverwerking',
            'svc.ai.f5': 'Data-analyse & voorspellingen',
            'svc.ai.f6': 'Computer Vision',
            'svc.ai.f7': 'Maatwerk AI-oplossingen',
            'svc.ai.out': 'Zet jouw data en kennis om in bruikbare intelligentie',
            'svc.au.title': 'Slimme automatisering',
            'svc.au.desc': 'We zetten repetitieve en complexe processen om in slimme werkstromen die handmatig werk verminderen en de snelheid en efficiëntie van je bedrijf verhogen',
            'svc.au.f1': 'Procesautomatisering',
            'svc.au.f2': 'AI-workflows',
            'svc.au.f3': 'Automatisering klantenservice',
            'svc.au.f4': 'Document- & dataverwerking',
            'svc.au.f5': 'Systeemintegratie',
            'svc.au.f6': 'API-automatisering',
            'svc.au.out': 'Minder handmatig werk, meer operationele efficiëntie',
            'svc.web.title': 'Webdesign & -ontwikkeling',
            'svc.web.desc': 'We ontwerpen en ontwikkelen geavanceerde websites die verfijnd design combineren met hoge prestaties, gebruikerservaring en vindbaarheid',
            'svc.web.f1': 'UI/UX-ontwerp',
            'svc.web.f2': 'Bedrijfswebsites',
            'svc.web.f3': 'Servicewebsites',
            'svc.web.f4': 'Landingpagina\u2019s',
            'svc.web.f5': 'SaaS- & AI-websites',
            'svc.web.f6': 'Front-end & back-end ontwikkeling',
            'svc.web.f7': 'Technische SEO',
            'svc.web.f8': 'Responsive design',
            'svc.web.f9': 'AI- & API-integraties',
            'svc.web.out': 'Verander je online aanwezigheid in een ervaring die je merk weerspiegelt en bezoekers omzet in kansen',
            'svc.pr.title': 'Digitale producten & platforms',
            'svc.pr.desc': 'We veranderen ideeën in groeiende digitale producten — van mobiele apps en webplatforms tot maatwerksystemen en digitale ervaringen',
            'svc.pr.f1': 'Webapplicaties',
            'svc.pr.f2': 'Mobiele apps',
            'svc.pr.f3': 'SaaS',
            'svc.pr.f4': 'Digitale platforms',
            'svc.pr.f5': 'Bedrijfssystemen',
            'svc.pr.f6': 'Dashboards',
            'svc.pr.f7': 'Interne tools',
            'svc.pr.f8': 'API\u2019s & integraties',
            'svc.pr.out': 'Verander je idee in een digitaal product dat klaar is om te groeien',
            'svc.cta': 'Start een project',
            'cn.ai': 'AI',
            'cn.au': 'Automatisering',
            'cn.web': 'Web',
            'cn.pr': 'Digitale producten',
            'why.tag': 'Waarom wij',
            'why.title': 'Waarom <span class="text-gradient">AI24GO</span>?',
            'why.desc': 'Vier principes bepalen elk project dat we met onze klanten bouwen',
            'why.1t': 'AI-first',
            'why.1d': 'We gebruiken AI wanneer het echte waarde creëert',
            'why.2t': 'Van idee tot uitvoering',
            'why.2d': 'We adviseren niet alleen — we bouwen de oplossing en ontwikkelen haar tot een werkend systeem',
            'why.3t': 'Oplossingen op maat',
            'why.3d': 'Geen standaardsjablonen, geen kant-en-klare oplossingen',
            'why.4t': 'Ontworpen om te groeien',
            'why.4d': 'We bouwen systemen die meegroeien met jouw bedrijf',
            'process.tag': 'Onze aanpak',
            'process.title': 'Hoe we <span class="text-gradient">werken</span>',
            'process.desc': 'Een heldere, transparante aanpak die je project in duidelijke stappen van idee naar lancering brengt',
            'pr.1t': 'Ontdekken & begrijpen',
            'pr.1d': 'We begrijpen je doelen, uitdagingen en eisen vóór elke technische stap',
            'pr.2t': 'Ontwerp & uitwerking',
            'pr.2d': 'We bepalen de juiste oplossing met een duidelijke routekaart en meetbare doelstellingen',
            'pr.3t': 'Bouwen & ontwikkelen',
            'pr.3d': 'We ontwikkelen, testen en koppelen de oplossing aan de benodigde systemen',
            'pr.4t': 'Lancering & ondersteuning',
            'pr.4d': 'We lanceren de oplossing en blijven haar verbeteren en ondersteunen voor prestaties en stabiliteit',
            'work.tag': 'Ons werk',
            'work.title': 'Onze <span class="text-gradient">cases</span>',
            'work.desc': 'We tonen ons werk in een helder, gedocumenteerd format — de uitdaging, de oplossing, de technologie en het resultaat. Echte casestudies volgen hier zodra ze live gaan',
            'work.example': 'Documentatiesjabloon',
            'wf.ch': 'De uitdaging',
            'wf.c': 'Snellere processen en minder handmatig werk bij een groeiende organisatie',
            'wf.so': 'De oplossing',
            'wf.s': 'Een slim automatiseringssysteem dat tools en data in één werkstroom verbindt',
            'wf.te': 'Technologie',
            'wf.t': 'Procesautomatisering + API-integratie + op maat gemaakte AI-modellen',
            'wf.re': 'Het resultaat',
            'wf.r': 'Snellere verwerking en scherpere beslissingen, klaar om te schalen',
            'work.note': 'Dit sjabloon wordt vervangen door echte, gedocumenteerde casestudies zodra deze beschikbaar zijn',
            'about.tag': 'Digitaal innovatielab uit Nederland',
            'about.title': 'Technologie die <span class="text-gradient">echte problemen</span> oplost',
            'about.p1': 'AI24GO is een technologiebedrijf gespecialiseerd in AI, automatisering, webdesign & -ontwikkeling en digitale producten. We helpen bedrijven ideeën en complexe uitdagingen om te zetten in praktische, schaalbare technologie',
            'about.viz': 'Weergave van ons intelligente systeem',
            'ab.1t': 'AI-first',
            'ab.1d': 'We gebruiken AI wanneer het echte waarde creëert',
            'ab.2t': 'Oplossingen op maat',
            'ab.2d': 'We bouwen rondom de behoeften van je bedrijf, niet rond een sjabloon',
            'ab.3t': 'Schaalbaarheid',
            'ab.3d': 'We ontwerpen systemen die meegroeien met je bedrijf',
            'ab.4t': 'Doorlopend partnerschap',
            'ab.4d': 'We blijven na de lancering betrokken om te verbeteren en te evolueren',
            'cta.tag': 'Start je project',
            'cta.title': 'Laten we <span class="text-gradient">vooruit bouwen</span>',
            'cta.text': 'Vertel ons over je project — we bekijken je behoeften en helpen je het beste technische traject te bepalen',
            'cta.a1': 'Amsterdam, Nederland',
            'cta.f.name': 'Naam',
            'cta.f.namePh': 'Je volledige naam',
            'cta.f.email': 'E-mail',
            'cta.f.emailPh': 'jij@bedrijf.nl',
            'cta.f.service': 'Dienst',
            'cta.f.svc1': 'AI-oplossingen',
            'cta.f.svc2': 'Slimme automatisering',
            'cta.f.svc3': 'Webdesign & -ontwikkeling',
            'cta.f.svc4': 'Digitale producten & platforms',
            'cta.f.svc5': 'Anders / nog niet zeker',
            'cta.f.msg': 'Over je project',
            'cta.f.msgPh': 'Een korte beschrijving van je project en doelstellingen',
            'cta.f.btn': 'Stuur je aanvraag',
            'cta.f.note': 'Hiermee open je je e-mailapplicatie om je aanvraag te versturen',
            'ft.desc': 'We veranderen ideeën en bedrijfsuitdagingen in intelligente oplossingen die AI, automatisering, websites en digitale producten combineren',
            'ft.c1': 'Diensten',
            'ft.s1': 'AI-oplossingen',
            'ft.s2': 'Slimme automatisering',
            'ft.s3': 'Webdesign & -ontwikkeling',
            'ft.s4': 'Digitale producten & platforms',
            'ft.c2': 'Bedrijf',
            'ft.cp1': 'Over ons',
            'ft.cp2': 'Onze aanpak',
            'ft.cp3': 'Ons werk',
            'ft.cp4': 'Contact',
            'ft.c3': 'Contact',
            'ft.cn2': 'Contactformulier',
            'ft.cn4': 'Amsterdam / Nederland',
            'ft.bot': 'Alle rechten voorbehouden',
            'ft.priv': 'Privacybeleid',
            'ft.terms': 'Gebruiksvoorwaarden',
            'form.subject': 'Projectaanvraag — {s} — van {n}',
            'form.name': 'Naam',
            'form.email': 'E-mail',
            'form.service': 'Dienst',
            'form.details': 'Projectdetails',
            'form.err': 'Vul je naam en e-mailadres in om je aanvraag te versturen',
            'form.ok': 'Je bericht ligt klaar in je e-mail. Bedankt voor je bericht!'
        }
    };

    const LANGS = ['ar', 'en', 'nl'];
    let lang = 'ar';

    function t(key) {
        const dict = I18N[lang] || I18N.ar;
        return dict[key] !== undefined ? dict[key] : (I18N.ar[key] !== undefined ? I18N.ar[key] : key);
    }

    function applyLang(next) {
        if (!I18N[next]) next = 'ar';
        lang = next;
        try { localStorage.setItem('ai24go-lang', next); } catch (e) { /* noop */ }

        document.documentElement.lang = next;
        document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
        document.title = t('meta.title');

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = t(key);
            if (value !== key) el.innerHTML = value;
        });
        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            const value = t(key);
            if (value !== key) el.setAttribute('placeholder', value);
        });
        document.querySelectorAll('[data-langbtn]').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-langbtn') === next);
        });
    }

    /* -------------------------------------------------
       Hero scene — Data streams into a central AI core,
       then out as organised signal lanes.
    ------------------------------------------------- */
    class HeroScene {
        constructor(canvas) {
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
            this.dpr = Math.min(window.devicePixelRatio || 1, 2);
            this.mouse = { x: 0, y: 0, rx: 0.5, ry: 0.5, active: false };
            this.t = 0;
            this.running = false;
            this.raf = null;

            this.build();
            this.bind();
        }

        start() {
            if (prefersReduced) { this.drawStatic(); return; }
            if (this.raf) return;
            this.running = true;
            if (this.raf) return;
            const loop = () => {
                if (!this.running) { this.raf = null; return; }
                this.step();
                this.raf = requestAnimationFrame(loop);
            };
            this.raf = requestAnimationFrame(loop);
        }

        stop() {
            this.running = false;
            if (this.raf) { cancelAnimationFrame(this.raf); this.raf = null; }
        }

        build() {
            const w = this.canvas.parentElement.clientWidth;
            const h = this.canvas.parentElement.clientHeight;
            this.canvas.width = w * this.dpr;
            this.canvas.height = h * this.dpr;
            this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
            this.w = w;
            this.h = h;

            // Central intelligence
            this.core = { x: w * 0.5, y: h * 0.5, r: Math.min(w, h) * 0.075 + 26 };

            // Ambient dust particles
            const n = this.w < 768 ? 34 : 70;
            this.dust = [];
            for (let i = 0; i < n; i++) {
                this.dust.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    vx: (Math.random() - 0.5) * 0.25,
                    vy: (Math.random() - 0.5) * 0.25,
                    r: Math.random() * 1.4 + 0.4,
                    a: Math.random() * 0.35 + 0.1,
                    p: Math.random() * Math.PI * 2
                });
            }

            // Incoming data streams -> converge into the core
            const streamCount = this.w < 768 ? 7 : 12;
            this.inStreams = [];
            for (let i = 0; i < streamCount; i++) {
                this.inStreams.push(this.makeInStream());
            }

            // Outgoing organised lanes
            this.outTargets = [
                { a: 200, d: 0.78, hue: 'green' },
                { a: 250, d: 0.72, hue: 'teal' },
                { a: 310, d: 0.76, hue: 'teal' },
                { a: 140, d: 0.72, hue: 'green' }
            ];
            this.outStreams = this.outTargets.map(tt => ({
                t0: tt,
                p: Math.random(),
                sp: 0.0016 + Math.random() * 0.0012
            }));

            this.pulses = [];
        }

        makeInStream() {
            const side = Math.floor(Math.random() * 3); // 0 left,1 right,2 bottom
            let from = { x: 0, y: 0 }, ctrl = { x: 0, y: 0 };
            if (side === 0) { from = { x: -30, y: Math.random() * this.h }; ctrl = { x: this.w * 0.26, y: this.h * 0.5 }; }
            else if (side === 1) { from = { x: this.w + 30, y: Math.random() * this.h }; ctrl = { x: this.w * 0.74, y: this.h * 0.45 }; }
            else { from = { x: this.w * (0.15 + Math.random() * 0.7), y: this.h + 30 }; ctrl = { x: this.w * 0.5, y: this.h * 0.62 }; }
            return {
                from,
                ctrl,
                p: Math.random(),
                sp: 0.0026 + Math.random() * 0.002,
                seed: Math.random() * Math.PI * 2,
                dim: 0.32 + Math.random() * 0.25,
                trail: []
            };
        }

        bind() {
            window.addEventListener('resize', () => { this.build(); if (prefersReduced) this.drawStatic(); });
            window.addEventListener('mousemove', (e) => {
                this.mouse.x = e.clientX;
                this.mouse.y = e.clientY;
                this.mouse.active = true;
            }, { passive: true });
            window.addEventListener('mouseleave', () => { this.mouse.active = false; });
        }

        /* ---------- drawing helpers ---------- */
        radial(x, y, r, colorStop0, alpha) {
            const g = this.ctx.createRadialGradient(x, y, 0, x, y, r);
            g.addColorStop(0, colorStop0(alpha));
            g.addColorStop(1, 'rgba(0,0,0,0)');
            return g;
        }

        drawCore() {
            const { x, y, r } = this.core;
            const pulse = 1 + Math.sin(this.t * 0.03) * 0.03;

            // halo
            this.ctx.beginPath();
            this.ctx.fillStyle = this.radial(x, y, r * 4.6, a => `rgba(22,185,136,${a})`, 0.2);
            this.ctx.fill();

            // outer spinning ring
            this.ctx.save();
            this.ctx.translate(x, y);
            this.ctx.rotate(this.t * 0.0035);
            this.ctx.strokeStyle = 'rgba(22,185,136,0.55)';
            this.ctx.lineWidth = 1;
            this.ctx.setLineDash([3, 9]);
            this.ctx.lineDashOffset = -this.t * 0.6;
            this.ctx.beginPath();
            this.ctx.arc(0, 0, r * 2.05 * pulse, 0, Math.PI * 2);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
            this.ctx.restore();

            // hex ring
            this.ctx.save();
            this.ctx.translate(x, y);
            this.ctx.rotate(-this.t * 0.0022);
            this.ctx.strokeStyle = 'rgba(47,224,181,0.7)';
            this.ctx.lineWidth = 1.4;
            this.polygon(r * 1.5 * pulse, 6, this.t * 0.002);
            this.ctx.stroke();
            this.ctx.restore();

            // inner core
            const g2 = this.ctx.createRadialGradient(x, y, 0, x, y, r);
            g2.addColorStop(0, 'rgba(220,255,240,0.95)');
            g2.addColorStop(0.4, 'rgba(47,224,181,0.9)');
            g2.addColorStop(1, 'rgba(16,140,100,0.85)');
            this.ctx.beginPath();
            this.ctx.arc(x, y, r * 0.72, 0, Math.PI * 2);
            this.ctx.fillStyle = g2;
            this.ctx.fill();
            this.ctx.beginPath();
            this.ctx.arc(x, y, r * 0.72, 0, Math.PI * 2);
            this.ctx.strokeStyle = 'rgba(255,255,255,0.25)';
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        }

        polygon(radius, sides, rot) {
            const { ctx } = this;
            ctx.beginPath();
            for (let i = 0; i < sides; i++) {
                const a = rot + (Math.PI * 2 * i) / sides - Math.PI / 2;
                const px = radius * Math.cos(a);
                const py = radius * Math.sin(a);
                i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
            }
            ctx.closePath();
        }

        bez(pr, tt) {
            const mt = 1 - tt;
            return {
                x: mt * mt * pr.from.x + 2 * mt * tt * pr.ctrl.x + tt * tt * this.core.x,
                y: mt * mt * pr.from.y + 2 * mt * tt * pr.ctrl.y + tt * tt * this.core.y
            };
        }

        updateInStream(s) {
            s.p += s.sp;
            if (s.p >= 1) {
                this.pulses.push({ x: this.core.x, y: this.core.y, r: 6, a: 0.9 });
                if (this.pulses.length > 14) this.pulses.shift();
                Object.assign(s, this.makeInStream());
                return;
            }
            const cur = this.bez(s, s.p);
            s.trail.push(cur);
            if (s.trail.length > 26) s.trail.shift();
        }

        drawInStream(s) {
            const { x, y } = this.bez(s, s.p);
            this.ctx.save();
            this.ctx.globalCompositeOperation = 'lighter';

            // head
            this.ctx.beginPath();
            this.ctx.arc(x, y, 1.8, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(120,255,215,${0.55 * s.dim * 2})`;
            this.ctx.fill();

            // trail
            for (let i = 1; i < s.trail.length; i++) {
                const a = s.trail[i];
                const b = s.trail[i - 1];
                const f = i / s.trail.length;
                this.ctx.globalAlpha = s.dim * f;
                this.ctx.strokeStyle = i % 3 === 0 ? 'rgba(47,224,181,0.9)' : 'rgba(22,185,136,0.9)';
                this.ctx.lineWidth = 1 * f + 0.2;
                this.ctx.beginPath();
                this.ctx.moveTo(a.x, a.y);
                this.ctx.lineTo(b.x, b.y);
                this.ctx.stroke();
            }
            this.ctx.restore();
        }

        updateOutStream(s) {
            s.p += s.sp;
            if (s.p > 1) s.p = 0;
            const a = (s.t0.a * Math.PI) / 180;
            const d = s.t0.d * Math.min(this.w, this.h) * 0.42;
            const tx = this.core.x + Math.cos(a) * d;
            const ty = this.core.y + Math.sin(a) * d;
            const tt = s.p * 0.92;
            return { x: this.core.x + (tx - this.core.x) * tt, y: this.core.y + (ty - this.core.y) * tt };
        }

        drawOutStream(s) {
            const pos = this.updateOutStream(s);
            this.ctx.save();
            this.ctx.globalCompositeOperation = 'lighter';
            this.ctx.beginPath();
            this.ctx.arc(pos.x, pos.y, 1.6, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(120,255,215,0.6)';
            this.ctx.fill();
            // faint lane base
            const a = (s.t0.a * Math.PI) / 180;
            const d = s.t0.d * Math.min(this.w, this.h) * 0.42;
            this.ctx.globalAlpha = 0.05;
            this.ctx.strokeStyle = 'rgba(47,224,181,1)';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(this.core.x, this.core.y);
            this.ctx.lineTo(this.core.x + Math.cos(a) * d, this.core.y + Math.sin(a) * d);
            this.ctx.stroke();
            this.ctx.restore();
        }

        drawPulses() {
            this.ctx.save();
            this.ctx.globalCompositeOperation = 'lighter';
            for (const p of this.pulses) {
                p.r += 1.2;
                p.a *= 0.93;
                this.ctx.beginPath();
                this.ctx.fillStyle = this.radial(p.x, p.y, p.r * 3, a => `rgba(47,224,181,${a})`, p.a * 0.5);
                this.ctx.fill();
                this.ctx.beginPath();
                this.ctx.lineWidth = 1.2;
                this.ctx.strokeStyle = `rgba(120,255,215,${p.a})`;
                this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                this.ctx.stroke();
            }
            this.pulses = this.pulses.filter(p => p.a > 0.02);
            this.ctx.restore();
        }

        drawDust() {
            for (const d of this.dust) {
                d.x += d.vx;
                d.y += d.vy;
                d.p += 0.02;
                if (d.x < -10) d.x = this.w + 10;
                if (d.x > this.w + 10) d.x = -10;
                if (d.y < -10) d.y = this.h + 10;
                if (d.y > this.h + 10) d.y = -10;
                const blink = 0.7 + Math.sin(d.p) * 0.3;
                this.ctx.beginPath();
                this.ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(150,220,190,${d.a * blink})`;
                this.ctx.fill();
            }
        }

        drawStatic() {
            this.ctx.clearRect(0, 0, this.w, this.h);
            for (const d of this.dust) {
                this.ctx.beginPath();
                this.ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(150,220,190,${d.a})`;
                this.ctx.fill();
            }
            this.drawCore();
            for (const s of this.inStreams) this.drawInStream(s);
            for (const s of this.outStreams) this.drawOutStream(s);
        }

        step() {
            this.t++;
            const { w, h } = this;

            // smooth parallax toward mouse
            const tgtX = this.mouse.active ? (this.mouse.x - w / 2) / w : 0;
            const tgtY = this.mouse.active ? (this.mouse.y - h / 2) / h : 0;
            this.mouse.rx += (tgtX - this.mouse.rx) * 0.03;
            this.mouse.ry += (tgtY - this.mouse.ry) * 0.03;

            const cx = w / 2 + this.mouse.rx * 30;
            const cy = h / 2 + this.mouse.ry * 18;
            this.core.x += (cx - this.core.x) * 0.06;
            this.core.y += (cy - this.core.y) * 0.06;

            this.ctx.clearRect(0, 0, w, h);

            for (const s of this.inStreams) {
                // gentle bend toward cursor
                if (this.mouse.active) {
                    const db = { ...s.ctrl };
                    db.x += (this.mouse.x - db.x) * 0.01;
                    db.y += (this.mouse.y - db.y) * 0.01;
                    s.ctrl = db;
                }
                this.updateInStream(s);
            }

            this.drawDust();
            for (const s of this.inStreams) this.drawInStream(s);
            this.drawPulses();
            for (const s of this.outStreams) this.drawOutStream(s);
            this.drawCore();
        }
    }

    /* -------------------------------------------------
       About — abstract intelligence visualisation
    ------------------------------------------------- */
    class AboutScene {
        constructor(canvas) {
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
            this.dpr = Math.min(window.devicePixelRatio || 1, 2);
            this.nodes = [];
            this.rings = [];
            this.t0 = 0;
            this.running = false;
            this.raf = null;
            this.build();
            this.bind();
        }

        start() {
            if (prefersReduced) { this.drawStatic(); return; }
            if (this.raf) return;
            this.running = true;
            const loop = () => {
                if (!this.running) { this.raf = null; return; }
                this.step();
                this.raf = requestAnimationFrame(loop);
            };
            this.raf = requestAnimationFrame(loop);
        }

        stop() {
            this.running = false;
            if (this.raf) { cancelAnimationFrame(this.raf); this.raf = null; }
        }

        build() {
            const box = this.canvas.getBoundingClientRect();
            this.w = box.width || 600; this.h = box.height || 460;
            this.canvas.width = this.w * this.dpr;
            this.canvas.height = this.h * this.dpr;
            this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

            const n = this.w < 480 ? 16 : 30;
            this.nodes = [];
            for (let i = 0; i < n; i++) {
                this.nodes.push({
                    x: Math.random() * this.w,
                    y: Math.random() * this.h,
                    vx: (Math.random() - 0.5) * 0.22,
                    vy: (Math.random() - 0.5) * 0.22,
                    r: Math.random() * 1.8 + 1,
                    p: Math.random() * Math.PI * 2,
                    hub: i % 6 === 0
                });
            }
            this.rings = [
                { t: 0, sp: 0.004, r: 34, type: 'hex' },
                { t: 2, sp: 0.003, r: 52, type: 'dash' }
            ];
        }

        bind() {
            window.addEventListener('resize', () => { this.build(); if (prefersReduced) this.drawStatic(); });
        }

        linkDist() { return Math.min(this.w, this.h) * 0.24; }

        drawStatic() {
            const { ctx } = this;
            ctx.clearRect(0, 0, this.w, this.h);
            this.nodes.forEach((a, i) => {
                for (let j = i + 1; j < this.nodes.length; j++) {
                    const b = this.nodes[j];
                    const dx = a.x - b.x, dy = a.y - b.y;
                    const d = Math.hypot(dx, dy);
                    if (d < this.linkDist()) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(22,185,136,${(1 - d / this.linkDist()) * 0.16})`;
                        ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
                    }
                }
            });
            for (const node of this.nodes) {
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
                ctx.fillStyle = node.hub ? 'rgba(47,224,181,0.5)' : 'rgba(22,185,136,0.4)';
                ctx.fill();
            }
        }

        polygon(radius, sides, rot) {
            const { ctx } = this;
            ctx.beginPath();
            for (let i = 0; i < sides; i++) {
                const a = rot + (Math.PI * 2 * i) / sides - Math.PI / 2;
                const px = radius * Math.cos(a);
                const py = radius * Math.sin(a);
                i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
            }
            ctx.closePath();
        }

        step() {
            const { ctx, w, h } = this;

            ctx.clearRect(0, 0, w, h);

            // links
            const limit = this.linkDist();
            for (let i = 0; i < this.nodes.length; i++) {
                const a = this.nodes[i];
                for (let j = i + 1; j < this.nodes.length; j++) {
                    const b = this.nodes[j];
                    const dx = a.x - b.x, dy = a.y - b.y;
                    const d = Math.hypot(dx, dy);
                    if (d < limit) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(22,185,136,${(1 - d / limit) * 0.17})`;
                        ctx.lineWidth = 0.6;
                        ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
                    }
                }
            }

            // moving pulses along links
            ctx.save();
            ctx.globalCompositeOperation = 'lighter';
            const n = this.nodes.length;
            for (let k = 0; k < 4; k++) {
                const tt = ((this.t0 / 220) + k * 0.25) % 1;
                const a = this.nodes[(k * 7) % n];
                const b = this.nodes[(k * 7 + 5) % n];
                const x = a.x + (b.x - a.x) * tt;
                const y = a.y + (b.y - a.y) * tt;
                ctx.beginPath();
                ctx.arc(x, y, 1.6, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(120,255,215,0.7)';
                ctx.fill();
            }
            ctx.restore();

            // nodes
            for (const node of this.nodes) {
                node.x += node.vx; node.y += node.vy;
                if (node.x < -8) node.x = w + 8; if (node.x > w + 8) node.x = -8;
                if (node.y < -8) node.y = h + 8; if (node.y > h + 8) node.y = -8;
                node.p += 0.02;
                const s = node.hub ? 1.6 : 1;
                const blink = 0.75 + Math.sin(node.p) * 0.25;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.r * s, 0, Math.PI * 2);
                ctx.fillStyle = node.hub ? `rgba(47,224,181,${0.5 * blink})` : `rgba(22,185,136,${0.38 * blink})`;
                ctx.fill();
            }

            // concentric system rings around the centre
            this.t0 = (this.t0 || 0) + 1;
            const cx = w / 2, cy = h / 2;
            ctx.save();
            ctx.globalCompositeOperation = 'lighter';
            this.rings.forEach((r, idx) => {
                const rot = this.t0 * r.sp + idx;
                ctx.strokeStyle = 'rgba(22,185,136,0.16)';
                ctx.lineWidth = 1;
                if (r.type === 'hex') { this.polygon(r.r * Math.min(w, h) / 300, 6, rot); ctx.stroke(); }
                else {
                    ctx.setLineDash([2, 8]);
                    ctx.lineDashOffset = -this.t0 * 0.4;
                    ctx.beginPath();
                    ctx.arc(cx, cy, r.r * Math.min(w, h) / 300, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.setLineDash([]);
                }
            });
            ctx.restore();
        }
    }

    /* -------------------------------------------------
       MiniSystem — per-service data → AI core → output
    ------------------------------------------------- */
    class MiniSystem {
        constructor(canvas) {
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
            this.dpr = Math.min(window.devicePixelRatio || 1, 1.5);
            this.mode = canvas.getAttribute('data-viz') || 'ai';
            this.t = 0;
            this.state = 0;
            this.hov = 0;
            this.hovTarget = 0;
            this.running = false;
            this.raf = null;
            this.build();
            this.bind();
        }

        build() {
            this.w = this.canvas.clientWidth || 320;
            this.h = this.canvas.clientHeight || 96;
            this.canvas.width = Math.round(this.w * this.dpr);
            this.canvas.height = Math.round(this.h * this.dpr);
            this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
            this.cx = this.w / 2;
            this.cy = this.h / 2;

            const n = this.w < 480 ? 6 : (this.mode === 'web' ? 10 : 8);
            this.ins = [];
            for (let i = 0; i < n; i++) this.ins.push(this.spawnIn());

            this.lanes = this.mode === 'web'
                ? [0, 45, 90, 135, 180, 225, 270, 315]
                : [205, 255, 145, 50, -35];
            this.outs = [];
            for (let i = 0; i < this.lanes.length; i++) {
                this.outs.push({ lane: i, p: Math.random(), sp: 0.006 + Math.random() * 0.005 });
            }
        }

        spawnIn() {
            const fromTop = Math.random() < 0.5;
            const from = fromTop
                ? { x: -4, y: this.cy + (Math.random() - 0.5) * this.h * 0.6 }
                : { x: this.w + 4, y: this.cy + (Math.random() - 0.5) * this.h * 0.6 };
            return {
                from,
                ctrl: { x: this.cx + (Math.random() - 0.5) * this.w * 0.8, y: this.cy + (Math.random() - 0.5) * this.h * 0.7 },
                p: Math.random(),
                sp: 0.0045 + Math.random() * 0.003,
                trail: []
            };
        }

        bez(pt, tt) {
            const mt = 1 - tt;
            return {
                x: mt * mt * pt.from.x + 2 * mt * tt * pt.ctrl.x + tt * tt * this.cx,
                y: mt * mt * pt.from.y + 2 * mt * tt * pt.ctrl.y + tt * tt * this.cy
            };
        }

        bind() {
            window.addEventListener('resize', () => { this.build(); if (prefersReduced) this.drawFrame(0.5); });
            const card = this.canvas.closest('.service-card');
            if (card) {
                card.addEventListener('pointerenter', () => { this.hovTarget = 1; });
                card.addEventListener('pointerleave', () => { this.hovTarget = 0; });
            }
        }

        start() {
            if (prefersReduced) { this.drawFrame(0.6); return; }
            if (this.raf) return;
            this.running = true;
            const loop = () => {
                if (!this.running) { this.raf = null; return; }
                this.frame();
                this.raf = requestAnimationFrame(loop);
            };
            this.raf = requestAnimationFrame(loop);
        }

        stop() {
            this.running = false;
            if (this.raf) { cancelAnimationFrame(this.raf); this.raf = null; }
        }

        frame() {
            this.t++;
            this.state += ((this.running ? 1 : 0) - this.state) * 0.04;
            this.hov += (this.hovTarget - this.hov) * 0.06;
            this.drawFrame(Math.min(1, this.state) * (0.55 + this.hov * 0.45));
        }

        drawFrame(k) {
            const { ctx, w, h, cx, cy } = this;
            ctx.clearRect(0, 0, w, h);
            if (k < 0.01) return;

            ctx.save();
            ctx.globalAlpha = k;

            // core halo
            const r = 9 + Math.sin(this.t * 0.07) * 1.4;
            const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 4);
            core.addColorStop(0, 'rgba(47,224,181,0.18)');
            core.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = core;
            ctx.beginPath(); ctx.arc(cx, cy, r * 4, 0, Math.PI * 2); ctx.fill();

            ctx.globalCompositeOperation = 'lighter';

            // incoming streams
            for (const s of this.ins) {
                s.p += s.sp;
                if (s.p >= 1) { s.p = 0; s.trail.length = 0; }
                const pos = this.bez(s, s.p);
                s.trail.push(pos);
                if (s.trail.length > 18) s.trail.shift();

                for (let i = 1; i < s.trail.length; i++) {
                    const a = s.trail[i];
                    const b = s.trail[i - 1];
                    const f = i / s.trail.length;
                    ctx.strokeStyle = i % 2 ? 'rgba(22,185,136,0.8)' : 'rgba(47,224,181,0.8)';
                    ctx.lineWidth = 0.8 * f + 0.2;
                    ctx.globalAlpha = k * f * 0.8;
                    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
                }
                ctx.globalAlpha = k;
                ctx.beginPath(); ctx.arc(pos.x, pos.y, 1.3, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(180,255,230,0.9)'; ctx.fill();
            }

            // outgoing organised lanes
            const dist = Math.min(w, h) * 0.42;
            for (const o of this.outs) {
                const ang = (this.lanes[o.lane] * Math.PI) / 180;
                const ex = cx + Math.cos(ang) * dist;
                const ey = cy + Math.sin(ang) * dist;

                ctx.globalAlpha = k * 0.12;
                ctx.strokeStyle = 'rgba(47,224,181,1)';
                ctx.lineWidth = 0.6;
                ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(ex, ey); ctx.stroke();

                o.p += o.sp;
                if (o.p > 1) o.p = 0;
                const px = cx + (ex - cx) * o.p;
                const py = cy + (ey - cy) * o.p;
                ctx.globalAlpha = k * 0.85 * (0.35 + o.p * 0.6);
                ctx.beginPath(); ctx.arc(px, py, 1.6, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(140,255,222,0.9)'; ctx.fill();
            }

            // core
            ctx.globalAlpha = k;
            const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
            cg.addColorStop(0, 'rgba(210,255,240,0.95)');
            cg.addColorStop(1, 'rgba(16,140,100,0.9)');
            ctx.fillStyle = cg;
            ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();

            ctx.restore();
        }
    }

    /* -------------------------------------------------
       Canvas lifecycle: animate only when in view
    ------------------------------------------------- */
    function initVisuals() {
        const heroCanvas = document.getElementById('heroCanvas');
        const aboutCanvas = document.getElementById('aboutCanvas');
        const scopes = [];

        if (heroCanvas && heroCanvas.getContext) scopes.push({ el: heroCanvas, scene: new HeroScene(heroCanvas) });
        if (aboutCanvas && aboutCanvas.getContext) scopes.push({ el: aboutCanvas, scene: new AboutScene(aboutCanvas) });

        document.querySelectorAll('.service-viz').forEach(canvas => {
            if (!canvas.getContext) return;
            scopes.push({ el: canvas, scene: new MiniSystem(canvas) });
        });

        if (prefersReduced || !('IntersectionObserver' in window)) {
            scopes.forEach(s => s.scene.start());
            return;
        }

        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const scope = scopes.find(s => s.el === entry.target);
                if (!scope) return;
                if (entry.isIntersecting) scope.scene.start();
                else scope.scene.stop();
            });
        }, { threshold: 0.02 });
        scopes.forEach(s => io.observe(s.el));
    }

    /* -------------------------------------------------
       Navigation
    ------------------------------------------------- */
    function initNav() {
        const nav = document.getElementById('mainNav');
        const toggle = document.getElementById('navToggle');
        const menu = document.getElementById('mobileMenu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        const onScroll = () => {
            nav.classList.toggle('scrolled', window.scrollY > 40);
            const sections = document.querySelectorAll('section[id]');
            let current = 'home';
            sections.forEach(sec => {
                if (window.scrollY >= sec.offsetTop - 140) current = sec.id;
            });
            document.querySelectorAll('.nav-link').forEach(l =>
                l.classList.toggle('active', l.getAttribute('href') === '#' + current)
            );
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        toggle.addEventListener('click', () => {
            const open = menu.classList.toggle('active');
            toggle.classList.toggle('active', open);
            document.body.style.overflow = open ? 'hidden' : '';
        });

        mobileLinks.forEach(l => l.addEventListener('click', () => {
            menu.classList.remove('active');
            toggle.classList.remove('active');
            document.body.style.overflow = '';
        }));
    }

    /* -------------------------------------------------
       Smooth scrolling for [data-scroll]
    ------------------------------------------------- */
    function initSmoothScroll() {
        document.querySelectorAll('[data-scroll]').forEach(link => {
            link.addEventListener('click', (e) => {
                const hash = link.getAttribute('href');
                if (!hash || !hash.startsWith('#')) return;
                const target = document.querySelector(hash);
                if (!target) return;
                e.preventDefault();
                const off = hash === '#home' ? 0 : 76;
                const top = target.getBoundingClientRect().top + window.scrollY - off;
                window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' });
                history.replaceState(null, '', hash);
            });
        });
    }

    /* -------------------------------------------------
       Card cursor glow
    ------------------------------------------------- */
    function initCardGlow() {
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('pointermove', (e) => {
                const r = card.getBoundingClientRect();
                card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
                card.style.setProperty('--my', (e.clientY - r.top) + 'px');
            });
        });
    }

    /* -------------------------------------------------
       Scroll reveal
    ------------------------------------------------- */
    function initReveal() {
        const els = document.querySelectorAll('.reveal, [data-reveal]');
        if (!('IntersectionObserver' in window) || prefersReduced) {
            els.forEach(el => el.classList.add('revealed'));
            return;
        }
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    setTimeout(() => el.classList.add('revealed'), (i % 6) * 80);
                    io.unobserve(el);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
        els.forEach(el => io.observe(el));

        // process track
        const track = document.querySelector('.process-track');
        if (track) {
            const tio = new IntersectionObserver((entries) => {
                entries.forEach(en => {
                    if (en.isIntersecting) { track.classList.add('visible'); tio.unobserve(track); }
                });
            }, { threshold: 0.25 });
            tio.observe(track);
        }
    }

    /* -------------------------------------------------
       Contact form -> mailto with ready subject/body
    ------------------------------------------------- */
    function initForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('cfName').value.trim();
            const email = document.getElementById('cfEmail').value.trim();
            const service = document.getElementById('cfService').value;
            const message = document.getElementById('cfMessage').value.trim();

            const note = document.getElementById('formNote');
            if (!name || !email) {
                if (note) { note.textContent = t('form.err'); note.style.color = 'var(--gold)'; }
                return;
            }

            const subject = encodeURIComponent(t('form.subject').replace('{s}', service).replace('{n}', name));
            const body = encodeURIComponent(
                `${t('form.name')}: ${name}\n` +
                `${t('form.email')}: ${email}\n` +
                `${t('form.service')}: ${service}\n\n` +
                `${t('form.details')}:\n${message}`
            );
            window.location.href = `mailto:info@ai24go.com?subject=${subject}&body=${body}`;
            if (note) {
                note.textContent = t('form.ok');
                note.style.color = 'var(--teal)';
            }
        });
    }

    /* -------------------------------------------------
       Init
    ------------------------------------------------- */
    function init() {
        const stored = (function () { try { return localStorage.getItem('ai24go-lang'); } catch (e) { return null; } })();
        applyLang(LANGS.indexOf(stored) !== -1 ? stored : 'ar');

        document.querySelectorAll('[data-langbtn]').forEach(btn => {
            btn.addEventListener('click', () => applyLang(btn.getAttribute('data-langbtn')));
        });

        initNav();
        initSmoothScroll();
        initCardGlow();
        initReveal();
        initForm();
        initVisuals();

        const year = document.getElementById('year');
        if (year) year.textContent = new Date().getFullYear();

        // cursor glow
        const glow = document.getElementById('cursorGlow');
        if (glow) {
            window.addEventListener('pointermove', (e) => {
                glow.style.left = e.clientX + 'px';
                glow.style.top = e.clientY + 'px';
            }, { passive: true });
        }
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();