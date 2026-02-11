// Domain data — real workshop content for Brighthouse Financial
// "The Structural Forces Reshaping Money & Human Behavior"

export const domains = [
  {
    id: 1,
    title: 'The Human Side',
    subtitle:
      'The financial lives people are planning for are longer, more complex, and more anxiety-inducing than ever before',
    color: '#00e5ff',
    gradient: 'from-cyan-500 to-blue-600',
    icon: 'Heart',
    overview: {
      headline:
        'The people making financial decisions are changing — and so must the industry',
      description:
        'The financial lives people are planning for are longer, more complex, and more anxiety-inducing than ever before. At the same time, the people making these decisions are changing; women are increasingly controlling more wealth and yet aren\'t represented in products, content, or people. This is all taking place amidst the backdrop of a massive generational transfer. Within this, consumers are faced with an overwhelming number of financial options and decisions which paralyze them.',
      keyPoints: [
        'Trillions of dollars are changing hands, and heirs have different expectations, advisors, and brand loyalty',
        'Retirement is turning into a 30+ year phase, turning the fear of outliving savings into a central financial anxiety',
        'Women are controlling more household wealth, yet products, language, and people aren\'t calibrated for them',
        'More choices, more complexity, more noise is paralyzing consumers, not empowering them',
      ],
    },
    factors: [
      {
        name: 'The Intergenerational Wealth Transfer',
        description:
          'Trillions of dollars are changing hands, and their heirs have different expectations, advisors, and brand loyalty.',
        stat: '$1.4T',
        statLabel:
          'per year projected for Gen X inheritance over the next decade; Millennials will receive $45.6T over 25 years',
      },
      {
        name: 'Increasing Longevity & Financial Anxiety',
        description:
          'Retirement is turning into a 30+ year phase, turning the fear of outliving savings into a central financial anxiety.',
        stat: '6 in 10',
        statLabel:
          'Gen X consumers are concerned about outliving their savings',
      },
      {
        name: 'Women as the Ascendant Financial Decision-Maker',
        description:
          'Women are controlling more and more household wealth, yet products, language, and people aren\'t calibrated for women.',
        stat: '$34T',
        statLabel:
          'in assets expected to be controlled by women by 2030, up from $7.3T a decade ago',
      },
      {
        name: 'Cognitive Overload & Disengagement',
        description:
          'More choices, more complexity, more noise, more, more, more is paralyzing consumers, not empowering them.',
        stat: '84%',
        statLabel:
          'of women say they lack confidence in managing an inheritance or financial windfall, vs. 73% of men',
      },
    ],
    articles: [
      {
        title: 'The Great Wealth Transfer Will Reshape Financial Advice Forever',
        source: 'Financial Times',
        url: '#',
        summary:
          'Gen X is projected to inherit nearly $1.4 trillion per year over the next decade, with Millennials set to receive $45.6 trillion over 25 years — and their expectations differ radically from their parents\'.',
      },
      {
        title: 'Women Will Control $34 Trillion by 2030 — Is the Industry Ready?',
        source: 'Bloomberg',
        url: '#',
        summary:
          'The massive shift of wealth toward women is exposing how poorly calibrated financial products, language, and advisory relationships are for female clients.',
      },
      {
        title: 'The Paradox of Choice in Financial Services',
        source: 'Harvard Business Review',
        url: '#',
        summary:
          'An overwhelming number of financial options and decisions is paralyzing consumers rather than empowering them, with confidence gaps widening across demographics.',
      },
    ],
    companies: [
      {
        name: 'Ellevest',
        description:
          'Investment platform built specifically for women, addressing the gender wealth gap through tailored financial planning',
        category: 'Women-Focused Finance',
      },
      {
        name: 'Greenlight',
        description:
          'Financial literacy platform teaching the next generation about money management, targeting the inheriting cohort early',
        category: 'Financial Education',
      },
      {
        name: 'Facet',
        description:
          'Flat-fee financial planning removing complexity and aligning incentives, combating decision paralysis',
        category: 'Simplified Planning',
      },
    ],
    exercisePrompt:
      'Given the shifts in who is making financial decisions (generational transfer, women controlling more wealth) and the growing anxiety and cognitive overload consumers face — what should Brighthouse Financial do to respond? Think about products, experiences, communication, language, and representation.',
  },
  {
    id: 2,
    title: 'The Technological Side',
    subtitle:
      'Technology is no longer just a cost-reduction function — it is the primary interface through which consumers experience financial services',
    color: '#8b5cf6',
    gradient: 'from-violet-500 to-purple-700',
    icon: 'Cpu',
    overview: {
      headline:
        'The question isn\'t whether technology replaces relationships — it\'s how it augments them',
      description:
        'Technology is no longer just a cost-reduction function; it is the primary interface through which consumers experience financial services. As we move forward, AI, real-time expectations, and digital distribution are converging to reshape how financial advice is delivered and received. Yet financial services is a relationship and trust-based industry. So, the question isn\'t whether technology replaces relationships, it\'s how it augments them.',
      keyPoints: [
        'AI is shifting from a cost-reduction tool to the primary interface for advice, service, and personalization',
        'The advisor channel is shrinking; the future belongs to hybrid models augmenting human relationships with digital reach',
        'Consumers expect immediacy and transparency from all their service providers',
        'Data stewardship is shifting from a compliance burden to a competitive advantage',
      ],
    },
    factors: [
      {
        name: 'AI: From Back-Office to Front-Office',
        description:
          'AI will shift from a cost reduction tool to the primary interface through which consumers experience advice, service, and personalization.',
        stat: '2.5B',
        statLabel:
          'interactions handled by Bank of America\'s AI assistant "Erica" since launch; 20M+ clients use it regularly',
      },
      {
        name: 'Digital Distribution Reshaping Advisors',
        description:
          'The advisor channel is shrinking; the future belongs to hybrid models that augment human relationship with digital reach and AI-enabled personalization.',
        stat: '38%',
        statLabel:
          'of the financial advisor workforce expected to retire in the next decade — 110,000+ advisors managing ~42% of industry assets',
      },
      {
        name: 'Real-Time Expectations',
        description:
          'Consumers have been trained to expect immediacy and transparency from all their service providers.',
        stat: '64%',
        statLabel:
          'of consumers prefer personalized experiences, yet only 26% trust organizations to handle their data responsibly',
      },
      {
        name: 'Privacy, Trust & Identity as Infrastructure',
        description:
          'The ability to personalize without eroding trust turns data stewardship from a compliance burden to a competitive advantage.',
        stat: '61%',
        statLabel:
          'of consumers now prioritize trustworthy information above all other factors; trust is the primary driver of loyalty',
      },
    ],
    articles: [
      {
        title: 'How Bank of America\'s "Erica" Became the Blueprint for AI in Finance',
        source: 'American Banker',
        url: '#',
        summary:
          'With over 2.5 billion interactions and 20 million regular users, BofA\'s AI assistant is proving that AI can be the primary interface for financial services without destroying trust.',
      },
      {
        title: 'The Advisor Workforce Crisis: 110,000 Retirements and Counting',
        source: 'InvestmentNews',
        url: '#',
        summary:
          '38% of financial advisors are expected to retire in the next decade, managing 42% of total industry assets — forcing the industry toward hybrid human-digital models.',
      },
      {
        title: 'The Personalization Paradox: Consumers Want It but Don\'t Trust It',
        source: 'McKinsey & Company',
        url: '#',
        summary:
          '64% of consumers prefer personalized experiences, yet only 26% trust organizations to handle their personal data responsibly — creating a critical tension for financial services.',
      },
    ],
    companies: [
      {
        name: 'Lemonade',
        description:
          'AI-powered insurance processing 30% of claims without human intervention, demonstrating AI as a front-office interface',
        category: 'AI-First Insurance',
      },
      {
        name: 'Holistiplan',
        description:
          'AI-powered tax planning tool for advisors, augmenting human expertise with instant analysis rather than replacing it',
        category: 'Advisor Augmentation',
      },
      {
        name: 'Hearsay Systems',
        description:
          'Digital engagement platform enabling advisors to scale personalized relationships across digital channels',
        category: 'Digital Distribution',
      },
    ],
    exercisePrompt:
      'Given that AI is moving to the front office, the advisor workforce is shrinking, and consumers demand both personalization and trust — what should Brighthouse Financial do to respond? Think about how technology can augment (not replace) relationships, new distribution models, and data strategy.',
  },
  {
    id: 3,
    title: 'The Market Side',
    subtitle:
      'The economic environment has shifted from predictable to volatile — reshaping both what insurers can offer and what consumers demand',
    color: '#ec4899',
    gradient: 'from-pink-500 to-rose-600',
    icon: 'TrendingUp',
    overview: {
      headline:
        'Volatility is the new normal — and it cuts both ways',
      description:
        'The economic environment has shifted from predictable to volatile. Interest rates, geopolitical tensions, and fiscal uncertainty are reshaping both what insurers can offer and what consumers demand. Volatility is increasing appetite for guarantees and protections, but it\'s also making those promises harder to price and back.',
      keyPoints: [
        'The era of predictable rate trajectories and stable geopolitics is over',
        'Political, economic and geopolitical anxiety is increasing the psychological premium on guarantees',
        'The level and direction of interest rates directly determines what products are viable',
        'The structural shift toward private credit and illiquid assets creates new opportunities and new risks',
      ],
    },
    factors: [
      {
        name: 'Permanent Macro Volatility',
        description:
          'The era of predictable rate trajectories and stable geopolitics is over; both insurers and consumers must plan for a wider range of outcomes.',
        stat: '6 in 10',
        statLabel:
          'consumers said they were very concerned about the economy by end of Q1 2025 — a 14-point increase from January',
      },
      {
        name: 'Global Instability Drives Demand for Safety',
        description:
          'Political, economic and geopolitical anxiety is increasing the psychological premium consumers place on protection and guarantees.',
        stat: '$100B+',
        statLabel:
          'U.S. annuity sales exceeded $100 billion for 8 consecutive quarters through Q3 2025 — a "new normal"',
      },
      {
        name: 'Rate Environment Shaping the Product Shelf',
        description:
          'The level and direction of interest rates directly determines what products are viable.',
        stat: '38%',
        statLabel:
          'surge in RILA sales as rates fell in 2024; fixed-rate deferred annuities dropped 7%, fixed indexed grew 32%',
      },
      {
        name: 'Alternate Assets Reshaping Insurer Balance Sheets',
        description:
          'The structural shift towards private credit and illiquid assets is creating new yield opportunities but introducing concentration and liquidity risks.',
        stat: '38%',
        statLabel:
          'of life/annuity insurer portfolios now in private placements, mortgage loans, real estate & Schedule BA assets — up from 30% in 2018',
      },
    ],
    articles: [
      {
        title: 'Annuity Sales Shatter Records as Consumers Seek Certainty',
        source: 'LIMRA',
        url: '#',
        summary:
          'U.S. annuity sales have exceeded $100 billion for 8 consecutive quarters through Q3 2025, driven by consumer demand for guaranteed income in uncertain times.',
      },
      {
        title: 'How Falling Rates Are Reshaping the Insurance Product Shelf',
        source: 'Insurance Journal',
        url: '#',
        summary:
          'As interest rates fell in 2024, product mix shifted dramatically: fixed-rate deferred annuities dropped 7% while RILAs surged 38% and fixed indexed annuities grew 32%.',
      },
      {
        title: 'The Private Credit Boom in Insurance: Opportunity and Risk',
        source: 'Financial Times',
        url: '#',
        summary:
          'Life and annuity insurer allocations to private placements and illiquid assets have risen to 38% of total portfolios, up from 30% in 2018, raising questions about concentration risk.',
      },
    ],
    companies: [
      {
        name: 'Athene (Apollo)',
        description:
          'Pioneering the use of private credit and alternative assets to back annuity guarantees with higher yields',
        category: 'Alternative Asset Strategy',
      },
      {
        name: 'Global Atlantic',
        description:
          'Rapidly scaling through reinsurance and alternative asset strategies to offer competitive guaranteed products',
        category: 'Reinsurance & Scale',
      },
      {
        name: 'F&G (Fidelity National)',
        description:
          'Aggressive RILA and indexed annuity innovation, riding the shift from fixed-rate to market-linked products',
        category: 'Product Innovation',
      },
    ],
    exercisePrompt:
      'Given permanent macro volatility, record demand for guarantees, a shifting rate environment, and the move toward alternative assets — what should Brighthouse Financial do to respond? Think about product strategy, pricing, risk management, and how to position guarantees in an uncertain world.',
  },
  {
    id: 4,
    title: 'The Competitive Side',
    subtitle:
      'Simplicity, trust, and product innovation have overtaken product features as the primary battlegrounds',
    color: '#f59e0b',
    gradient: 'from-amber-500 to-orange-600',
    icon: 'Target',
    overview: {
      headline:
        'The rules of competition are being rewritten',
      description:
        'The competitive landscape is seeing massive shifts in what consumers value and how they discover, evaluate, and buy financial products. Simplicity, trust, and product innovation have overtaken product features as the primary battlegrounds. This exists within an industry-wide arms race for top advisors — who can spell the difference between winning and losing — amidst a growing workforce shortfall. At the same time, non-traditional players and aggressive consolidation are compressing competition.',
      keyPoints: [
        'How consumers find and choose products has changed (TikTok, Reddit) — clarity and credibility are king',
        'The annuity industry is evolving rapidly with products like RILAs, and carriers are broadening product shelves',
        'Insurtechs are raising the bar on experience while M&A is concentrating scale into fewer, larger players',
        'The industry is in an escalating war for experienced advisors against a structural workforce shortfall',
      ],
    },
    factors: [
      {
        name: 'Simplicity, Trust & Discovery',
        description:
          'How consumers find and choose products has changed (e.g., TikTok, Reddit) and is focused on clarity and credibility.',
        stat: '4.5B+',
        statLabel:
          'views on the #FinTok hashtag — consumers are discovering financial products through social media',
      },
      {
        name: 'Product Innovation Is Accelerating',
        description:
          'The annuity industry is evolving into products like RILAs, with carriers broadening product shelves and opening new channels.',
        stat: '$65.6B',
        statLabel:
          'RILA sales in 2024, up from just $3.7B in 2015; LIMRA projects they\'ll exceed $75B in 2025',
      },
      {
        name: 'Non-Traditional Players & Consolidation',
        description:
          'Insurtechs are raising the bar on experience while aggressive M&A is concentrating scale and distribution into fewer, larger players.',
        stat: '$66.7B',
        statLabel:
          'projected U.S. insurtech market by 2029, up from $49.8B in 2024',
      },
      {
        name: 'The Arms Race for Advisors',
        description:
          'The industry is in an escalating war for experienced advisors — who can spell the difference between winning and losing — against a structural workforce shortfall.',
        stat: '90K-110K',
        statLabel:
          'advisor shortfall projected by McKinsey by 2034; 38% of the current workforce expected to retire in the next decade',
      },
    ],
    articles: [
      {
        title: '#FinTok: How TikTok Is Changing How People Discover Financial Products',
        source: 'Wall Street Journal',
        url: '#',
        summary:
          'With 4.5 billion views, #FinTok is reshaping how consumers — especially younger ones — discover, evaluate, and trust financial products and advice.',
      },
      {
        title: 'The RILA Revolution: From $3.7B to $75B in a Decade',
        source: 'LIMRA',
        url: '#',
        summary:
          'Registered index-linked annuity sales have exploded from $3.7 billion in 2015 to $65.6 billion in 2024, with projections to exceed $75 billion in 2025.',
      },
      {
        title: 'The Coming Advisor Shortage Could Reshape Financial Services',
        source: 'McKinsey & Company',
        url: '#',
        summary:
          'McKinsey projects a shortfall of 90,000–110,000 advisors by 2034 as 38% of the current workforce retires, creating an existential distribution challenge.',
      },
    ],
    companies: [
      {
        name: 'Gainbridge',
        description:
          'Direct-to-consumer annuity platform bypassing traditional distribution and emphasizing simplicity and transparency',
        category: 'D2C Distribution',
      },
      {
        name: 'Annexus Group',
        description:
          'Product innovation engine creating next-generation indexed insurance and annuity solutions for major carriers',
        category: 'Product Innovation',
      },
      {
        name: 'Carson Group',
        description:
          'Advisor platform combining wealth management technology with practice management to attract and retain top advisors',
        category: 'Advisor Platform',
      },
    ],
    exercisePrompt:
      'Given shifting discovery channels, accelerating product innovation (especially RILAs), growing insurtech competition, M&A consolidation, and the advisor shortage — what should Brighthouse Financial do to respond? Think about distribution strategy, product innovation, advisor value proposition, and brand positioning.',
  },
]

