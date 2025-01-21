export default {
  locales: {
    fr: "Français",
    en: "Anglais",
    de: "Allemand",
  },
  themes: {
    system: "Système",
    light: "Clair",
    dark: "Sombre",
  },
  roles: {
    coordinator: "Coordinateur",
    facilitator: "Formateur",
    coach: "Coach",
  },
  navigation: {
    links: {
      program: "Parcours",
      actions: "Actions",
      people: "Participants",
      success: "Succès",
    },
    user: {
      profile: "Profil",
      settings: "Paramètres",
      help: "Obtenir de l'aide",
      about: "À propos",
      changeRole: "Changer de rôle",
      logout: "Déconnexion",
    },
  },
  settings: {
    title: "Paramètres",
    description: "Configurez votre compte.",
    sections: {
      interface: "Interface",
      notifications: "Notifications",
    },
    language: {
      title: "Langue",
      description: "Sélectionnez la langue dans laquelle vous souhaitez que votre interface s'affiche à l'avenir.",
    },
    appearance: {
      title: "Apparence",
      description: "Sélectionnez le thème que vous souhaitez utiliser pour votre interface.",
    },
    programNotifications: {
      title: "Notifications du programme",
      description: "Sélectionnez comment vous souhaitez recevoir les mises à jour de votre programme. Désactiver les notifications par email pour le programme n’affectera pas la réception d’autres alertes système importantes par email. Ajustez vos paramètres pour rester informé de la manière qui vous convient le mieux !",
      options: {
        inApp: "Uniquement dans l'application",
        appAndPush: "Navigateur & Application mobile",
        appAndEmail: "Navigateur & E-Mail",
        everywhere: "Toutes les plateformes",
        automatic: "Automatique",
      },
    },
    activityReportNotifications: {
      title: "Résumé d'activité",
      description: "Suivez vos progrès sans effort ! Déterminez la fréquence de vos résumés d’activité. Ces mises à jour vous seront envoyées par email en toute simplicité.",
      options: {
        no: "Pas de résumé",
        daily: "Quotidien",
        weekly: "Hebdomadaire",
        monthly: "Mensuel",
      },
    },
  },
  // pages
  course: {
    tab: "Parcours · {program}",
    noContent: "Aucun contenu à afficher...",
    noActivity: "Aucune activité sélectionnée...",
  },
  people: {
    tab: "Participants · {program}",
    search: "Rechercher un participant...",
    you: "Vous",
    count: {
      results: "{value} résultat(s)",
      participants: "{value} participant(s)",
    },
    sections: {
      mentor: {
        label: "Votre mentor",
        invite: "Inviter votre mentor",
      },
      facilitators: {
        label: "Vos facilitateurs",
        noOne: "Aucun facilitateur...",
      },
    },
  },
  success: {
    tab: "Succès · {program}",
  },
  help: {
    tab: "Learn · Obtenir de l'aide",
  },
};
