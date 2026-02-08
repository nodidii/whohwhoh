export interface PageMeta {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
  schema?: object;
}

export const setPageMeta = (meta: PageMeta) => {
  // Set title
  document.title = meta.title;

  // Update or create meta tags
  const updateMeta = (name: string, content: string, property?: boolean) => {
    let element = property
      ? document.querySelector(`meta[property="${name}"]`)
      : document.querySelector(`meta[name="${name}"]`);

    if (!element) {
      element = document.createElement('meta');
      if (property) {
        element.setAttribute('property', name);
      } else {
        element.setAttribute('name', name);
      }
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  updateMeta('title', meta.title);
  updateMeta('description', meta.description);
  if (meta.keywords) {
    updateMeta('keywords', meta.keywords);
  }

  // OpenGraph
  updateMeta('og:title', meta.ogTitle || meta.title, true);
  updateMeta('og:description', meta.ogDescription || meta.description, true);
  if (meta.ogImage) {
    updateMeta('og:image', meta.ogImage, true);
  }

  // Canonical
  if (meta.canonical) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', meta.canonical);
  }

  // Schema markup
  if (meta.schema) {
    let schemaScript = document.querySelector('script[data-seo-schema]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('data-seo-schema', 'true');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(meta.schema);
  }
};

// Page-specific SEO configuration
export const seoConfig = {
  home: {
    title: 'AI Automation Agency | 14-Day AI System Deployments | Coreflow',
    description: 'AI automation agency that designs and deploys temporary AI systems removing operational bottlenecks. 14-day deployments with logging and measurement. No long-term commitment.',
    keywords: 'AI automation agency, AI automation systems, business automation, AI for sales, AI for customer support, automation deployment, 14-day pilot',
    canonical: 'https://coreflowautomation.net/',
  },
  solutions: {
    title: 'AI Automation Systems | Outcome-Specific Deployments',
    description: 'Outcome-specific AI automation systems: inbound call handling, appointment booking, lead qualification, customer support, internal operations. Each system temporarily automates one operational function.',
    keywords: 'AI automation systems, inbound call automation, lead qualification automation, appointment booking automation, customer support automation, internal operations automation',
    canonical: 'https://coreflowautomation.net/solutions',
  },
  howItWorks: {
    title: '14-Day AI Deployment Process | Controlled Automation Model',
    description: 'How 14-day AI deployments work: define outcome, deploy live, review results. Designed to prove operational value quickly with zero long-term risk.',
    keywords: '14-day AI deployment, AI automation deployment process, outcome-driven automation, AI pilot program, temporary AI automation',
    canonical: 'https://coreflowautomation.net/how-it-works',
  },
  examples: {
    title: 'Live AI Automation Examples | Real-World Systems',
    description: 'Real operational AI automation deployments showing observed outcomes. Voice call handling systems, chat automation, and lead qualification examples with operational metrics.',
    keywords: 'AI automation examples, voice automation examples, chat automation, lead qualification automation example, AI system examples, automation case studies',
    canonical: 'https://coreflowautomation.net/examples',
  },
  team: {
    title: 'AI Automation Team | Coreflow Experts',
    description: 'Team of specialists designing and operating production-grade AI automation systems inside live businesses. Technical credibility in system design and deployment.',
    keywords: 'AI automation experts, automation team, system designers, AI deployment specialists',
    canonical: 'https://coreflowautomation.net/team',
  },
  growthFramework: {
    title: 'Growth Framework | AI Automation Methodology',
    description: 'AI automation methodology preventing technical debt. Framework for system ownership, clear automation boundaries, observable outcomes, and scalable component design.',
    keywords: 'AI automation framework, automation methodology, system architecture, automation strategy',
    canonical: 'https://coreflowautomation.net/growth-framework',
  },
  contact: {
    title: 'Request 14-Day AI Deployment | Coreflow Automation',
    description: 'Request a 14-day AI automation deployment. Test live AI systems inside your operation with zero long-term commitment. Outcome review, scope definition, deployment scheduling.',
    keywords: '14-day AI deployment request, AI automation pilot, request automation demo, AI system testing',
    canonical: 'https://coreflowautomation.net/contact',
  },
};
