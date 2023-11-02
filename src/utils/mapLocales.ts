export const mapLocale = (locale: string | null) => {
    switch (locale) {
      case 'en':
        return 'en-GB';
      case 'nl':
        return 'nl-NL'
      default:
        return 'default';
    }
  };