

export const AVANT_APRES_PROJECTS = [
  {
    id: 1, cat: "Électricité", title: "Tableau électrique complet", loc: "Paris 19e",
    desc: "Remplacement d'un tableau vétuste années 70 par un tableau neuf 3 rangées.",
    bcolor: "#fef2f2", acolor: "#f0fdf4",
    avant: [
      { url:"/album18/1.png", icon: "⚡", label: "Vue générale — tableau ancien années 70" },
      { url: null, icon: "⚠️", label: "Fils non conformes apparents" },
      { url: null, icon: "🔌", label: "Raccordements vétustes" },
      { url: null, icon: "📸", label: "Disjoncteurs hors normes" },
      { url: null, icon: "🏚️", label: "Installation complète à changer" },
      { url: null, icon: "🏚️", label: "Installation complète à changer" },
    ],
    apres: [
      { url: null, icon: "✅", label: "Nouveau tableau installé" },
      { url: null, icon: "⚡", label: "Câblage propre et rangé" },
      { url: null, icon: "🔒", label: "Disjoncteurs différentiels neufs" },
      { url: null, icon: "📋", label: "Attestation de conformité" },
      { url: null, icon: "🏠", label: "Vue d'ensemble finale" },
    ],
  },
  {
    id: 2, cat: "Parquet & Sol", title: "Parquet chêne massif", loc: "Pantin (93)",
    desc: "Dépose de l'ancien carrelage fissuré et pose d'un parquet chêne massif 80m².",
    bcolor: "#fefce8", acolor: "#f0fdf4",
    avant: [
      { url: null, icon: "🏚️", label: "Ancien carrelage fissuré" },
      { url: null, icon: "🪨", label: "Support à préparer" },
      { url: null, icon: "📸", label: "État général du sol" },
      { url: null, icon: "⚠️", label: "Carrelage décollé" },
    ],
    apres: [
      { url: null, icon: "🪵", label: "Parquet chêne posé" },
      { url: null, icon: "✨", label: "Finitions bords et plinthes" },
      { url: null, icon: "🏠", label: "Vue d'ensemble salon" },
      { url: null, icon: "📸", label: "Détail du parquet" },
      { url: null, icon: "🎯", label: "Résultat final — vue complète" },
    ],
  },
  {
    id: 3, cat: "Salle de bain", title: "Salle de bain complète", loc: "Paris 18e",
    desc: "Rénovation complète — douche à l'italienne, meuble vasque, carrelage grand format.",
    bcolor: "#fef2f2", acolor: "#eff6ff",
    avant: [
      { url: "/Album27ruedidot/36.png", icon: "🚿", label: "Salle de bain années 80" },
      { url: "/Album27ruedidot/41.png", icon: "💧", label: "Carrelage décollé et fissuré" },
      { url: "/Album27ruedidot/46.png", icon: "⚠️", label: "Plomberie ancienne" },
      { url: "/Album27ruedidot/45.png", icon: "🏚️", label: "Sanitaires hors d'âge" },
      { url: "/Album27ruedidot/50.png", icon: "📸", label: "Vue d'ensemble avant" },
    ],
    apres: [
      { url: "/Album27ruedidot/53.png", icon: "✨", label: "Douche à l'italienne moderne" },
      { url: "/Album27ruedidot/58.png", icon: "🪥", label: "Meuble vasque design" },

      // { url: "/Album27ruedidot/56.png", icon: "🎨", label: "Carrelage grand format" },
      // { url: "/Album27ruedidot/57.png", icon: "💡", label: "Éclairage LED intégré" },
      // { url: "/Album27ruedidot/58.png", icon: "🏠", label: "Vue d'ensemble finale" },
    ],
  },
  {
    id: 4, cat: "Rénovation", title: "Appartement 65m² complet", loc: "Paris 75005 ",
    desc: "Rénovation totale TCE — électricité, parquet, peinture, cuisine. Prêt à habiter.",
    bcolor: "#fefce8", acolor: "#f0fdf4",
    avant: [
      { url: "/Paris75005/1.png", icon: "🏚️", label: "" },
      { url: "/Paris75005/2.png", icon: "🎨", label: "" },
      { url: "/Paris75005/3.png", icon: "⚡", label: "" },
      { url: "/Paris75005/4.png" , icon: "🪨", label: "" },
      { url: "/Paris75005/5.png", icon: "📸", label: "" },
      { url: "/Paris75005/6.png", icon: "🚿", label: "" },
      { url: "/Paris75005/7.png", icon: "🚿", label: "" },
      { url: "/Paris75005/8.png", icon: "🚿", label: "" },

    ],
    apres: [
      { url: "/Paris75005/14.png", icon: "🏠", label: "Salon entièrement rénové" },
      { url: "/Paris75005/15.png", icon: "🪵", label: "Parquet neuf posé" },
      { url: "/Paris75005/16.png", icon: "🎨", label: "Peinture blanche mate" },
      { url: "/Paris75005/17.png", icon: "⚡", label: "Électricité aux normes" },
      { url: "/Paris75005/18.png", icon: "👨‍🍳", label: "Cuisine rénovée" },
      { url: "/Paris75005/20.png", icon: "✨", label: "Vue d'ensemble finale" },
      { url: "/Paris75005/25.png", icon: "✨", label: "Vue d'ensemble finale" },
      { url: "/Paris75005/23.png", icon: "✨", label: "Vue d'ensemble finale" },
    ],
  },
  {
    id: 5, cat: "Peinture", title: "Peinture salon & chambres", loc: "Aubervilliers (93)",
    desc: "Reprise des enduits, bandes, impression et peinture blanche mate dans tout l'appartement.",
    bcolor: "#f9fafb", acolor: "#f0fdf4",
    avant: [
      { url: "", icon: "🎨", label: "Murs défraîchis" },
      { url: "", icon: "⚠️", label: "Enduits cassés et fissures" },
      { url: "", icon: "🏚️", label: "Peinture ancienne décollée" },
      { url: "", icon: "📸", label: "Chambre avant travaux" },
    ],
    apres: [
      { url:  "", icon: "✨", label: "Enduits lisses refaits" },
      { url: "", icon: "🎨", label: "Peinture blanche mate" },
      { url: "", icon: "🏠", label: "Salon transformé" },
      { url: "", icon: "🛏️", label: "Chambre principale après" },
      { url: "", icon: "🛏️", label: "Chambre principale après" },
    ],
  },
  {
    id: 6, cat: "Rénovation", title: "Studio prêt à louer", loc: "Paris 20e",
    desc: "Rénovation complète d'un studio — sol, peinture, électricité. Livré clé en main.",
    bcolor: "#fef2f2", acolor: "#f0fdf4",
    avant: [
      { url: "/Paris75005/8.png", icon: "🎨", label: "Murs défraîchis" },
      { url: "/Paris75005/9.png", icon: "⚠️", label: "Enduits cassés et fissures" },
      { url: "/Paris75005/5.png", icon: "🏚️", label: "Peinture ancienne décollée" },
      { url: "/Paris75005/13.png", icon: "📸", label: "Chambre avant travaux" },
    ],
    apres: [
      { url:  "/Paris75005/22.png", icon: "✨", label: "Enduits lisses refaits" },
      { url: "/Paris75005/20.png", icon: "🎨", label: "Peinture blanche mate" },
      { url: "/Paris75005/21.png", icon: "🏠", label: "Salon transformé" },
      { url: "/Paris75005/23.png", icon: "🛏️", label: "Chambre principale après" },
    ],
  },
  {
    id: 7, cat: "Électricité", title: "Installation complète appartement", loc: "Saint-Denis (93)",
    desc: "Mise aux normes NF C 15-100 d'un appartement 70m². Câblage neuf, tableau neuf.",
    bcolor: "#fef2f2", acolor: "#f0fdf4",
    avant: [
      { url: null, icon: "⚠️", label: "Fils apparents non conformes" },
      { url: null, icon: "🔌", label: "Raccordements dangereux" },
      { url: null, icon: "📸", label: "Tableau ancien" },
      { url: null, icon: "🏚️", label: "Installation à refaire" },
    ],
    apres: [
      { url: null, icon: "✅", label: "Câblage neuf NF C 15-100" },
      { url: null, icon: "⚡", label: "Tableau neuf installé" },
      { url: null, icon: "🔒", label: "Tout en gaine et protégé" },
      { url: null, icon: "📋", label: "Attestation CONSUEL obtenue" },
    ],
  },
  {
    id: 8, cat: "Parquet & Sol", title: "Carrelage cuisine grand format", loc: "Bobigny (93)",
    desc: "Dépose ancien carrelage, ragréage et pose carrelage grand format 60x60.",
    bcolor: "#fefce8", acolor: "#eff6ff",
    avant: [
      { url:"/album18/7.png", icon: "🏚️", label: "Ancien carrelage dégradé" },
      { url: "/album18/8.png", icon: "⚠️", label: "Joints cassés et décollements" },
      { url: "/album18/9.png", icon: "📸", label: "Vue générale cuisine" },
      { url: "/album18/6.png", icon: "📸", label: "Vue générale cuisine" },

    ],
    apres: [
      { url: "/album18/18.png", icon: "🪵", label: "Carrelage grand format posé" },
      { url: "/album18/19.png", icon: "✨", label: "Joints parfaits" },
      { url: "/album18/23.png", icon: "🏠", label: "Vue d'ensemble cuisine" },
    ],
  },
];

export const CATEGORIES = ["Tous", "Électricité", "Parquet & Sol", "Rénovation", "Salle de bain", "Peinture"];
