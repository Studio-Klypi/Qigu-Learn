export default {
  locales: {
    fr: "Französisch",
    en: "Englisch",
    de: "Deutsch",
  },
  themes: {
    system: "System",
    light: "Hell",
    dark: "Dunkel",
  },
  roles: {
    coordinator: "Koordinator",
    facilitator: "Trainer",
    coach: "Coach",
  },
  navigation: {
    links: {
      program: "Programm",
      actions: "Aktionen",
      people: "Teilnehmer",
      success: "Erfolg",
    },
    user: {
      profile: "Profil",
      settings: "Einstellungen",
      help: "Hilfe erhalten",
      about: "Über uns",
      changeRole: "Rolle ändern",
      logout: "Abmelden",
    },
  },
  settings: {
    title: "Einstellungen",
    description: "Konfigurieren Sie Ihr Konto.",
    sections: {
      interface: "Schnittstelle",
      notifications: "Benachrichtigungen",
    },
    language: {
      title: "Sprache",
      description: "Wählen Sie die Sprache aus, in der Ihre Benutzeroberfläche zukünftig angezeigt werden soll.",
    },
    appearance: {
      title: "Aussehen",
      description: "Wählen Sie das gewünschte Thema für Ihre Benutzeroberfläche.",
    },
    programNotifications: {
      title: "Programmbenachrichtigungen",
      description: "Wählen Sie aus, wie Sie Updates für Ihr Programm erhalten möchten. Das Deaktivieren von Programmemails hat keine Auswirkungen auf andere wichtige Systemwarnungen per E-Mail. Passen Sie Ihre Einstellungen an, um auf die für Sie beste Weise informiert zu bleiben!",
      options: {
        inApp: "Nur in der App",
        appAndPush: "Browser & Mobile App",
        appAndEmail: "Browser & E-Mail",
        everywhere: "Alle Plattformen",
        automatic: "Automatisch",
      },
    },
    activityReportNotifications: {
      title: "Aktivitätszusammenfassung",
      description: "Verfolgen Sie Ihren Fortschritt mühelos! Entscheiden Sie, wie oft Sie Aktivitätszusammenfassungen erhalten möchten. Diese Updates werden Ihnen bequem per E-Mail zugesandt.",
      options: {
        no: "Keine Zusammenfassung",
        daily: "Täglich",
        weekly: "Wöchentlich",
        monthly: "Monatlich",
      },
    },
  },
  // pages
  course: {
    tab: "Programm · {program}",
  },
  people: {
    tab: "Teilnehmer · {program}",
  },
  success: {
    tab: "Erfolg · {program}",
  },
  help: {
    tab: "Learn · Hilfe erhalten",
  },
};
