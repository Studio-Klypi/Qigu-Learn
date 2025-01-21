export default {
  // temp
  responsiveNotAvailable: {
    title: "In Entwicklung",
    description: "Das responsive Design ist noch nicht verfügbar. Das Team arbeitet derzeit daran, es so schnell wie möglich bereitzustellen.",
  },
  // temp
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
    facilitator: "Moderator",
    coach: "Trainer",
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
      about: "Über",
      changeRole: "Rolle ändern",
      logout: "Abmelden",
    },
  },
  settings: {
    title: "Einstellungen",
    description: "Konfigurieren Sie Ihr Konto.",
    sections: {
      interface: "Benutzeroberfläche",
      notifications: "Benachrichtigungen",
    },
    language: {
      title: "Sprache",
      description: "Wählen Sie die Sprache, in der Ihre Benutzeroberfläche künftig angezeigt werden soll.",
    },
    appearance: {
      title: "Erscheinungsbild",
      description: "Wählen Sie das Thema, das Sie für Ihre Benutzeroberfläche verwenden möchten.",
    },
    programNotifications: {
      title: "Programm-Benachrichtigungen",
      description: "Wählen Sie, wie Sie Updates zu Ihrem Programm erhalten möchten. Das Deaktivieren von E-Mail-Benachrichtigungen für das Programm beeinträchtigt nicht den Empfang anderer wichtiger Systembenachrichtigungen per E-Mail. Passen Sie Ihre Einstellungen an, um auf die für Sie passende Weise informiert zu bleiben!",
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
      description: "Verfolgen Sie Ihren Fortschritt mühelos! Legen Sie die Häufigkeit Ihrer Aktivitätszusammenfassungen fest. Diese Updates werden Ihnen bequem per E-Mail zugesandt.",
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
    noContent: "Kein Inhalt zum Anzeigen...",
    noActivity: "Keine Aktivität ausgewählt...",
  },
  people: {
    tab: "Teilnehmer · {program}",
    search: "Nach einem Teilnehmer suchen...",
    you: "Sie",
    count: {
      results: "{value} Ergebnis(se)",
      participants: "{value} Teilnehmer",
    },
    sections: {
      mentor: {
        label: "Ihr Mentor",
        invite: "Ihren Mentor einladen",
      },
      facilitators: {
        label: "Ihre Moderatoren",
        noOne: "Kein Moderator...",
      },
    },
  },
  success: {
    tab: "Erfolg · {program}",
    score: {
      title: "Punktzahlen",
      noScores: "Keine Variablen...",
    },
    success: {
      title: "Erfolge",
      unnamed: "Unbenannt",
      badge: {
        new: "Neu",
        test: "Test",
      },
    },
  },
  help: {
    tab: "Lernen · Hilfe erhalten",
    ticket: {
      create: "Neues Ticket",
      search: "Nach einem Ticket suchen...",
      noOpened: "Derzeit keine offenen Tickets...",
      closed: "Geschlossen",
      category: {
        logistic: "Logistik",
        usage: "Nutzung",
        data: "Datenabruf/-löschung",
        other: "Andere Anfrage",
      },
    },
    fields: {
      program: "Programm",
      title: {
        label: "Titel",
        placeholder: "Titel der Beschwerde",
      },
      description: {
        label: "Beschreibung",
        placeholder: "Ihre Nachricht...",
      },
      category: "Kategorie",
    },
    config: {
      hideClosed: "Geschlossene Tickets ausblenden",
      explanation: "Wenn Sie eine Anfrage haben, erstellen Sie bitte ein Ticket. Ihr Ticket wird an die Person in unserem Team weitergeleitet, die Ihnen am besten helfen kann.",
      information: "Stellen Sie sicher, dass Sie so viele Informationen wie möglich bereitstellen.",
      timing: "Wir antworten normalerweise innerhalb von 24 Stunden. Sie erhalten eine Benachrichtigung, sobald wir auf Ihre Anfrage geantwortet haben.",
    },
    createAction: {
      idle: "Ticket öffnen",
      loading: "Ticket wird geöffnet...",
    },
    reply: "Antworten...",
  },
};
