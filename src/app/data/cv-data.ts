import type { CVData } from '../models/cv-data.interface';

const phoneE164Mexico = '5214778029843';

export const cvData: CVData = {
  contact: {
    fullName: 'PALOMA VILLANUEVA',
    headline: 'LIC. EN DERECHO',
    email: 'edithpalomavillanueva@gmail.com',
    phone: '477 802 9843',
    linkedinUrl: 'https://linkedin.com/in/edith-paloma-villanueva-villanueva-a41813214',
    whatsappUrl: `https://wa.me/${phoneE164Mexico}`,
    cvDownloadUrl:
      'https://drive.google.com/file/d/1JJh_HVG-mSMVkAJZz7i4gP-AD37AiaLN/view?usp=drivesdk',

    // Nota: por ahora usamos la imagen del CV como placeholder.
    // Más adelante podemos sustituir por una foto recortada/optimizada.
    profileImageUrl: '/img/Dove.png',

    actions: [
      {
        label: 'WhatsApp',
        href: `https://wa.me/${phoneE164Mexico}`,
        ariaLabel: 'Abrir WhatsApp para contactar a Paloma Villanueva',
      },
      {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/edith-paloma-villanueva-villanueva-a41813214',
        ariaLabel: 'Abrir LinkedIn de Paloma Villanueva',
      },
      {
        label: 'Email',
        href: 'mailto:edithpalomavillanueva@gmail.com',
        ariaLabel: 'Enviar correo a Paloma Villanueva',
      },
    ],
  },

  about:
    'Abogada especialista en Derecho Mercantil y Corporativo con sólida trayectoria en la gestión legal integral de unidades de negocio. Experta en la estructuración de contratos, gobierno corporativo y cumplimiento normativo. Especialista en Mecanismos Alternativos de Solución de Controversias, con un enfoque estratégico orientado a la prevención de riesgos y la eficiencia operativa en el sistema legal de Guanajuato.',

  skills: {
    leftColumn: [
      'Estructuración y revisión de contratos.',
      'Gestión de propiedad intelectual.',
      'Derecho societario.',
      'Cumplimiento normativo.',
    ],
    rightColumn: [
      'Gestión de procedimientos notariales.',
      'Mediación y conciliación (MASC).',
      'Gestión de archivo judicial y ERP.',
      'Derecho laboral y mercantil.',
      'Desahogo de diligencias.',
    ],
  },

  education: [
    {
      title: 'Licenciatura en Derecho',
      period: '2020 – 2024',
      institution: 'Universidad De La Salle Bajío',
      campus: 'Campus Campestre.',
      details: [
        'Áreas de énfasis: Derecho Mercantil, Corporativo y Laboral.',
        'Competencias: Formación en blindaje jurídico, cumplimiento normativo y gestión legal de empresas.',
      ],
    },
    {
      title: 'Diplomado en Mediación y Conciliación',
      period: 'Marzo - Agosto 2025',
      institution: 'Universidad De La Salle Bajío',
      campus: 'Campus Campestre.',
      details: [
        'Certificación: Mecanismos Alternativos de Solución de Controversias (MASC).',
        'Carga horaria: 148 horas de formación técnica.',
        'Impacto: Especialización en negociación estratégica, resolución efectiva de conflictos y redacción contractual.',
      ],
    },
  ],

  experience: [
    {
      role: 'Asistente Jurídico',
      organization: 'Servicios Administrativos Yries S.A. de C.V.',
      period: 'Abril 2024 – Septiembre 2024',
      responsibilities: [
        'Licitaciones: Revisión técnica de convocatorias y bases de licitación.',
        'Contratos: Elaboración y revisión de convenios, contratos y documentación legal de la empresa.',
        'Control Digital: Captura de información y clasificación de documentos en sistema ERP.',
        'Procesos: Automatización de tareas legales y mejora de funciones en la plataforma interna.',
        'Auditorías: Preparación de expedientes para auditorías de cumplimiento.',
      ],
    },
    {
      role: 'Pasante Jurídico',
      organization: 'Firma Legal Rischia Abogados',
      period: 'Octubre 2023 – Marzo 2024',
      responsibilities: [
        'Expedientes: Manejo y control de expedientes judiciales en materia mercantil y civil.',
        'Redacción Jurídica: Elaboración de demandas, promociones y recursos legales.',
        'Juzgados: Programación y desahogo de diligencias, así como comparecencias ante autoridades.',
        'Acuerdos: Revisión de acuerdos de pago con clientes.',
      ],
    },
  ],

  languages: [
    { language: 'Inglés', level: 'nivel avanzado' },
    { language: 'Italiano', level: 'nivel básico' },
    { language: 'lengua de señas (LSM)', level: 'nivel básico' },
  ],
};