export const workshopInfo = {
  title: 'The Structural Forces Reshaping Money & Human Behavior',
  subtitle: 'A Strategic Visioning Workshop',
  client: 'Brighthouse Financial',
  presentedBy: 'cg42',
  presenters: [
    {
      name: 'Hugh Tallents',
      role: 'Senior Partner',
      image: '/images/hugh.jpg',
    },
    {
      name: 'Evan Duval',
      role: 'Senior Consultant',
      image: '/images/evan.jpg',
    },
    {
      name: 'Shaun Mascarenhas',
      role: 'Senior Consultant',
      image: '/images/shaun.jpg',
    },
  ],
  agenda: [
    { time: '8:30 AM', label: 'Opening Comments', icon: 'Sparkles', description: 'The shared burden of leadership & the exciting road ahead' },
    { time: '9:00 AM', label: 'Four Themes Shaping the Future', icon: 'TrendingUp', description: 'Large, thematic shifts shaping business, money, and insurance', link: '/domains' },
    { time: '10:00 AM', label: 'Group Breakout Session & Ideation', icon: 'Users', description: 'Cross-functional groups assigned one theme each' },
    { time: '10:45 AM', label: 'Group Discussion & Share', icon: 'Heart', description: 'Present findings & prioritization activity' },
    { time: '12:00 PM', label: 'Lunch', icon: 'Coffee' },
    { time: '1:00 PM', label: 'Deep Dives & Competitive Examples', icon: 'Target', description: 'Detailed exploration with market examples', link: '/domains' },
    { time: '2:00 PM', label: 'Group Breakout Session & Ideation', icon: 'Users', description: 'Cross-functional groups continue ideation' },
    { time: '2:45 PM', label: 'Group Discussion & Prioritization', icon: 'Shield', description: 'Share insights and prioritize strategic ideas', link: '/priorities' },
    { time: '4:00 PM', label: 'Closing Remarks', icon: 'Sparkles' },
  ],
}
