// Translation data for i18n
const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            experience: "Experience",
            education: "Education",
            contact: "Contact"
        },
        hero: {
            title: "Rubing Zhang",
            subtitle: "AI Researcher & Software Engineer",
            description: "Software-focused researcher in AI, Federated Learning, and Backend Systems. Expert in AI pipelines, RESTful backend design, microservices, and production-ready systems.",
            buttonWork: "View My Work",
            buttonContact: "Get In Touch",
            statProjects: "Projects Completed",
            statLanguages: "Languages"
        },
        about: {
            tag: "About Me",
            title: "Professional Profile",
            lead: "I am a software-focused researcher with extensive expertise in artificial intelligence, federated learning, and backend systems. My passion lies in building scalable, production-ready solutions that solve real-world problems in healthcare and data-intensive domains.",
            text: "I've worked on cutting-edge AI pipelines, designed robust RESTful backends, and architected microservices that power mission-critical applications. I specialize in translating research into practical, deployable systems.",
            location: "Location:",
            email: "Email:",
            website: "Website:"
        },
        skills: {
            tag: "Technical Expertise",
            title: "Skills & Technologies",
            languagesML: "Languages & ML",
            backendSystems: "Backend & Systems",
            mlNLP: "ML & NLP",
            cloudTools: "Cloud & Tools",
            languages: "Languages",
            chinese: "Chinese",
            english: "English",
            french: "French",
            native: "Native",
            fluent: "Fluent",
            beginner: "Beginner"
        },
        projects: {
            tag: "Portfolio",
            title: "Selected Projects",
            healthSync: {
                tag: "AI Healthcare",
                title: "HealthSync AI",
                description: "AI-Powered Healthcare Diagnosis Platform combining NLP and ML for clinical decision support.",
                features: [
                    "ClinicalBERT for semantic extraction",
                    "XGBoost for structured risk scoring",
                    "RAG module for grounded outputs",
                    "Privacy-preserving deployment"
                ],
                link: "View Project"
            },
            logistics: {
                tag: "Backend Systems",
                title: "Logistics Platform",
                description: "High-performance backend for route optimization, shipment monitoring, and resource allocation.",
                features: [
                    "RESTful Python microservices",
                    "PostgreSQL + Redis architecture",
                    "JWT and RBAC secured APIs",
                    "Docker + CI/CD pipeline"
                ],
                link: "View Project"
            },
            voiceClone: {
                tag: "Full-Stack AI",
                title: "Voice Clone AI Chat",
                description: "Full-stack application with ElevenLabs voice cloning and Google Gemini conversational AI.",
                features: [
                    "React frontend with voice management",
                    "Real-time audio playback",
                    "Node.js/Express backend",
                    "Optimized UX with responsive design"
                ],
                link: "View Project"
            },
            ink: {
                tag: "Corporate Website",
                title: "Baisiyou Ink",
                description: "Multilingual, responsive SPA showcasing thermochromic microcapsule ink company.",
                features: [
                    "Multilingual support (i18n)",
                    "Smooth scrolling animations",
                    "Lazy-loading images",
                    "Interactive UI components"
                ],
                link: "View Project"
            }
        },
        experience: {
            tag: "Career",
            title: "Professional Experience",
            fedDGL: {
                date: "Recent",
                title: "FedDGL – Defending Gradient Leakage in Federated Learning",
                role: "Sole Researcher",
                description: "Developed Python framework for client-side data perturbation preventing gradient leakage. Conducted experiments on eICU and MIMIC datasets, simulating DLG and Attribute Inference Attacks."
            },
            visitingScholar: {
                date: "Academic",
                title: "Visiting Scholar",
                role: "Queens University, Canada"
            },
            seniorResearcher: {
                date: "Research",
                title: "Senior Researcher",
                role: "McMaster University, Canada"
            },
            associateProfessor: {
                date: "Teaching",
                title: "Associate Professor",
                role: "Microelectronics, Shanghai Jiao Tong University, China"
            },
            postdoc: {
                date: "Research",
                title: "Postdoctoral Fellow",
                role: "Chinese Academy of Sciences, Shanghai, China"
            },
            lecturer: {
                date: "Teaching",
                title: "Lecturer",
                role: "Analytical Chemistry, Nanjing University of Science & Technology, China"
            }
        },
        education: {
            tag: "Academic Background",
            title: "Education",
            cs: {
                degree: "Computer Science",
                school: "Vanier College, Canada"
            },
            phd: {
                degree: "Ph.D., Materials Science",
                school: "Nanjing University of Science and Technology, China"
            },
            msc: {
                degree: "M.Sc., Physical Chemistry",
                school: "Nanjing University of Science and Technology, China"
            }
        },
        contact: {
            tag: "Get In Touch",
            title: "Let's Work Together",
            intro: "I'm always open to discussing new opportunities, interesting projects, or collaborating on innovative solutions. Feel free to reach out!",
            location: "Location",
            email: "Email",
            phone: "Phone",
            website: "Website"
        },
        footer: {
            copyright: "© 2024 Rubing Zhang. All rights reserved.",
            tagline: "Building the future, one line of code at a time."
        }
    },
    zh: {
        nav: {
            home: "首页",
            about: "关于",
            skills: "技能",
            projects: "项目",
            experience: "经历",
            education: "教育",
            contact: "联系"
        },
        hero: {
            title: "张如冰",
            subtitle: "AI研究员 & 软件工程师",
            description: "专注于软件的研究人员，在AI、联邦学习和后端系统方面拥有丰富经验。擅长AI流水线、RESTful后端设计、微服务和生产级系统。",
            buttonWork: "查看我的作品",
            buttonContact: "联系我",
            statProjects: "完成项目",
            statLanguages: "语言"
        },
        about: {
            tag: "关于我",
            title: "专业简介",
            lead: "我是一位专注于软件的研究人员，在人工智能、联邦学习和后端系统方面拥有丰富的专业知识。我的热情在于构建可扩展、生产级的解决方案，以解决医疗保健和数据密集型领域的实际问题。",
            text: "我致力于前沿AI流水线开发，设计强大的RESTful后端，并构建为关键任务应用提供支持的微服务架构。我专注于将研究转化为实用的、可部署的系统。",
            location: "地址：",
            email: "邮箱：",
            website: "网站："
        },
        skills: {
            tag: "技术专长",
            title: "技能与技术",
            languagesML: "编程语言 & 机器学习",
            backendSystems: "后端 & 系统",
            mlNLP: "机器学习 & 自然语言处理",
            cloudTools: "云计算 & 工具",
            languages: "语言",
            chinese: "中文",
            english: "英文",
            french: "法语",
            native: "母语",
            fluent: "流利",
            beginner: "初级"
        },
        projects: {
            tag: "作品集",
            title: "精选项目",
            healthSync: {
                tag: "AI医疗",
                title: "HealthSync AI",
                description: "AI驱动的医疗诊断平台，结合NLP和ML进行临床决策支持。",
                features: [
                    "ClinicalBERT用于语义提取",
                    "XGBoost用于结构化风险评估",
                    "RAG模块用于基于文献的输出",
                    "隐私保护的部署"
                ],
                link: "查看项目"
            },
            logistics: {
                tag: "后端系统",
                title: "物流平台",
                description: "用于路线优化、货物监控和资源分配的高性能后端系统。",
                features: [
                    "RESTful Python微服务",
                    "PostgreSQL + Redis架构",
                    "JWT和RBAC安全API",
                    "Docker + CI/CD流水线"
                ],
                link: "查看项目"
            },
            voiceClone: {
                tag: "全栈AI",
                title: "语音克隆AI聊天",
                description: "全栈应用，集成ElevenLabs语音克隆和Google Gemini对话AI。",
                features: [
                    "React前端语音管理",
                    "实时音频播放",
                    "Node.js/Express后端",
                    "优化的响应式设计用户体验"
                ],
                link: "查看项目"
            },
            ink: {
                tag: "企业网站",
                title: "百思友墨水",
                description: "多语言响应式SPA，展示热致变色微胶囊墨水公司。",
                features: [
                    "多语言支持（i18n）",
                    "流畅滚动动画",
                    "图片懒加载",
                    "交互式UI组件"
                ],
                link: "查看项目"
            }
        },
        experience: {
            tag: "职业生涯",
            title: "专业经历",
            fedDGL: {
                date: "近期",
                title: "FedDGL – 联邦学习中的梯度泄漏防御",
                role: "独立研究员",
                description: "开发了用于客户端数据扰动以防止梯度泄漏的Python框架。在eICU和MIMIC数据集上进行了实验，模拟DLG和属性推理攻击。"
            },
            visitingScholar: {
                date: "学术",
                title: "访问学者",
                role: "女王大学，加拿大"
            },
            seniorResearcher: {
                date: "研究",
                title: "高级研究员",
                role: "麦克马斯特大学，加拿大"
            },
            associateProfessor: {
                date: "教学",
                title: "副教授",
                role: "微电子学，上海交通大学，中国"
            },
            postdoc: {
                date: "研究",
                title: "博士后研究员",
                role: "中国科学院，上海，中国"
            },
            lecturer: {
                date: "教学",
                title: "讲师",
                role: "分析化学，南京理工大学，中国"
            }
        },
        education: {
            tag: "学术背景",
            title: "教育经历",
            cs: {
                degree: "计算机科学",
                school: "Vanier学院，加拿大"
            },
            phd: {
                degree: "材料科学博士",
                school: "南京理工大学，中国"
            },
            msc: {
                degree: "物理化学硕士",
                school: "南京理工大学，中国"
            }
        },
        contact: {
            tag: "联系我",
            title: "让我们一起合作",
            intro: "我始终开放讨论新机会、有趣的项目或创新解决方案的合作。欢迎随时联系！",
            location: "地址",
            email: "邮箱",
            phone: "电话",
            website: "网站"
        },
        footer: {
            copyright: "© 2024 张如冰。保留所有权利。",
            tagline: "一行代码一行代码地构建未来。"
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            about: "À propos",
            skills: "Compétences",
            projects: "Projets",
            experience: "Expérience",
            education: "Éducation",
            contact: "Contact"
        },
        hero: {
            title: "Rubing Zhang",
            subtitle: "Chercheur IA & Ingénieur Logiciel",
            description: "Chercheur axé sur les logiciels en IA, apprentissage fédéré et systèmes backend. Expert en pipelines IA, conception backend RESTful, microservices et systèmes prêts pour la production.",
            buttonWork: "Voir mon travail",
            buttonContact: "Contactez-moi",
            statProjects: "Projets terminés",
            statLanguages: "Langues"
        },
        about: {
            tag: "À propos de moi",
            title: "Profil professionnel",
            lead: "Je suis un chercheur axé sur les logiciels avec une expertise approfondie en intelligence artificielle, apprentissage fédéré et systèmes backend. Ma passion réside dans la construction de solutions évolutives et prêtes pour la production qui résolvent des problèmes réels dans les domaines de la santé et des données intensives.",
            text: "J'ai travaillé sur des pipelines IA de pointe, conçu des backends RESTful robustes et architecturé des microservices qui alimentent des applications critiques. Je me spécialise dans la traduction de la recherche en systèmes pratiques et déployables.",
            location: "Localisation :",
            email: "Email :",
            website: "Site web :"
        },
        skills: {
            tag: "Expertise technique",
            title: "Compétences et technologies",
            languagesML: "Langages & ML",
            backendSystems: "Backend & Systèmes",
            mlNLP: "ML & NLP",
            cloudTools: "Cloud & Outils",
            languages: "Langues",
            chinese: "Chinois",
            english: "Anglais",
            french: "Français",
            native: "Natif",
            fluent: "Courant",
            beginner: "Débutant"
        },
        projects: {
            tag: "Portfolio",
            title: "Projets sélectionnés",
            healthSync: {
                tag: "IA Santé",
                title: "HealthSync AI",
                description: "Plateforme de diagnostic de santé alimentée par l'IA combinant NLP et ML pour le support de décision clinique.",
                features: [
                    "ClinicalBERT pour l'extraction sémantique",
                    "XGBoost pour le scoring de risque structuré",
                    "Module RAG pour des sorties fondées",
                    "Déploiement préservant la confidentialité"
                ],
                link: "Voir le projet"
            },
            logistics: {
                tag: "Systèmes backend",
                title: "Plateforme logistique",
                description: "Backend haute performance pour l'optimisation d'itinéraires, la surveillance d'expédition et l'allocation de ressources.",
                features: [
                    "Microservices Python RESTful",
                    "Architecture PostgreSQL + Redis",
                    "APIs sécurisées JWT et RBAC",
                    "Pipeline Docker + CI/CD"
                ],
                link: "Voir le projet"
            },
            voiceClone: {
                tag: "IA Full-Stack",
                title: "Chat IA Clone Vocal",
                description: "Application full-stack avec clonage vocal ElevenLabs et IA conversationnelle Google Gemini.",
                features: [
                    "Frontend React avec gestion vocale",
                    "Lecture audio en temps réel",
                    "Backend Node.js/Express",
                    "UX optimisée avec design réactif"
                ],
                link: "Voir le projet"
            },
            ink: {
                tag: "Site d'entreprise",
                title: "Baisiyou Ink",
                description: "SPA multilingue et réactif présentant une entreprise d'encre à microcapsules thermochromiques.",
                features: [
                    "Support multilingue (i18n)",
                    "Animations de défilement fluides",
                    "Images à chargement différé",
                    "Composants UI interactifs"
                ],
                link: "Voir le projet"
            }
        },
        experience: {
            tag: "Carrière",
            title: "Expérience professionnelle",
            fedDGL: {
                date: "Récent",
                title: "FedDGL – Défense contre la fuite de gradient dans l'apprentissage fédéré",
                role: "Chercheur principal",
                description: "Développé un framework Python pour la perturbation de données côté client empêchant la fuite de gradient. Mené des expériences sur les ensembles de données eICU et MIMIC, simulant les attaques DLG et d'inférence d'attributs."
            },
            visitingScholar: {
                date: "Académique",
                title: "Chercheur invité",
                role: "Université Queen's, Canada"
            },
            seniorResearcher: {
                date: "Recherche",
                title: "Chercheur senior",
                role: "Université McMaster, Canada"
            },
            associateProfessor: {
                date: "Enseignement",
                title: "Professeur associé",
                role: "Microélectronique, Université Jiao Tong de Shanghai, Chine"
            },
            postdoc: {
                date: "Recherche",
                title: "Chercheur postdoctoral",
                role: "Académie chinoise des sciences, Shanghai, Chine"
            },
            lecturer: {
                date: "Enseignement",
                title: "Maître de conférences",
                role: "Chimie analytique, Université des sciences et technologies de Nanjing, Chine"
            }
        },
        education: {
            tag: "Formation académique",
            title: "Éducation",
            cs: {
                degree: "Informatique",
                school: "Collège Vanier, Canada"
            },
            phd: {
                degree: "Ph.D., Science des matériaux",
                school: "Université des sciences et technologies de Nanjing, Chine"
            },
            msc: {
                degree: "M.Sc., Chimie physique",
                school: "Université des sciences et technologies de Nanjing, Chine"
            }
        },
        contact: {
            tag: "Contactez-moi",
            title: "Travaillons ensemble",
            intro: "Je suis toujours ouvert à discuter de nouvelles opportunités, de projets intéressants ou de collaborer sur des solutions innovantes. N'hésitez pas à me contacter !",
            location: "Localisation",
            email: "Email",
            phone: "Téléphone",
            website: "Site web"
        },
        footer: {
            copyright: "© 2024 Rubing Zhang. Tous droits réservés.",
            tagline: "Construire l'avenir, une ligne de code à la fois."
        }
    }
};

