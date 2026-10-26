// Text for every language, keyed the way EOTranslator expects; places.<id> matches the ids in places.js
const translations = {
  en: {
    header: {
      greeting: "Hello, I'm",
      welcome: 'Welcome to my portfolio.',
    },
    controls: {
      theme: 'Toggle theme',
      language: 'Language',
      list: 'Experience list',
    },
    popover: {
      close: 'Close',
    },
    drawer: {
      title: 'Experience & education',
    },
    places: {
      luxembourg: {
        city: 'Luxembourg',
        entries: [
          {
            title: 'Full Stack Developer',
            org: 'European Parliament',
            dates: 'Apr 2025 – Present',
            points: [
              'Diagnosed and resolved software defects to improve system stability, reliability, and overall functionality',
              'Optimized application performance through code refinement, resource management, and adherence to best practices',
              'Led the migration from Solr to Elasticsearch to enhance search capabilities, maintainability, and system efficiency',
              'Drove application modernization by introducing contemporary architectural and design patterns aligned with full-stack development best practices',
            ],
          },
        ],
      },
      losAngeles: {
        city: 'Los Angeles',
        entries: [
          {
            title: 'Full Stack Developer',
            org: 'Brainbase / MyMediaBox',
            dates: 'Sep 2022 – Jul 2024',
            points: [
              'Implemented Angular Guards to restrict unauthorized access and strengthen application security',
              'Applied Angular Form Validators to enforce robust client-side validation and improve input reliability',
              'Leveraged Angular 18 features, including Standalone Components, to enhance modularity and maintainability',
              'Utilized Angular Signals for efficient state management and more predictable UI updates',
              'Applied zoneless performance optimizations to improve application responsiveness and runtime efficiency',
              'Contributed to building a modern, secure, and high-performance web application aligned with current Angular best practices',
            ],
          },
        ],
      },
      lisbon: {
        city: 'Lisbon',
        entries: [
          {
            title: 'Full Stack Developer',
            org: 'CACEIS',
            dates: 'Oct 2020 – Jun 2022',
            points: [
              'Designed, developed, and enhanced Spring Boot codebase to improve scalability, maintainability, and overall application performance',
              'Built an ETL pipeline with Spring Integration to streamline configuration file handling and support efficient data extraction, transformation, and loading',
              'Deployed and configured the application on a Tomcat web server to ensure stable, reliable, and consistent runtime behavior',
              'Supported onboarding of new team members by preparing documentation, delivering training, and providing mentorship to accelerate their integration into the project',
            ],
          },
        ],
      },
      aix: {
        city: 'Aix-en-Provence',
        entries: [
          {
            title: 'Software Developer',
            org: 'STMicroelectronics',
            dates: 'Jun 2018 – Sep 2020',
            points: [
              'Collaborated with cross-functional managers in the plant to analyze user needs and pain points',
              'Led discussions and meetings to elicit and clarify functional requirements for the application',
              'Translated user needs into clear, actionable application features aligned with project goals',
              'Ensured proposed functionalities improved usability and operational efficiency in the plant environment',
              'Documented business and functional requirements into well-structured Jira tickets for developers',
              'Organized and categorized Jira tasks, defining priorities and providing sufficient detail for development',
              'Coordinated with relevant teams to track implementation progress and refine requirements when needed',
            ],
          },
        ],
      },
      marseille: {
        city: 'Marseille',
        entries: [
          {
            title: 'IT Project Manager Master Degree',
            org: 'Institut G4',
            dates: '2020',
            points: [
              'Comprehensive project management curriculum covering financial administration, entrepreneurship, team management, and Agile methodology',
              'Strong technical foundation in software architecture and quality assurance, culminating in a final-year project',
            ],
          },
          {
            title: 'Bachelor of Technology',
            org: 'Marseille St Charles University',
            dates: '2018',
            points: [
              'Comprehensive software and web development curriculum',
              'Application development in Java utilizing Design Patterns',
              'Full-stack development: integrating Frontend, Backend, and Database',
              'Deployment and maintenance of applications on Linux servers',
            ],
          },
        ],
      },
    },
  },
  fr: {
    header: {
      greeting: 'Bonjour, je suis',
      welcome: 'Bienvenue sur mon portfolio.',
    },
    controls: {
      theme: 'Changer de thème',
      language: 'Langue',
      list: 'Liste des expériences',
    },
    popover: {
      close: 'Fermer',
    },
    drawer: {
      title: 'Expérience et formation',
    },
    places: {
      luxembourg: {
        city: 'Luxembourg',
        entries: [
          {
            title: 'Développeur Full Stack',
            org: 'Parlement européen',
            dates: "avr. 2025 – aujourd'hui",
            points: [
              "Diagnostic et correction d'anomalies logicielles pour améliorer la stabilité, la fiabilité et le bon fonctionnement du système",
              "Optimisation des performances de l'application par l'amélioration du code, la gestion des ressources et le respect des bonnes pratiques",
              "Pilotage de la migration de Solr vers Elasticsearch pour améliorer les capacités de recherche, la maintenabilité et l'efficacité du système",
              "Modernisation de l'application par l'introduction de patterns d'architecture et de conception actuels, conformes aux bonnes pratiques du développement full stack",
            ],
          },
        ],
      },
      losAngeles: {
        city: 'Los Angeles',
        entries: [
          {
            title: 'Développeur Full Stack',
            org: 'Brainbase / MyMediaBox',
            dates: 'sept. 2022 – juil. 2024',
            points: [
              "Mise en place d'Angular Guards pour bloquer les accès non autorisés et renforcer la sécurité de l'application",
              'Utilisation des validateurs de formulaires Angular pour garantir une validation côté client robuste et fiabiliser les saisies',
              "Exploitation des nouveautés d'Angular 18, notamment les Standalone Components, pour améliorer la modularité et la maintenabilité",
              "Utilisation des Angular Signals pour une gestion d'état efficace et des mises à jour de l'interface plus prévisibles",
              "Optimisations de performance zoneless pour améliorer la réactivité de l'application et son efficacité à l'exécution",
              "Contribution à la création d'une application web moderne, sécurisée et performante, conforme aux bonnes pratiques Angular actuelles",
            ],
          },
        ],
      },
      lisbon: {
        city: 'Lisbonne',
        entries: [
          {
            title: 'Développeur Full Stack',
            org: 'CACEIS',
            dates: 'oct. 2020 – juin 2022',
            points: [
              "Conception, développement et amélioration du code Spring Boot pour accroître la scalabilité, la maintenabilité et les performances globales de l'application",
              "Création d'un pipeline ETL avec Spring Integration pour simplifier le traitement des fichiers de configuration et assurer une extraction, une transformation et un chargement efficaces des données",
              "Déploiement et configuration de l'application sur un serveur Tomcat pour garantir un fonctionnement stable, fiable et cohérent",
              "Accompagnement des nouveaux arrivants par la rédaction de documentation, l'animation de formations et du mentorat pour accélérer leur intégration au projet",
            ],
          },
        ],
      },
      aix: {
        city: 'Aix-en-Provence',
        entries: [
          {
            title: 'Développeur logiciel',
            org: 'STMicroelectronics',
            dates: 'juin 2018 – sept. 2020',
            points: [
              "Collaboration avec les responsables des différents services de l'usine pour analyser les besoins et les difficultés des utilisateurs",
              "Animation de réunions et d'échanges pour recueillir et clarifier les exigences fonctionnelles de l'application",
              'Traduction des besoins des utilisateurs en fonctionnalités claires et concrètes, alignées sur les objectifs du projet',
              "Vérification que les fonctionnalités proposées amélioraient l'ergonomie et l'efficacité opérationnelle dans l'usine",
              'Rédaction des exigences métier et fonctionnelles sous forme de tickets Jira structurés à destination des développeurs',
              'Organisation et catégorisation des tâches Jira, avec définition des priorités et un niveau de détail suffisant pour le développement',
              "Coordination avec les équipes concernées pour suivre l'avancement de la réalisation et affiner les exigences si nécessaire",
            ],
          },
        ],
      },
      marseille: {
        city: 'Marseille',
        entries: [
          {
            title: 'Master Chef de projet informatique',
            org: 'Institut G4',
            dates: '2020',
            points: [
              "Cursus complet en gestion de projet : gestion financière, entrepreneuriat, management d'équipe et méthodologie Agile",
              "Solides bases techniques en architecture logicielle et en assurance qualité, couronnées par un projet de fin d'études",
            ],
          },
          {
            title: 'Bachelor de technologie',
            org: 'Université Marseille St Charles',
            dates: '2018',
            points: [
              'Cursus complet en développement logiciel et web',
              "Développement d'applications en Java à l'aide des Design Patterns",
              'Développement full stack : intégration du frontend, du backend et de la base de données',
              "Déploiement et maintenance d'applications sur des serveurs Linux",
            ],
          },
        ],
      },
    },
  },
  ar: {
    header: {
      greeting: 'مرحبًا، أنا',
      welcome: 'أهلًا بك في معرض أعمالي.',
    },
    controls: {
      theme: 'تبديل المظهر',
      language: 'اللغة',
      list: 'قائمة الخبرات',
    },
    popover: {
      close: 'إغلاق',
    },
    drawer: {
      title: 'الخبرة والتعليم',
    },
    places: {
      luxembourg: {
        city: 'لوكسمبورغ',
        entries: [
          {
            title: 'مطوّر Full Stack',
            org: 'البرلمان الأوروبي',
            dates: 'أبريل 2025 – حتى الآن',
            points: [
              'تشخيص الأعطال البرمجية وإصلاحها لتحسين استقرار النظام وموثوقيته وأدائه العام',
              'تحسين أداء التطبيق من خلال تحسين الشيفرة وإدارة الموارد والالتزام بأفضل الممارسات',
              'قيادة الانتقال من Solr إلى Elasticsearch لتعزيز قدرات البحث وسهولة الصيانة وكفاءة النظام',
              'تحديث التطبيق عبر اعتماد أنماط معمارية وتصميمية حديثة تتماشى مع أفضل ممارسات تطوير Full Stack',
            ],
          },
        ],
      },
      losAngeles: {
        city: 'لوس أنجلوس',
        entries: [
          {
            title: 'مطوّر Full Stack',
            org: 'Brainbase / MyMediaBox',
            dates: 'سبتمبر 2022 – يوليو 2024',
            points: [
              'تطبيق Angular Guards لمنع الوصول غير المصرّح به وتعزيز أمان التطبيق',
              'استخدام مدققات النماذج في Angular لفرض تحقق قوي من جهة العميل وتحسين موثوقية المدخلات',
              'الاستفادة من ميزات Angular 18، ومنها Standalone Components، لتعزيز قابلية التجزئة وسهولة الصيانة',
              'استخدام Angular Signals لإدارة الحالة بكفاءة وتحديثات أكثر قابلية للتنبؤ في واجهة المستخدم',
              'تطبيق تحسينات الأداء بدون Zone.js (zoneless) لتحسين استجابة التطبيق وكفاءته أثناء التشغيل',
              'المساهمة في بناء تطبيق ويب حديث وآمن وعالي الأداء وفق أفضل ممارسات Angular الحالية',
            ],
          },
        ],
      },
      lisbon: {
        city: 'لشبونة',
        entries: [
          {
            title: 'مطوّر Full Stack',
            org: 'CACEIS',
            dates: 'أكتوبر 2020 – يونيو 2022',
            points: [
              'تصميم شيفرة Spring Boot وتطويرها وتحسينها لزيادة قابلية التوسع وسهولة الصيانة والأداء العام للتطبيق',
              'بناء خط معالجة ETL باستخدام Spring Integration لتبسيط التعامل مع ملفات الإعداد ودعم استخراج البيانات وتحويلها وتحميلها بكفاءة',
              'نشر التطبيق وإعداده على خادم Tomcat لضمان تشغيل مستقر وموثوق ومتّسق',
              'دعم انضمام أعضاء الفريق الجدد من خلال إعداد الوثائق وتقديم التدريب والإرشاد لتسريع اندماجهم في المشروع',
            ],
          },
        ],
      },
      aix: {
        city: 'إكس أون بروفانس',
        entries: [
          {
            title: 'مطوّر برمجيات',
            org: 'STMicroelectronics',
            dates: 'يونيو 2018 – سبتمبر 2020',
            points: [
              'التعاون مع مديري الأقسام المختلفة في المصنع لتحليل احتياجات المستخدمين والصعوبات التي يواجهونها',
              'إدارة النقاشات والاجتماعات لاستخلاص المتطلبات الوظيفية للتطبيق وتوضيحها',
              'تحويل احتياجات المستخدمين إلى ميزات واضحة وقابلة للتنفيذ تتماشى مع أهداف المشروع',
              'التأكد من أن الوظائف المقترحة تحسّن سهولة الاستخدام والكفاءة التشغيلية في بيئة المصنع',
              'توثيق متطلبات العمل والمتطلبات الوظيفية في تذاكر Jira منظّمة للمطورين',
              'تنظيم مهام Jira وتصنيفها مع تحديد الأولويات وتوفير تفاصيل كافية للتطوير',
              'التنسيق مع الفرق المعنية لمتابعة تقدّم التنفيذ وتدقيق المتطلبات عند الحاجة',
            ],
          },
        ],
      },
      marseille: {
        city: 'مرسيليا',
        entries: [
          {
            title: 'ماجستير في إدارة مشاريع تقنية المعلومات',
            org: 'Institut G4',
            dates: '2020',
            points: [
              'منهج شامل في إدارة المشاريع يغطي الإدارة المالية وريادة الأعمال وإدارة الفرق ومنهجية Agile',
              'أساس تقني متين في هندسة البرمجيات وضمان الجودة، توّج بمشروع تخرج',
            ],
          },
          {
            title: 'بكالوريوس في التكنولوجيا',
            org: 'جامعة مرسيليا سان شارل',
            dates: '2018',
            points: [
              'منهج شامل في تطوير البرمجيات والويب',
              'تطوير التطبيقات بلغة Java باستخدام أنماط التصميم (Design Patterns)',
              'تطوير Full Stack: ربط الواجهة الأمامية والخلفية وقاعدة البيانات',
              'نشر التطبيقات وصيانتها على خوادم Linux',
            ],
          },
        ],
      },
    },
  },
  zh: {
    header: {
      greeting: '你好，我是',
      welcome: '欢迎来到我的作品集。',
    },
    controls: {
      theme: '切换主题',
      language: '语言',
      list: '经历列表',
    },
    popover: {
      close: '关闭',
    },
    drawer: {
      title: '工作经历与教育',
    },
    places: {
      luxembourg: {
        city: '卢森堡',
        entries: [
          {
            title: '全栈开发工程师',
            org: '欧洲议会',
            dates: '2025年4月 – 至今',
            points: [
              '诊断并修复软件缺陷，提升系统的稳定性、可靠性和整体功能',
              '通过代码优化、资源管理和遵循最佳实践来提升应用性能',
              '主导从 Solr 到 Elasticsearch 的迁移，增强搜索能力、可维护性和系统效率',
              '引入符合全栈开发最佳实践的现代架构和设计模式，推动应用现代化',
            ],
          },
        ],
      },
      losAngeles: {
        city: '洛杉矶',
        entries: [
          {
            title: '全栈开发工程师',
            org: 'Brainbase / MyMediaBox',
            dates: '2022年9月 – 2024年7月',
            points: [
              '实现 Angular Guards，限制未授权访问并加强应用安全',
              '使用 Angular 表单验证器，实施可靠的客户端校验并提高输入的可靠性',
              '利用 Angular 18 的新特性（包括 Standalone Components）提升模块化和可维护性',
              '使用 Angular Signals 实现高效的状态管理和更可预测的界面更新',
              '应用 zoneless 性能优化，提升应用的响应速度和运行效率',
              '参与构建符合当前 Angular 最佳实践的现代、安全、高性能 Web 应用',
            ],
          },
        ],
      },
      lisbon: {
        city: '里斯本',
        entries: [
          {
            title: '全栈开发工程师',
            org: 'CACEIS',
            dates: '2020年10月 – 2022年6月',
            points: [
              '设计、开发并改进 Spring Boot 代码库，提升可扩展性、可维护性和整体应用性能',
              '使用 Spring Integration 构建 ETL 管道，简化配置文件处理，支持高效的数据抽取、转换和加载',
              '在 Tomcat Web 服务器上部署和配置应用，确保运行稳定、可靠、一致',
              '通过编写文档、开展培训和提供指导，帮助新成员更快融入项目',
            ],
          },
        ],
      },
      aix: {
        city: '艾克斯普罗旺斯',
        entries: [
          {
            title: '软件开发工程师',
            org: 'STMicroelectronics',
            dates: '2018年6月 – 2020年9月',
            points: [
              '与工厂各部门经理协作，分析用户需求和痛点',
              '主持讨论和会议，挖掘并明确应用的功能需求',
              '将用户需求转化为清晰、可执行且符合项目目标的应用功能',
              '确保所提出的功能提升工厂环境中的易用性和运营效率',
              '将业务和功能需求整理成结构清晰的 Jira 工单，供开发人员使用',
              '整理和分类 Jira 任务，确定优先级，并为开发提供足够的细节',
              '与相关团队协调，跟踪实施进度，并在需要时完善需求',
            ],
          },
        ],
      },
      marseille: {
        city: '马赛',
        entries: [
          {
            title: 'IT 项目管理硕士',
            org: 'Institut G4',
            dates: '2020',
            points: [
              '全面的项目管理课程，涵盖财务管理、创业、团队管理和敏捷方法',
              '在软件架构和质量保证方面打下扎实的技术基础，并以毕业项目收尾',
            ],
          },
          {
            title: '技术学士',
            org: '马赛圣夏尔大学',
            dates: '2018',
            points: [
              '全面的软件和 Web 开发课程',
              '运用设计模式进行 Java 应用开发',
              '全栈开发：整合前端、后端和数据库',
              '在 Linux 服务器上部署和维护应用',
            ],
          },
        ],
      },
    },
  },
};
