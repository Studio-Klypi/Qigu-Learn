export default {
  // temp
  responsiveNotAvailable: {
    title: "In Development",
    description: "Responsive design is not yet available. The team is currently working on it to deliver it as soon as possible.",
  },
  // temp
  locales: {
    fr: "French",
    en: "English",
    de: "German",
  },
  themes: {
    system: "System",
    light: "Light",
    dark: "Dark",
  },
  roles: {
    coordinator: "Coordinator",
    facilitator: "Facilitator",
    coach: "Coach",
  },
  navigation: {
    links: {
      program: "Program",
      actions: "Actions",
      people: "Participants",
      success: "Success",
    },
    user: {
      profile: "Profile",
      settings: "Settings",
      help: "Get Help",
      about: "About",
      changeRole: "Change Role",
      logout: "Logout",
    },
  },
  settings: {
    title: "Settings",
    description: "Configure your account.",
    sections: {
      interface: "Interface",
      notifications: "Notifications",
    },
    language: {
      title: "Language",
      description: "Select the language you want your interface to display in the future.",
    },
    appearance: {
      title: "Appearance",
      description: "Select the theme you want to use for your interface.",
    },
    programNotifications: {
      title: "Program Notifications",
      description: "Select how you want to receive updates about your program. Disabling email notifications for the program will not affect the receipt of other important system alerts via email. Adjust your settings to stay informed in the way that suits you best!",
      options: {
        inApp: "In App Only",
        appAndPush: "Browser & Mobile App",
        appAndEmail: "Browser & Email",
        everywhere: "All Platforms",
        automatic: "Automatic",
      },
    },
    activityReportNotifications: {
      title: "Activity Summary",
      description: "Track your progress effortlessly! Determine the frequency of your activity summaries. These updates will be sent to you via email seamlessly.",
      options: {
        no: "No Summary",
        daily: "Daily",
        weekly: "Weekly",
        monthly: "Monthly",
      },
    },
  },
  // pages
  course: {
    tab: "Program · {program}",
    noContent: "No content to display...",
    noActivity: "No activity selected...",
  },
  people: {
    tab: "Participants · {program}",
    search: "Search for a participant...",
    you: "You",
    count: {
      results: "{value} result(s)",
      participants: "{value} participant(s)",
    },
    sections: {
      mentor: {
        label: "Your Mentor",
        invite: "Invite your mentor",
      },
      facilitators: {
        label: "Your Facilitators",
        noOne: "No facilitator...",
      },
    },
  },
  success: {
    tab: "Success · {program}",
    score: {
      title: "Scores",
      noScores: "No variables...",
    },
    success: {
      title: "Success",
      unnamed: "Unnamed",
      badge: {
        new: "New",
        test: "Test",
      },
    },
  },
  help: {
    tab: "Learn · Get Help",
    ticket: {
      create: "New Ticket",
      search: "Search for a ticket...",
      noOpened: "No open tickets for now...",
      closed: "Closed",
      category: {
        logistic: "Logistics",
        usage: "Usage",
        data: "Data Retrieval/Deletion",
        other: "Other Request",
      },
    },
    fields: {
      program: "Program",
      title: {
        label: "Title",
        placeholder: "Title of the claim",
      },
      description: {
        label: "Description",
        placeholder: "Your message...",
      },
      category: "Category",
    },
    config: {
      hideClosed: "Hide Closed Tickets",
      explanation: "If you have a query, please create a ticket. Your ticket will be addressed to the person on our team best suited to help you.",
      information: "Make sure to provide as much information as possible.",
      timing: "We typically respond within 24 hours. You will receive a notification when we have replied to your request.",
    },
    createAction: {
      idle: "Open Ticket",
      loading: "Opening ticket...",
    },
    reply: "Reply...",
  },
};
