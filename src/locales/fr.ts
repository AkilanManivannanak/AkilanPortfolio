import { LanguageConfig } from '@models';

export const locale: LanguageConfig = {
  Login: {
    WhoAreYou: 'Qui est-ce ?',
    Logout: 'Se déconnecter',
    Welcome: 'Bienvenue sur Akilanflix!',
    WelcomeDesc: `Je suis Akilan Manivannan, un ingénieur AI/ML spécialisé dans la construction de systèmes intelligents performants et scalables.

    AkilanFlix est mon portfolio — inspiré d'une grande plateforme de streaming — où vous pouvez explorer mes projets AI/ML, mes compétences et mon expérience.
    
    Bonne visite!`,
  },
  Dates: {
    months: '0 mois | {count} mois | {count} mois',
    year: '0 ans | {count} an | {count} ans',
  },
  Nav: {
    Home: 'Accueil',
    Projects: 'Projets',
    Experience: 'Expérience',
    Skills: 'Compétences',
    Certificates: 'Certificats',
    Education: 'Education',
    Achievements: 'Achievements',
    AboutMe: 'About',
    Disconnect: 'Se déconnecter',
    Darkmode: 'Mode sombre',
    AutoDescription:
      "L'application basera le mode clair/sombre en fonction de vos réglages système",
  },
  Home: {
    ContinueWithProfile: `Reprendre avec votre profil`,
    MyList: 'Ma Liste',
    Popular: 'Projets populaires en ce moment',
    Featured: 'Projets en vedette',
    Skills: 'Compétences les plus utilisées',
    All: 'Tous les projets',
    Apps: 'Applications',
    Sites: 'Sites web',
    Libs: 'Librairies',
  },
  Search: {
    Title: 'Recherche',
    Placeholder: 'Projets, technos, genre...',
    NoResults: 'Aucun résultat pour votre recherche:',
  },
  Actions: {
    Play: 'Lecture',
    Continue: 'Reprendre',
    MoreInfo: "Plus d'infos",
    LetsGo: "C'est parti!",
    AddToList: 'Ajouter à ma liste',
    Consult: 'Consulter',
  },
  Skills: {
    Project: 'Aucun projet | {count} projet | {count} projets',
    Title: 'Principales technologies utilisées',
  },
  Experience: {
    CurrentPosition: 'Position actuelle',
    CurrentPositionLight: 'En cours',
    Location: 'Localisation',
    Year: 'Année',
  },
  Projects: {
    Info: `Aucun lien ou accès d'application administrateur ne sera fourni.
    Toutes les vidéos sont issues de fausses données de test et ne correspondent pas à des vraies données client.`,
    SeeMore: 'Voir plus',
    SeeLess: 'Voir moins',
    Recommended: 'Recommandé à 99.9%',
    AddToList: 'Ajouter à ma liste',
    RemoveFromList: 'Supprimer de ma liste',
    Episode: 'Épisodes',
    EpisodesCount: '0 épisodes | 1 épisode | {count} épisodes',
    Director: 'Réalisateur',
    Context: 'Contexte',
    Duration: 'Durée',
    Links: 'Liens',
    Season: 'Saison',
    InfoWarning: `Aucun lien ou accès d'application administrateur ne sera fourni.
    Toutes les vidéos sont issues de fausses données de test et ne correspondent pas à des vraies données client.
  `,
  },
  ProjectDescriptions: {
    Milinus: {
      Slogan: 'Le meilleur du fitness dans votre poche ! Prêt à decoller ?',
    },
    Profeel: {
      Slogan: 'Optimiser et sécuriser les process des professionnels',
    },
    Kaze: {
      Slogan: "Éditeur de mangas et d'animes",
    },
    Bigup: {
      Slogan: 'Demande des dédicaces vidéos à tes célébrités préférées',
    },
    Ahera: {
      Slogan: 'Votre expérience fitness à 360°',
    },
    Totem: {
      Slogan: `Agence de développement web et mobile`,
    },
  },
};

export default locale;
