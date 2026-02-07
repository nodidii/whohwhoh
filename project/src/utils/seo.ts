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
    title: 'AI Automation Agency | Coreflow Automation',
    description: 'AI automation agency designing and deploying custom automation systems for sales, support, and operations. We build business automation systems that replace manual workflows with scalable infrastructure.',
    keywords: 'AI automation agency, business automation systems, AI automation for sales, AI automation for support, operational automation',
    canonical: 'https://coreflowautomation.net/',
  },
  solutions: {
    title: 'AI Automation Solutions | Custom Business Process Automation',
    description: 'Custom AI automation systems for sales, customer support, and internal operations. Each solution replaces specific manual workflows with structured AI automation.',
    keywords: 'AI automation solutions, business process automation, AI customer support, AI sales automation, lead qualification automation',
    canonical: 'https://coreflowautomation.net/solutions',
  },
  howItWorks: {
    title: 'How AI Automation Systems Are Built | Coreflow Process',
    description: 'Standardized AI automation delivery process: audit and workflow mapping, custom system design, deployment and optimization. Focus on stability and operational infrastructure.',
    keywords: 'AI automation process, business automation methodology, system design, automation deployment',
    canonical: 'https://coreflowautomation.net/how-it-works',
  },
  examples: {
    title: 'AI Automation Examples | Real-World Business Process Automation',
    description: 'Live example AI automation systems demonstrating real-world business process automation for sales, customer support, and operations.',
    keywords: 'automation examples, AI system examples, business process automation examples, voice automation, chat automation',
    canonical: 'https://coreflowautomation.net/examples',
  },
  team: {
    title: 'Team | AI Automation Agency | Coreflow',
    description: 'The team that designs and implements production-grade AI automation systems for businesses.',
    keywords: 'AI automation team, automation experts, system designers',
    canonical: 'https://coreflowautomation.net/team',
  },
  growthFramework: {
    title: 'Growth Framework | AI Automation Strategy for Businesses',
    description: 'Business automation strategy for designing scalable AI automation systems. ROI Track and Custom System Track engagement models.',
    keywords: 'AI automation strategy, business automation framework, automation engagement models, ROI automation',
    canonical: 'https://coreflowautomation.net/growth-framework',
  },
  contact: {
    title: 'Request an Automation Audit | Coreflow Automation',
    description: 'Schedule an AI automation audit to assess your workflows, identify bottlenecks, and define automation opportunities.',
    keywords: 'automation audit, business automation assessment, automation consultation',
    canonical: 'https://coreflowautomation.net/contact',
  },
};
