export const platformDesc = `
 est un outil numérique open source visant à servir de guide pour l’amélioration et l’évaluation des compétences collaboratives en communautés de pratique. Inspirée d’un modèle d’organisation de travail nommé kolòn, qui désigne les stratégies d’intégration et de mode de fonctionnement en réseaux dans les communautés de réparation des technologies numériques en Haïti. Ce mode de travail incarne une philosophie basée sur l’économie de partage, l’entraide, la collaboration, l’engagement mutuel, l’accompagnement, le mentorat et la réciprocité. \n\n

Ainsi, bien plus qu'un simple espace en ligne, cet outil veut être un véritable catalyseur de production et de partage de savoirs autour du Numérique Social! Le dispositif résultant servira de guide aux professionnel.le.s évoluant dans le secteur de la fabrication numérique pour la conception ou l’exécution de projet collaboratif, de partenariat, ou de formation en entreprise.
`;
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
    { value: 3, label: "Repaircommunity", },
    { value: 4, label: "TechHub", },
    { value: 5, label: "Education", },
    { value: 6, label: "Artisans", },
    // { value: 6, label: "Communautés open source hardware", },
    // { value: 7, label: "Écoles de hackers et d'ateliers techniques", },
    // { value: 8, label: "Bibliothèque makerspaces", },
    // { value: 9, label: "Centre de formation professionnelle", },
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
    { 
        name: "Fablabs", 
        description: "Les FabLabs sont des ateliers alignés sur le mouvement du bricolage, du matériel open source, et de la culture du fabricant, permettant aux individus de créer, réparer et fabriquer avec la technologie. Ces- espaces, souvent équipés de matériels contrôlés par ordinateur, offrent la possibilité de reprendre le contrôle sur les objets utilisés au quotidien. Le réseau Fabalab comprend des acteurs-actrices qui évoluent dans ce secteur et désirent apprendre, expérimenter et créer des objets dans ces espaces.", 
    },
    { 
        name: "Makerspaces", 
        description: "Les makerspaces sont des espaces de travail collaboratifs, souvent situés dans des écoles, bibliothèques ou autres installations publiques/privées, dédiés à la création, l'exploration et le partage. Ils peuvent être équipés de divers outils, allant de l'impression 3D aux machines à coudre, mais ce n'est pas leur équipement qui les définit, plutôt la mentalité de création et d'innovation qui les anime. Ces espaces jouent un rôle crucial dans le développement des compétences du 21e siècle, notamment dans les domaines des STEM, en favorisant l'apprentissage pratique, la pensée critique et la confiance en soi. Le réseau de Makerspaces encourage des activités d'entrepreneuriat en servant d'incubateurs pour les jeunes entreprises, tout en ayant des points communs avec d'autres réseaux comme celui des FabLabs et des repairs communities.", 
    },
    { 
        name: "Repair community", 
        description: "Les repairs communities sont des écosystèmes de réparation indépendants des fabricants, où les consommateurs deviennent des producteurs et citoyens engagés. Ces communautés se caractérisent par des pratiques innovantes et créatives dans la maintenance, la fabrication et la réparation des technologies numériques, souvent en contournant les limitations imposées par les fabricants. Les membres du réseau de communauté de réparateurs- trices développent leurs compétences sur le tas et utilisent des stratégies alternatives de désassemblage, réassemblage et transformation. Cet espace, basé sur une idéologie libre et ouverte, favorise la réappropriation des technologies et l'autonomie des utilisateurs face aux systèmes traditionnels.", 
    },
    { 
        name: "TechHub", 
        description: "Le réseau TechHub regroupe des acteurs et actrices évoluant dans le domaine du numérique et de l'intelligence artificielle, unis par leur passion pour les espaces collaboratifs (tiers lieux). Ce réseau favorise l'innovation, la création et la collaboration en offrant des ressources partagées, un soutien mutuel, et un environnement propice au développement de projets technologiques avancés. Elles s'inspirent des principes des FabLabs, makerspaces et repairs communities, en mettant l'accent sur l'expérimentation, la réappropriation technologique, et l'entrepreneuriat collectif.", 
    },
    { 
        name: "Education", 
        description: "Le réseau Education regroupe des  éducateur.e.s et chercheur.e.s  spécialisé.e.s dans la technologie numérique et l'intelligence artificielle, passionné.e.s par l'approche des tiers lieux collaboratifs. Ce réseau réseau encourage l'innovation pédagogique, la recherche collective, et l'expérimentation dans des environnements partagés, où le savoir est co-construit et les outils numériques sont mis au service de l'éducation. Inspiré par les FabLabs, makerspaces et repairs communities, les activités conduites dans ce réseau favorisent l'entraide, la co-création de connaissances, et l'application pratique des technologies dans l'enseignement et la recherche.", 
    },
    { 
        name: "Artisans", 
        description: "Le réseau d'artisans regroupe des professionnels manuels, généralement issus de petites entreprises, qui se rassemblent pour collaborer et développer leurs activités. Ces communautés peuvent inclure des métiers similaires ou diversifiés et offrent de nombreux avantages, tels que l'augmentation du chiffre d'affaires, des tarifs avantageux, et un gain de temps. Elles fonctionnent sur des principes d'entraide et de solidarité, transformant potentiellement les concurrents en collaborateurs. Pour les jeunes ou les nouvelles entreprises, rejoindre une telle communauté peut faciliter la croissance et l'expension.", 
    },
    
]

For production
export const API_BASE_URL = "https://api.platformht.com/api";
export const BASE_URL = "https://api.platformht.com";

// // For local test
// export const API_BASE_URL = "http://localhost:3333/api";
// export const BASE_URL = "http://localhost:3333";
