export const platformDesc = "Platform: enhancing performances within communities of practices - 40B1-0_221552 est un outil numérique open source visant à servir de guide pour l’amélioration et l’évaluation des performances collaboratives en communautés de pratique les communautés fabrication numérique. Inspirée d’un modèle d’organisation de travail nommé kolòn, la plateforme numérique incarne une philosophie de travail basée sur l’économie de partage, l’entraide, la collaboration, l’engagement mutuel, l’accompagnement, le mentorat et la réciprocité. Bien plus qu'un simple espace en ligne, cet outil veut être un véritable catalyseur de production et de partage de savoirs autour du Numérique Social ! Le dispositif résultant servira de guide aux professionnel.le.s évoluant dans le secteur de la fabrication numérique pour la conception ou l’exécution de projet collaboratif, de partenariat, ou de formation en entreprise."

export const Profile = {
    user: {
        code: "A2x9B4cR7d",
        username: "jdoe",
        birthDate: "",
        email: "johndoe@gmail.com",
        skills: [],
        degree: "Bachelor of Science",
        occupation: "IT manager"
    },
    certifications: {
        name: "",
        institution: "",
        date: ""
    },
    interests: [],
};

export const communityProfile = [
    { value: 1, label: "Utilisateur / Utilisatrice (Étudiant.e ; Chercheur.e…)", },
    { value: 2, label: "Volontaire / Bénévole", },
    { value: 3, label: "Réparateur.trice", },
    { value: 4, label: "Fab-manager", },
    { value: 5, label: "Community manager", },
    { value: 6, label: "Volontaire / Bénévole", },
    { value: 7, label: "Logisticien.ne", },
    { value: 8, label: "Développeur.euse d'interfaces", },
    { value: 9, label: "Designer/ Programmeur.euse" },
    { value: 10, label: "Concepteur.trice de produits technologiques", },
];

export const communities = [
    { value: 1, label: "Fablabs", },
    { value: 2, label: "Makerspaces", },
    { value: 3, label: "Réparateurs", },
    { value: 4, label: "Hackerspaces", },
    { value: 5, label: "Living labs", },
    { value: 6, label: "Communautés open source hardware", },
    { value: 7, label: "Écoles de hackers et d'ateliers techniques", },
    { value: 8, label: "Bibliothèque makerspaces", },
    { value: 9, label: "Centre de formation professionnelle", },
]

export const competences = [
    { value: 1, label: "Gestion de l'information et des médias numériques", },
    { value: 2, label: "Communication et collaboration numériques", },
    { value: 3, label: "Pensée computationnelle et critique", },
    { value: 4, label: "Insertion et développement professionnel numérique", },
    { value: 5, label: "Innovation et création numériques", },
    { value: 6, label: "Gestion et pilotage de projets collaboratifs", },
    { value: 7, label: "Accompagnement et formation", },
]

export const networks = [
    { name: "Fablabs", description: "Ateliers de fabrication équipés de machines-outils à commande numérique", },
    { name: "Hackerspaces", description: "Atelier collaboratif dédié aux projets utilisant l'électronique, la programmation, l'impression 3D etc.", },
    { name: "Communautés d'artisans", description: "Communauté d’artisan.e.s et d’artistes qui partagent des espaces de travail et des ressources pour la création artistique.", },
    { name: "Informatique", description: "Réseaux d'ateliers citoyens d'accès à la fabrication numérique et à l'accompagnement sur les nouvelles technologies.", },
    { name: "Makerspaces", description: "Atelier collaboratif dédié au prototypage, à la fabrication numérique et à des projets collaboratifs entre particuliers et entrepreneurs.", },
    // { name: "Intelligence Artificielle", description: "La communauté IA explore et promeut les technologies d'intelligence artificielle en abordant des sujets tels que l'apprentissage automatique, la vision par ordinateur, etc...", },
    { name: "Technique et Professionnelle", description: "Centre de formation technique et professionnelle.", },
]

// For production
// export const API_BASE_URL = "https://api.platformht.com/api";
// export const BASE_URL = "https://api.platformht.com";

// For local test
export const API_BASE_URL = "http://localhost:3333/api";
export const BASE_URL = "http://localhost:3333";
