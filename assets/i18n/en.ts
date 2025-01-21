export default {
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
    facilitator: "Trainer",
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
      description: "Select the language in which you want your interface to be displayed in the future.",
    },
    appearance: {
      title: "Appearance",
      description: "Select the theme you want to use for your interface.",
    },
    programNotifications: {
      title: "Program Notifications",
      description: "Select how you want to receive updates for your program. Disabling program email notifications will not affect receiving other important system alerts by email. Adjust your settings to stay informed in the way that works best for you!",
      options: {
        inApp: "In-app only",
        appAndPush: "Browser & Mobile App",
        appAndEmail: "Browser & Email",
        everywhere: "All Platforms",
        automatic: "Automatic",
      },
    },
    activityReportNotifications: {
      title: "Activity Summary",
      description: "Track your progress effortlessly! Decide how often you want activity summaries. These updates will be sent to you via email for your convenience.",
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
    tab: "Course · {program}",
  },
  people: {
    tab: "Participants · {program}",
  },
  success: {
    tab: "Success · {program}",
  },
  help: {
    tab: "Learn · Getting Help",
  },
};
