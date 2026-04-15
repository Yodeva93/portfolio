type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Amit Singh — Portfolio",
    fullName: "Amit Singh",
    email: "amitthakurwoods@gmail.com",
  },
  hero: {
    name: "Amit Singh",
    p: ["Certified Shopify Expert &", "Shopify Team Lead"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a certified Shopify Developer and Team Lead specializing in custom theme 
      development and app implementation. From building pixel-perfect themes using Liquid 
      and Dawn to developing robust Shopify apps with seamless store integrations, I lead 
      teams to deliver polished, high-performing eCommerce solutions. I'm also passionate 
      about mentoring and training new developers, helping them grow their Shopify skills 
      and contribute confidently to production projects. Let's bring your Shopify vision to life.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What my clients & teammates say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `These projects reflect my expertise across custom Shopify theme development, 
      app builds, and full store launches. Each one highlights my ability to lead teams, 
      solve complex merchant challenges, and deliver polished eCommerce experiences 
      that perform at scale.`,
    },
  },
};
