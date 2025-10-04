import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        caseStudies: 'Case Studies',
        about: 'About',
        letsTalk: "Let's talk →"
      },
      hero: {
        headline: 'AI growth partner for SMB and Insurance',
        subheadline: 'Turn busywork into $$$ in 14 days with our Swiss precision AI workflows',
        primaryCTA: "Let's talk →",
        secondaryCTA: 'See case studies'
      },
      statement1: 'Human Intelligence where it counts, AI where it works.',
      statement2: 'Audit-safe automation. Results you can measure.',
      footer: {
        tagline: 'Elegant AI agents for claims & underwriting.',
        contact: 'Contact',
        legal: '© 2025 AI Swiss Knife. All rights reserved.'
      },
      modal: {
        title: "Let's talk",
        name: 'Name',
        email: 'Work email',
        company: 'Company',
        message: 'Message',
        submit: 'Submit',
        close: 'Close'
      }
    }
  },
  fr: {
    translation: {
      nav: {
        caseStudies: 'Études de cas',
        about: 'À propos',
        letsTalk: 'Discutons →'
      },
      hero: {
        headline: 'Partenaire IA de croissance pour PME et Assurances',
        subheadline: 'Transformez le travail administratif en $$$ en 14 jours avec nos workflows IA de précision suisse',
        primaryCTA: 'Discutons →',
        secondaryCTA: 'Voir les études de cas'
      },
      statement1: "L'intelligence humaine là où elle compte, l'IA là où elle fonctionne.",
      statement2: 'Automatisation conforme aux audits. Résultats mesurables.',
      footer: {
        tagline: 'Agents IA élégants pour sinistres et souscription.',
        contact: 'Contact',
        legal: '© 2025 AI Swiss Knife. Tous droits réservés.'
      },
      modal: {
        title: 'Discutons',
        name: 'Nom',
        email: 'Email professionnel',
        company: 'Entreprise',
        message: 'Message',
        submit: 'Envoyer',
        close: 'Fermer'
      }
    }
  },
  de: {
    translation: {
      nav: {
        caseStudies: 'Fallstudien',
        about: 'Über uns',
        letsTalk: 'Sprechen wir →'
      },
      hero: {
        headline: 'KI-Wachstumspartner für KMU und Versicherungen',
        subheadline: 'Verwandeln Sie Routinearbeit in $$$ in 14 Tagen mit unseren KI-Workflows in Schweizer Präzision',
        primaryCTA: 'Sprechen wir →',
        secondaryCTA: 'Fallstudien ansehen'
      },
      statement1: 'Menschliche Intelligenz wo sie zählt, KI wo sie funktioniert.',
      statement2: 'Audit-sichere Automatisierung. Messbare Ergebnisse.',
      footer: {
        tagline: 'Elegante KI-Agenten für Schadensfälle und Underwriting.',
        contact: 'Kontakt',
        legal: '© 2025 AI Swiss Knife. Alle Rechte vorbehalten.'
      },
      modal: {
        title: 'Sprechen wir',
        name: 'Name',
        email: 'Geschäftliche E-Mail',
        company: 'Unternehmen',
        message: 'Nachricht',
        submit: 'Absenden',
        close: 'Schließen'
      }
    }
  },
  it: {
    translation: {
      nav: {
        caseStudies: 'Casi di studio',
        about: 'Chi siamo',
        letsTalk: 'Parliamone →'
      },
      hero: {
        headline: 'Partner IA di crescita per PMI e Assicurazioni',
        subheadline: 'Trasforma il lavoro amministrativo in $$$ in 14 giorni con i nostri workflow IA di precisione svizzera',
        primaryCTA: 'Parliamone →',
        secondaryCTA: 'Vedi casi di studio'
      },
      statement1: 'Intelligenza umana dove conta, IA dove funziona.',
      statement2: 'Automazione conforme agli audit. Risultati misurabili.',
      footer: {
        tagline: 'Agenti IA eleganti per sinistri e sottoscrizione.',
        contact: 'Contatto',
        legal: '© 2025 AI Swiss Knife. Tutti i diritti riservati.'
      },
      modal: {
        title: 'Parliamone',
        name: 'Nome',
        email: 'Email aziendale',
        company: 'Azienda',
        message: 'Messaggio',
        submit: 'Invia',
        close: 'Chiudi'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
