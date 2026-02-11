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
        title: 'The $124 Trillion Great Wealth Transfer Is Bigger Than Ever — and Millennials Will Get the Biggest Cut',
        source: 'Fortune',
        url: 'https://fortune.com/2025/07/23/great-wealth-transfer-124-trillion-bigger-than-ever-millennials-gen-x/',
        summary:
          'Cerulli projects $124 trillion will transfer through 2048 — up from earlier $84T estimates. Gen X will inherit $1.4T/year; Millennials $46T total. Heirs have radically different expectations and brand loyalty.',
      },
      {
        title: 'The Great Wealth Transfer: How Women Can Make the Most of It',
        source: 'World Economic Forum',
        url: 'https://www.weforum.org/stories/2024/07/women-inheritance-great-wealth-transfer/',
        summary:
          '$54 trillion will first transfer between spouses, with $40 trillion going to widowed Boomer women. By 2030, women will control $34T in assets — yet 84% lack confidence managing an inheritance.',
      },
      {
        title: 'Financial Strategies for Women Navigating the Great Wealth Transfer',
        source: 'UBS',
        url: 'https://www.ubs.com/us/en/wealth-management/who-we-serve/specialized-advice/women-and-finances/articles/how-women-prepare-great-wealth-transfer.html',
        summary:
          '80% of women who inherited assets faced challenges; 83% of recently widowed women report wealth transfer difficulties. Only 49% of women have opened their own investment account vs. two-thirds of men.',
      },
      {
        title: 'Preparing for the Great Wealth Transfer',
        source: 'U.S. Bank',
        url: 'https://www.usbank.com/wealth-management/financial-perspectives/women-and-money/women-and-great-wealth-transfer.html',
        summary:
          'Older households now control 61% of national wealth (up from 54% three years ago). Only a quarter of families have discussed generational transfer, and 38% of women have no plan to start.',
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
        title: 'AI Transformation in Financial Services: 5 Predictors for Success in 2026',
        source: 'Microsoft',
        url: 'https://www.microsoft.com/en-us/industry/blog/financial-services/2025/12/18/ai-transformation-in-financial-services-5-predictors-for-success-in-2026/',
        summary:
          'Financial services has the highest concentration of "Frontier Firms" embedding AI agents across every workflow. These firms report AI investment returns 3x higher than slow adopters.',
      },
      {
        title: 'Insurers Accelerate AI Rollout as OpenAI Demand Surges',
        source: 'Fintech Global',
        url: 'https://fintech.global/2025/12/05/insurers-accelerate-ai-rollout-as-openai-demand-surges/',
        summary:
          'Major insurers are deploying generative AI as a core operating system for fraud detection, claims handling, customer support, and risk analytics — shifting AI from back-office to front-office.',
      },
      {
        title: 'Artificial Intelligence in Financial Services',
        source: 'World Economic Forum',
        url: 'https://reports.weforum.org/docs/WEF_Artificial_Intelligence_in_Financial_Services_2025.pdf',
        summary:
          'Comprehensive analysis of AI\'s pivot from cost-reduction to primary consumer interface. JPMorgan has allocated $18B to technology in 2025, with AI tools used by 200,000+ employees achieving 30% cost reduction.',
      },
      {
        title: 'AI Integration in Financial Services: Trends and Regulatory Challenges',
        source: 'Nature',
        url: 'https://www.nature.com/articles/s41599-025-04850-8',
        summary:
          'Systematic review of AI adoption from 1989–2024 across credit scoring, fraud detection, and robo-advisory. Data security is the leading barrier — cited by 33% of firms — underscoring the trust-personalization tension.',
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
        title: '2024 Retail Annuity Sales Grow 13% to a Record $434.1 Billion',
        source: 'LIMRA',
        url: 'https://www.limra.com/en/newsroom/news-releases/2025/limra-2024-retail-annuity-sales-grow-12-to-a-record-$434.1-billion/',
        summary:
          'Total annuity sales surpassed $100B in all four quarters of 2024 — a first. Three consecutive record years totaling $1.1 trillion in sales, driven by consumer demand for guarantees amid volatility.',
      },
      {
        title: 'U.S. Annuity Sales Set New Record in First Half of 2025',
        source: 'LIMRA',
        url: 'https://www.limra.com/en/newsroom/news-releases/2025/limra-u.s.-annuity-sales-set-new-record-in-first-half-of-2025/',
        summary:
          'H1 2025 annuity sales hit $223B, 3% above prior year. Q2 2025 was the highest quarterly total ever at $116.6B. Market volatility in Q1 calmed by Q2, but demand for protected growth stayed elevated.',
      },
      {
        title: 'A Mixed Bag Likely for the U.S. Retail Annuity Market in 2025',
        source: 'LIMRA',
        url: 'https://www.limra.com/en/newsroom/industry-trends/2025/a-mixed-bag-likely-for-the-u.s.-retail-annuity-market-in-2025/',
        summary:
          'Falling rates are reshaping the product shelf: fixed-rate deferred annuities dropped 7% while RILAs surged 38% and FIAs grew 31%. LIMRA projects sales will remain above $350B through 2027.',
      },
      {
        title: 'U.S. Annuity Market: New Opportunities Amid Economic Uncertainty',
        source: 'LIMRA',
        url: 'https://www.limra.com/en/newsroom/industry-trends/2025/u.s.-annuity-market-new-opportunities-amid-economic-uncertainty/',
        summary:
          '6 in 10 consumers are very concerned about the economy. Through 2029, 4M+ people will turn 65 annually — most without pensions. Over half of pre-retirees are interested in converting assets to annuities.',
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
        title: 'The Looming Advisor Shortage in US Wealth Management',
        source: 'McKinsey & Company',
        url: 'https://www.mckinsey.com/industries/financial-services/our-insights/the-looming-advisor-shortage-in-us-wealth-management',
        summary:
          'McKinsey projects a 90,000–110,000 advisor shortfall by 2034. 51% of CFPs are over 50, the workforce grows at just 0.3% annually, and the rookie failure rate is 72%.',
      },
      {
        title: 'As More Americans Turn to FinTok for Financial Guidance, Experts Urge Caution',
        source: 'Wealthtender',
        url: 'https://wealthtender.com/insights/fintok/',
        summary:
          '68% of FinTok users say it improved their financial situation. 71% of Gen Z report social media positively impacts financial decisions — a seismic shift in how consumers discover products.',
      },
      {
        title: 'Corebridge Launches RILA, Becoming Only Top 3 Provider with Products in Every Major Category',
        source: 'Corebridge Financial',
        url: 'https://www.corebridgefinancial.com/who-we-are/newsroom/rila-annuity',
        summary:
          'RILA sales exploded from $3.7B in 2015 to $65.6B in 2024. New market entrants like Corebridge are broadening product shelves, intensifying competition across every annuity category.',
      },
      {
        title: '2026 Global Insurance Outlook',
        source: 'Deloitte',
        url: 'https://www.deloitte.com/us/en/insights/industry/financial-services/financial-services-industry-outlooks/insurance-industry-outlook.html',
        summary:
          'The $49.8B U.S. insurtech market is projected to reach $66.7B by 2029. Broker consolidation, M&A activity, and digital-first models are reshaping distribution and compressing competition.',
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
