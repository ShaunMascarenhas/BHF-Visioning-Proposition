// Domain data - placeholder content to be replaced with actual workshop content
// Each domain represents one of the four structural forces

export const domains = [
  {
    id: 1,
    title: 'The Evolving Consumer',
    subtitle: 'How expectations, demographics & digital nativity are reshaping financial relationships',
    color: '#00e5ff',
    gradient: 'from-cyan-500 to-blue-600',
    icon: 'Users',
    overview: {
      headline: 'The consumer of tomorrow is already here',
      description:
        'Shifting demographics, rising digital expectations, and a new relationship with money are fundamentally altering how people interact with financial services. The next generation doesn\'t just want different products — they want a different relationship with their finances entirely.',
      keyPoints: [
        'Gen Z and Millennials will control the majority of wealth by 2030',
        'Trust in traditional financial institutions is at historic lows',
        'Consumers expect hyper-personalized, on-demand financial experiences',
        'Financial wellness is becoming inseparable from overall wellbeing',
      ],
    },
    factors: [
      {
        name: 'Demographic Shift',
        description: 'The largest intergenerational wealth transfer in history is underway',
        stat: '$84T',
        statLabel: 'in wealth transferring to younger generations by 2045',
      },
      {
        name: 'Digital Expectations',
        description: 'Consumers benchmark financial services against the best digital experiences',
        stat: '73%',
        statLabel: 'of consumers expect companies to understand their needs',
      },
      {
        name: 'Financial Anxiety',
        description: 'Economic uncertainty is driving new attitudes toward saving, investing, and protection',
        stat: '65%',
        statLabel: 'of Americans report money as a significant source of stress',
      },
      {
        name: 'Values-Driven Decisions',
        description: 'Consumers increasingly choose brands that align with their personal values',
        stat: '82%',
        statLabel: 'of Gen Z consider company values before purchasing',
      },
    ],
    articles: [
      {
        title: 'The Great Wealth Transfer Is Coming — And It Will Change Everything',
        source: 'Financial Times',
        url: '#',
        summary: 'An unprecedented $84 trillion in wealth is set to pass from Baby Boomers to younger generations, reshaping the financial landscape.',
      },
      {
        title: 'Why Gen Z Is Breaking Up With Traditional Banks',
        source: 'Bloomberg',
        url: '#',
        summary: 'Young consumers are flocking to fintech alternatives that offer transparency, simplicity, and alignment with their values.',
      },
      {
        title: 'The Rise of Financial Wellness as a Benefit',
        source: 'Harvard Business Review',
        url: '#',
        summary: 'Employers and financial institutions are recognizing that financial stress impacts productivity, health, and retention.',
      },
    ],
    companies: [
      {
        name: 'Betterment',
        description: 'Automated investing and financial planning that makes wealth-building accessible to everyone',
        category: 'Wealth Management',
      },
      {
        name: 'Greenlight',
        description: 'Financial literacy platform teaching the next generation about money management from childhood',
        category: 'Financial Education',
      },
      {
        name: 'Lemonade',
        description: 'AI-powered insurance that donates unclaimed premiums to causes customers care about',
        category: 'Values-Driven Insurance',
      },
    ],
    exercisePrompt:
      'Given the evolving consumer landscape, what should Brighthouse Financial do to better serve the next generation of customers? Think about products, experiences, communication, and values.',
  },
  {
    id: 2,
    title: 'Technology & AI Transformation',
    subtitle: 'How artificial intelligence, automation & emerging tech are redefining financial services',
    color: '#8b5cf6',
    gradient: 'from-violet-500 to-purple-700',
    icon: 'Cpu',
    overview: {
      headline: 'Intelligence is becoming the infrastructure',
      description:
        'Artificial intelligence, machine learning, and emerging technologies are not just tools — they are becoming the foundation upon which the next era of financial services will be built. From underwriting to customer engagement, every function is being reimagined.',
      keyPoints: [
        'AI is moving from back-office automation to front-line decision making',
        'Hyper-personalization at scale is now technically possible',
        'Embedded finance is blurring industry boundaries',
        'The cost of intelligence is approaching zero',
      ],
    },
    factors: [
      {
        name: 'Generative AI',
        description: 'Large language models are transforming how financial products are designed and delivered',
        stat: '75%',
        statLabel: 'of financial services firms are investing in GenAI initiatives',
      },
      {
        name: 'Embedded Finance',
        description: 'Financial services are being woven into non-financial platforms and experiences',
        stat: '$7.2T',
        statLabel: 'projected embedded finance market by 2030',
      },
      {
        name: 'Predictive Analytics',
        description: 'Advanced modeling can anticipate customer needs before they arise',
        stat: '40%',
        statLabel: 'reduction in claims processing time through AI',
      },
      {
        name: 'Digital Infrastructure',
        description: 'Cloud-native platforms enable rapid innovation and scaling',
        stat: '92%',
        statLabel: 'of financial institutions have a cloud strategy',
      },
    ],
    articles: [
      {
        title: 'How AI Is Revolutionizing Insurance Underwriting',
        source: 'McKinsey & Company',
        url: '#',
        summary: 'AI-powered underwriting is reducing processing times from weeks to minutes while improving accuracy and risk assessment.',
      },
      {
        title: 'The Embedded Finance Revolution',
        source: 'Bain & Company',
        url: '#',
        summary: 'Financial products are being seamlessly integrated into non-financial platforms, creating new distribution channels.',
      },
      {
        title: 'Generative AI in Financial Services: From Hype to Reality',
        source: 'Deloitte',
        url: '#',
        summary: 'Financial services firms are moving past experimentation and deploying GenAI across customer service, compliance, and product development.',
      },
    ],
    companies: [
      {
        name: 'Lemonade',
        description: 'Uses AI to handle claims in seconds, processing 30% of claims without human intervention',
        category: 'AI-Powered Insurance',
      },
      {
        name: 'Wealthfront',
        description: 'Automated financial planning using sophisticated algorithms and tax-optimization strategies',
        category: 'Robo-Advisory',
      },
      {
        name: 'Stripe',
        description: 'Enabling embedded financial services through developer-friendly APIs and infrastructure',
        category: 'Embedded Finance',
      },
    ],
    exercisePrompt:
      'How should Brighthouse Financial leverage technology and AI to transform its products, operations, and customer experience? Consider both near-term wins and long-term bets.',
  },
  {
    id: 3,
    title: 'Regulatory & Trust Landscape',
    subtitle: 'How evolving regulations, data privacy & institutional trust are creating new imperatives',
    color: '#ec4899',
    gradient: 'from-pink-500 to-rose-600',
    icon: 'Shield',
    overview: {
      headline: 'Trust is the new competitive advantage',
      description:
        'In an era of data breaches, misinformation, and regulatory complexity, the ability to earn and maintain trust is becoming the single most important differentiator for financial institutions. Regulation is evolving to protect consumers, and companies that lead on trust will win.',
      keyPoints: [
        'Data privacy regulations are expanding globally and becoming more stringent',
        'Consumer trust in institutions is fragile and hard to rebuild',
        'Transparency and explainability are becoming mandatory, not optional',
        'ESG and fiduciary standards are converging',
      ],
    },
    factors: [
      {
        name: 'Data Privacy',
        description: 'New regulations are giving consumers more control over their personal data',
        stat: '71%',
        statLabel: 'of consumers would stop doing business after a data breach',
      },
      {
        name: 'Regulatory Complexity',
        description: 'Financial regulation is increasing in scope, speed, and sophistication',
        stat: '300+',
        statLabel: 'regulatory changes per day that financial firms must track',
      },
      {
        name: 'Transparency Demands',
        description: 'Consumers and regulators demand clear, understandable financial products',
        stat: '89%',
        statLabel: 'of consumers say transparency is important when choosing a financial provider',
      },
      {
        name: 'Institutional Trust',
        description: 'Trust in financial institutions remains low, creating opportunity for differentiation',
        stat: '33%',
        statLabel: 'of consumers trust their financial services provider "a great deal"',
      },
    ],
    articles: [
      {
        title: 'The Global Push for AI Regulation in Financial Services',
        source: 'Reuters',
        url: '#',
        summary: 'Regulators worldwide are racing to create frameworks for AI use in financial services, with implications for automation and decision-making.',
      },
      {
        title: 'Why Trust Is the New Currency in Financial Services',
        source: 'Edelman Trust Barometer',
        url: '#',
        summary: 'The latest trust data shows that financial services still ranks among the least trusted industries, but leaders are emerging.',
      },
      {
        title: 'Data Privacy Laws Are Reshaping How Insurers Operate',
        source: 'Insurance Journal',
        url: '#',
        summary: 'New privacy regulations are forcing insurers to rethink how they collect, store, and use customer data.',
      },
    ],
    companies: [
      {
        name: 'OneTrust',
        description: 'Privacy management platform helping companies navigate complex regulatory requirements',
        category: 'Privacy & Compliance',
      },
      {
        name: 'Ethic',
        description: 'Investment platform that builds personalized, sustainable portfolios aligned with client values',
        category: 'Ethical Investing',
      },
      {
        name: 'Haven Life',
        description: 'Simplified, transparent life insurance with a fully online application and clear pricing',
        category: 'Transparent Insurance',
      },
    ],
    exercisePrompt:
      'How should Brighthouse Financial build and leverage trust as a competitive advantage? Consider transparency, data ethics, regulatory positioning, and customer communication.',
  },
  {
    id: 4,
    title: 'The Future of Work & Wealth',
    subtitle: 'How changing work patterns, income volatility & wealth inequality are redefining financial needs',
    color: '#f59e0b',
    gradient: 'from-amber-500 to-orange-600',
    icon: 'TrendingUp',
    overview: {
      headline: 'Work is being reinvented — and so must financial protection',
      description:
        'The gig economy, remote work, career fluidity, and rising income volatility are fundamentally changing how people earn, save, and plan for the future. Traditional financial products designed for stable, linear careers are increasingly misaligned with reality.',
      keyPoints: [
        'The gig economy and non-traditional employment are accelerating',
        'Income volatility is increasing across all demographics',
        'Retirement is being redefined as career patterns shift',
        'Wealth inequality is creating divergent financial needs',
      ],
    },
    factors: [
      {
        name: 'Gig Economy Growth',
        description: 'Non-traditional work arrangements are becoming the norm for millions',
        stat: '36%',
        statLabel: 'of the US workforce now participates in the gig economy',
      },
      {
        name: 'Income Volatility',
        description: 'Unpredictable income makes traditional financial planning models obsolete',
        stat: '50%',
        statLabel: 'of Americans experience significant income fluctuation year to year',
      },
      {
        name: 'Retirement Redefined',
        description: 'Linear career paths and traditional retirement timelines are disappearing',
        stat: '55%',
        statLabel: 'of workers expect to work past traditional retirement age',
      },
      {
        name: 'Wealth Gap',
        description: 'Growing inequality creates vastly different financial needs across segments',
        stat: '10x',
        statLabel: 'increase in wealth gap between top and bottom quintiles since 1989',
      },
    ],
    articles: [
      {
        title: 'How the Gig Economy Is Rewriting the Rules of Financial Planning',
        source: 'Wall Street Journal',
        url: '#',
        summary: 'With millions of workers lacking employer-sponsored benefits, new models for insurance and retirement savings are emerging.',
      },
      {
        title: 'The End of Retirement as We Know It',
        source: 'The Economist',
        url: '#',
        summary: 'Longer lifespans, shifting career patterns, and inadequate savings are forcing a rethink of what retirement means.',
      },
      {
        title: 'Income Volatility: The Hidden Financial Crisis',
        source: 'Brookings Institution',
        url: '#',
        summary: 'Research shows that income instability affects financial decision-making, health outcomes, and long-term wealth building.',
      },
    ],
    companies: [
      {
        name: 'Stride Health',
        description: 'Health insurance and benefits platform designed specifically for independent workers',
        category: 'Gig Worker Benefits',
      },
      {
        name: 'Even',
        description: 'Income smoothing and financial planning for workers with variable pay',
        category: 'Income Stability',
      },
      {
        name: 'Guideline',
        description: 'Modern 401(k) platform making retirement savings accessible to small businesses and their employees',
        category: 'Retirement Innovation',
      },
    ],
    exercisePrompt:
      'How should Brighthouse Financial adapt its products and strategy to serve a workforce with increasingly non-traditional employment patterns and volatile income? Consider new products, distribution, and partnerships.',
  },
]

export const workshopInfo = {
  title: 'The Structural Forces Reshaping Money & Human Behavior',
  subtitle: 'A Strategic Visioning Workshop',
  client: 'Brighthouse Financial',
  presentedBy: 'cg42',
  presenters: [
    {
      name: 'Hugh',
      role: 'Presenter',
      image: null, // Placeholder for headshot
    },
    {
      name: 'Evan',
      role: 'Presenter',
      image: null,
    },
    {
      name: 'Shaun',
      role: 'Presenter',
      image: null,
    },
  ],
  agenda: [
    { time: '', label: 'Welcome & Introduction', icon: 'Sparkles' },
    { time: '', label: 'Domain 1: The Evolving Consumer', icon: 'Users' },
    { time: '', label: 'Domain 2: Technology & AI Transformation', icon: 'Cpu' },
    { time: '', label: 'Domain 3: Regulatory & Trust Landscape', icon: 'Shield' },
    { time: '', label: 'Domain 4: The Future of Work & Wealth', icon: 'TrendingUp' },
    { time: '', label: 'Strategic Priorities & Next Steps', icon: 'Target' },
  ],
}
