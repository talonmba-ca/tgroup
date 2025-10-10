import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const copyToClipboard = async (text: string, alertTitle: string | null = null) => {
  await navigator.clipboard.writeText(text)
  console.log(alertTitle)
  // try {
  //   // toast.success(alertTitle || 'Text copied to clipboard')
  //   // toast.success(alertTitle || 'Text copied to clipboard')
  // } catch (err) {
  //   // toast.error(`Failed to copy text: ${err} `)
  // }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isStringArray = (arr: any[]): boolean => Array.isArray(arr) && arr.every((item) => typeof item === 'string')

export const FORMATIONS = [
  {
    id: 'F001',
    title: 'Développer une culture d’apprentissage agile',
    category: { id: 'C01', name: 'Développement organisationnel' },
    tags: ['apprentissage', 'agilité', 'culture'],
    format: 'hybride',
    type: 'formation',
    description: `Apprenez à instaurer une culture d’apprentissage continue et agile au sein de votre organisation. Cette formation approfondie vous guide à travers les principes fondamentaux de l’agilité appliqués au développement organisationnel, en mettant l’accent sur l’importance de l’apprentissage continu pour favoriser l’innovation et l’adaptabilité. Vous découvrirez comment mobiliser vos équipes autour de valeurs partagées, instaurer des rituels d’amélioration continue et créer un environnement propice à l’expérimentation et à la prise d’initiative. Des études de cas, des ateliers pratiques et des outils concrets vous permettront de diagnostiquer la maturité de votre culture d’apprentissage, d’identifier les leviers de transformation et de bâtir un plan d’action sur mesure. À l’issue de cette formation, vous serez en mesure de piloter le changement, d’accompagner vos collaborateurs dans l’adoption de nouvelles pratiques et de positionner votre organisation comme un leader de l’agilité et de l’apprentissage organisationnel.`,
    price: 1200,
    isFree: false,
    niveau: 'stratégique',
    thumbnail: 'https://example.com/thumbnails/culture-apprentissage.jpg'
  },
  {
    id: 'F002',
    title: 'Former efficacement en milieu de travail',
    category: { id: 'C01', name: 'Développement organisationnel' },
    tags: ['formation', 'terrain', 'employés'],
    format: 'ensalle',
    type: 'formation',
    description: `Techniques concrètes pour assurer un transfert immédiat des apprentissages en milieu de travail. Cette formation s’adresse aux gestionnaires, formateurs et responsables RH souhaitant optimiser l’efficacité de leurs actions de formation sur le terrain. Vous apprendrez à concevoir des parcours pédagogiques adaptés au contexte opérationnel, à utiliser des méthodes actives favorisant l’engagement des apprenants et à évaluer l’impact réel des formations sur la performance des équipes. Grâce à des mises en situation, des outils d’analyse et des retours d’expérience, vous serez en mesure d’identifier les freins au transfert des compétences et de mettre en place des stratégies pour les lever. La formation aborde également la personnalisation des contenus, l’accompagnement post-formation et l’intégration des apprentissages dans les processus quotidiens. Repartez avec un plan d’action concret pour transformer vos formations en véritables leviers de développement organisationnel.`,
    price: 900,
    isFree: false,
    niveau: 'opérationnel',
    thumbnail: 'https://example.com/thumbnails/formation-travail.jpg'
  },
  {
    id: 'F003',
    title: 'Capsule : Résistance au changement',
    category: { id: 'C02', name: 'Gestion du changement' },
    tags: ['changement', 'résistance', 'adaptation'],
    format: 'enligne',
    type: 'capsule',
    description: `Une courte capsule pour comprendre les mécanismes de résistance au changement et comment y répondre. Cette capsule en ligne propose une analyse approfondie des différentes formes de résistance rencontrées lors des processus de transformation organisationnelle, qu’elles soient individuelles ou collectives. Vous découvrirez les facteurs psychologiques, culturels et structurels qui influencent la réaction des employés face au changement, ainsi que les stratégies éprouvées pour anticiper, diagnostiquer et accompagner ces résistances. À travers des exemples concrets, des témoignages et des outils pratiques, vous apprendrez à instaurer un climat de confiance, à communiquer efficacement sur les enjeux du changement et à mobiliser les parties prenantes autour d’une vision partagée. Cette capsule est idéale pour toute personne impliquée dans la gestion du changement, souhaitant renforcer ses compétences en accompagnement et en gestion des dynamiques humaines.`,
    price: 0,
    isFree: true,
    niveau: 'transversal',
    thumbnail: 'https://example.com/thumbnails/resistance-changement.jpg'
  },
  {
    id: 'F004',
    title: 'Leadership en contexte de transformation',
    category: { id: 'C03', name: 'Leadership' },
    tags: ['leadership', 'transformation', 'gestion'],
    format: 'hybride',
    type: 'conference',
    description: `Conférence inspirante sur le rôle du leadership en période de changement organisationnel. Cette conférence s’adresse aux dirigeants, gestionnaires et leaders d’équipe confrontés à des défis de transformation, qu’ils soient technologiques, culturels ou stratégiques. Vous explorerez les compétences clés du leader en contexte de changement : vision, communication, gestion des émotions, capacité à mobiliser et à fédérer autour d’objectifs communs. Des intervenants expérimentés partageront des retours d’expérience, des outils de pilotage du changement et des méthodes pour renforcer la résilience individuelle et collective. La conférence propose également des ateliers interactifs pour développer votre posture de leader, apprendre à gérer l’incertitude et à transformer les résistances en opportunités de croissance. Repartez avec des clés concrètes pour inspirer, accompagner et réussir vos projets de transformation.`,
    price: 500,
    isFree: false,
    niveau: 'stratégique',
    thumbnail: 'https://example.com/thumbnails/leadership-transfo.jpg'
  },
  {
    id: 'F005',
    title: 'Concevoir une stratégie de développement des compétences',
    category: { id: 'C01', name: 'Développement organisationnel' },
    tags: ['stratégie', 'RH', 'compétences'],
    format: 'enligne',
    type: 'formation',
    description: `Étapes concrètes pour bâtir une stratégie efficace de développement des compétences à l’échelle de l’organisation. Cette formation vous accompagne dans la définition des besoins en compétences, l’élaboration d’un référentiel adapté à votre contexte et la mise en place de dispositifs de formation innovants. Vous apprendrez à aligner la stratégie de développement des compétences avec les objectifs organisationnels, à impliquer les parties prenantes et à mesurer l’impact des actions menées. Des outils d’analyse, des études de cas et des ateliers pratiques vous permettront de construire un plan d’action sur mesure, intégrant les enjeux de transformation digitale, de gestion des talents et d’évolution des métiers. À l’issue de la formation, vous serez en mesure de piloter la montée en compétences de vos équipes, d’anticiper les besoins futurs et de positionner votre organisation comme un employeur attractif et innovant.`,
    price: 1500,
    isFree: false,
    niveau: 'stratégique',
    thumbnail: 'https://example.com/thumbnails/strategie-competences.jpg'
  },
  {
    id: 'F006',
    title: 'Initiation à l’approche agile pour formateurs',
    category: { id: 'C04', name: 'Méthodologie agile' },
    tags: ['agilité', 'formateurs', 'méthodes'],
    format: 'enligne',
    type: 'formation',
    description: `Découvrez les principes de l’approche agile et comment les intégrer dans vos pratiques de formation. Cette formation s’adresse aux formateurs, concepteurs pédagogiques et responsables de formation souhaitant renouveler leurs méthodes et gagner en efficacité. Vous explorerez les valeurs et les outils de l’agilité, apprendrez à concevoir des modules de formation itératifs et adaptatifs, et à favoriser l’engagement des apprenants par des méthodes collaboratives. Des ateliers pratiques, des retours d’expérience et des ressources téléchargeables vous permettront de mettre en œuvre rapidement l’agilité dans vos projets de formation. Vous repartirez avec une boîte à outils complète pour concevoir, animer et évaluer des formations agiles, adaptées aux besoins évolutifs de vos publics et aux enjeux de transformation de votre organisation.`,
    price: 0,
    isFree: true,
    niveau: 'transversal',
    thumbnail: 'https://example.com/thumbnails/initiation-agiles.jpg'
  }
]

export const DOT = '• '
export const STRATEGIES = [
  {
    id: 'S001',
    title: 'Développement des compétences',
    description:
      'Nos spécialistes et stratèges vous soutiennent dans tout le cycle des formations et du développement des compétences ou dans une ou des étapes de ce cycle, selon vos besoins.',
    link: '/developpement-des-competences',
    background: 'radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)',
    extraClass: '',
    iconClass: 'shadow-pink-500',
    buttonClass: 'border-slate-200 hover:border-primary/90 border text-slate-700 hover:text-primary',
    options: [
      {
        id: 'S001O1',
        title: 'Diagnostic des compétences à développer',
        description:
          'Dans une démarche adaptée à votre environnement et son évolution, nos spécialistes vous accompagnent pour mesurer l’écart entre les compétences des employés et les attentes de votre organisation. Les besoins en formation rattachés aux dossiers et mandats organisationnels sont identifiés localement, avec votre monde, grâce à des outils appropriés et dans le but de gagner continuellement en performance. '
      },
      {
        id: 'S001O2',
        title: 'Planification et développement de programmes de formation (individuel et d’équipe)',
        description:
          'Nos stratèges vous capacitent dans la priorisation des besoins et la définition des objectifs organisationnels de formation, en fonction de la disponibilité des parties prenantes, des enjeux, des bénéfices et des coûts pour votre organisation. Dans une cohérence stratégique, un programme de formations adapté à votre organisation est développé, avec une planification des sessions, du suivi et du pilotage de ces sessions. Après approbation institutionnelle, notre équipe vous accompagne dans la mise en œuvre de votre programme de formation, au besoin.'
      },
      {
        id: 'S001O3',
        title: 'Élaboration des outils et animation des sessions de formation',
        description:
          'Dans une approche pragmatique et actionnelle, nos spécialistes vous soutiennent dans la transformation ou l’élaboration d’outils appropriés pour développer les compétences associées à un contenu de formation existant, pour des résultats immédiats de formation. Ils sont disponibles pour former autrement votre personnel et animer autrement vos sessions de formation.'
      },
      {
        id: 'S001O4',
        title: 'Services en mesure et évaluation',
        description:
          'Nos spécialistes en mesure et évaluation vous accompagnent dans la mesure et l’évaluation des retombées des sessions et de votre programme de formation. Des indicateurs de performance, élaborés et adaptés à votre réalité, portent non seulement sur l’atteinte des objectifs organisationnels, mais aussi sur la motivation de votre personnel.Nos spécialistes vous offrent par ailleurs des services en mesure et évaluation pour répondre aux besoins organisationnels de développement de compétences en recrutement du personnel, en recherche de subventions ou autre. '
      }
    ]
  },
  {
    id: 'S002',
    title: 'Conduite de changement signifiant',
    description:
      'Dans un environnement complexe et changeant, nos spécialistes et stratèges vous accompagnent dans la co-construction du sens des changements endogènes ou exogènes et dans la réalisation de tout le cycle du processus de votre transformation organisationnelle ou de certaines de ses étapes. ',
    link: '/conduite-de-changement',
    background: 'radial-gradient(125% 125% at 50% 100%, #134e4a 40%, #10b981 100%)',
    extraClass: '',
    iconClass: 'shadow-green-500',
    buttonClass: 'border-slate-200 hover:border-primary2/90 border text-slate-700 hover:text-primary2',
    options: [
      {
        id: 'S002O1',
        title: 'Analyse des besoins et de la pertinence de changement',
        description:
          'Dans une démarche signifiante avec vos parties prenantes, nos stratèges vous accompagnent dans le diagnostic des sphères et des besoins de changement organisationnel, en lien avec vos objectifs organisationnels et votre environnement. Le sens construit ensemble oriente l’identification des nouvelles pratiques, les légitimise et facilite leur implantation, en réduisant les résistances et en encourageant l’engagement du personnel. '
      },
      {
        id: 'S002O2',
        title: 'Définition des objectifs et planification de changement',
        description:
          'En fonction des variables contextuelles, individuelles et relationnelles de votre organisation, nos spécialistes vous soutiennent dans l’identification des facteurs de protection et de risque existants et des options de changement possibles. Les options et la portée de transformation de votre organisation sont analysées, de même que les coûts associés, et des objectifs et indicateurs de leur atteinte sont définis. Selon l’origine interne ou externe de l’exigence de changement, vous êtes soutenu dans l’élaboration agile de l’échéancier de chaque réalisation du projet de changement.'
      },
      {
        id: 'S002O3',
        title: 'Mise en œuvre du changement ',
        description:
          'Nos spécialistes vous accompagnent dans une approche s’appuyant sur l’expérience et la collaboration (agile) et une approche de résolution de problèmes (LEAN). Ils intègrent l’offre de services en développement des compétences pour soutenir vos équipes stratégiques et opérationnelles dans l’implantation, le suivi du plan d’action et le pilotage du changement. Ils vous accompagnent aussi dans l’élaboration d’une stratégie et des outils de communication favorisant la mobilisation, la transparence et l’écoute, pour une mise en œuvre efficace et productive du changement.'
      },
      {
        id: 'S002O4',
        title: 'Évaluation de l’impact et révision du changement',
        description:
          'Nos spécialistes en mesure et évaluation vous accompagnent dans la mesure et l’évaluation de l’impact de chaque réalisation de changement sur votre culture organisationnelle et sur les pratiques de travail de votre personnel. Des indicateurs de performance, élaborés et adaptés à votre réalité, portent non seulement sur l’atteinte des objectifs organisationnels, mais aussi sur la motivation de votre personnel et sur leur accueil positif des changements.Nos spécialistes vous soutiennent dans les boucles de rétroaction entre les anciennes et les nouvelles pratiques, et même dans un nouveau cycle de changement, au besoin.'
      }
    ]
  }
]

export const slugify = (text: string) => {
  return text
    .trim()
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const estimateReadingTime = (htmlContent: string, wordsPerMinute: number = 200): number => {
  // Remove HTML tags using DOMParser
  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlContent, 'text/html')
  const text = doc.body.textContent || ''

  // Count words
  const words = text.trim().split(/\s+/)
  const wordCount = words.length

  // Calculate reading time and round up
  return Math.ceil(wordCount / wordsPerMinute)
}

// export const formatAmount = (number: number, currency: string = 'USD') =>
//   new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(number)

export const formatAmount = (number: number, currency: string = 'CAD', locale: string = 'en-CA') =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    currencyDisplay: 'code' // or 'code' to show CAD
  }).format(number)
