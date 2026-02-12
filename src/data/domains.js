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
    heroImage:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=80',
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
        imageUrl: 'https://fortune.com/img-assets/wp-content/uploads/2025/07/GettyImages-1534753790-e1753264102697.jpg',
        summary:
          'Cerulli projects $124 trillion will transfer through 2048 — up from earlier $84T estimates. Gen X will inherit $1.4T/year; Millennials $46T total. Heirs have radically different expectations.',
      },
      {
        title: 'Help Women Become the CFOs of Their Own Lives',
        source: 'InsuranceNewsNet',
        url: 'https://insurancenewsnet.com/innarticle/help-women-become-the-cfos-of-their-own-lives',
        imageUrl: 'https://insurancenewsnet.com/wp-content/uploads/2025/04/Help-women-become-the-CFOs-of-their-own-lives.jpg',
        summary:
          'Women now control more than 51% of U.S. personal wealth. Younger women will receive $47 trillion in inherited wealth by 2048 — yet products, language, and advisory relationships aren\'t calibrated for them.',
      },
      {
        title: 'Implementing Best Practices During the Great Wealth Transfer',
        source: 'InsuranceNewsNet',
        url: 'https://insurancenewsnet.com/innarticle/implementing-best-practices-during-the-great-wealth-transfer',
        imageUrl: 'https://insurancenewsnet.com/wp-content/uploads/2025/06/Implementing-best-practices-during-the-Great-Wealth-Transfer.jpg',
        summary:
          'Spouses will inherit over $50 trillion, the vast majority going to women. Millennials will inherit the most of any generation ($46T). 89% of firms say regular family communication is a key best practice.',
      },
      {
        title: 'With the Great Wealth Transfer Underway, Tools Include Life Insurance and Gifting Strategies',
        source: 'InsuranceNewsNet',
        url: 'https://insurancenewsnet.com/innarticle/with-the-great-wealth-transfer-underway-tools-include-life-insurance-gifting-strategies',
        imageUrl: 'https://insurancenewsnet.com/wp-content/uploads/2025/08/Wealth-transfer-tools-include-life-insurance-gifting-strategies.jpg',
        summary:
          '50%+ of consumers expecting an inheritance see it as "critical" to their long-term security. Yet 70% of affluent families lose wealth by the second generation — creating urgency for better planning.',
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
    heroImage:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1920&q=80',
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
        title: 'How AI and Tech Will Impact Insurers in 2025',
        source: 'InsuranceNewsNet',
        url: 'https://insurancenewsnet.com/innarticle/how-ai-and-tech-will-impact-insurers-in-2025',
        imageUrl: 'https://insurancenewsnet.com/wp-content/uploads/2024/12/How-AI-and-tech-will-impact-insurers-in-2025.jpg',
        summary:
          'AI will disrupt traditional insurance outsourcing by automating routine tasks, cutting outsourcing jobs in half within three years. Intelligent workflow agents will dramatically change work design across the industry.',
      },
      {
        title: 'The Transformational Potential of AI for Advisors',
        source: 'InsuranceNewsNet',
        url: 'https://insurancenewsnet.com/innarticle/the-transformational-potential-of-ai-for-advisors',
        imageUrl: 'https://insurancenewsnet.com/wp-content/uploads/2024/12/The-transformational-potential-of-AI-for-advisors.jpg',
        summary:
          'AI will augment the human advisor, not replace it. Digital transformations have been commonplace for a decade, with AI driving the latest iteration — but legacy systems continue to pose challenges.',
      },
      {
        title: 'How AI Is Transforming the Financial Planning Profession',
        source: 'InvestmentNews',
        url: 'https://www.investmentnews.com/fintech/how-ai-is-transforming-the-financial-planning-profession/262360',
        imageUrl: 'https://cdn-res.keymedia.com/cms/images/in/leoa_638950171283647813.png',
        summary:
          '33% of advisors now use AI in their practices and 42% are experimenting. AI isn\'t replacing judgment or trust — but as it takes over admin tasks, advisors can focus on delivering expertise.',
      },
      {
        title: 'The "Advisory Firm of 1" — AI Will Change How Your Wealth Is Managed',
        source: 'CNBC',
        url: 'https://www.cnbc.com/2025/08/05/op-ed-the-advisory-firm-of-1-ai-will-change-how-your-wealth-is-managed.html',
        imageUrl: null,
        summary:
          'A single advisor supported by autonomous AI agents represents the inevitable future. Lower cost of delivery will make quality financial advice accessible to middle-income families and younger generations.',
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
    heroImage:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1920&q=80',
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
        title: 'LIMRA: 2024 Retail Annuity Sales Set $432B Record, But How Does 2025 Look?',
        source: 'InsuranceNewsNet',
        url: 'https://insurancenewsnet.com/innarticle/limra-2024-retail-annuity-sales-set-432b-record-but-how-does-2025-look',
        imageUrl: 'https://insurancenewsnet.com/wp-content/uploads/2025/01/LIMRA-2024-Retail-Annuity-Sales-Power-to-a-Record-432-Billion.jpg',
        summary:
          'Total annuity sales surpassed $100B in all four quarters of 2024 — a first. Three consecutive record years totaling $1.1 trillion, driven by consumer demand for guarantees amid permanent volatility.',
      },
      {
        title: 'Annuity Sales Hit Record $119.5B in Q2, LIMRA Reports',
        source: 'InsuranceNewsNet',
        url: 'https://insurancenewsnet.com/innarticle/annuity-sales-hit-record-119-5b-in-q2-limra-reports',
        imageUrl: 'https://insurancenewsnet.com/wp-content/uploads/2025/09/Total-us-annuity-sales-increased-8-percent-year-over-year-to-a-record-high-119-billion-in-the-second-quarter.jpg',
        summary:
          'Q2 2025 annuity sales increased 8% year over year to $119.5B — the highest quarterly total ever. H1 2025 sales reached $226.1B, up 4% from 2024. LIMRA projects 2025 will surpass $450B.',
      },
      {
        title: '\'Economic Anxiety\' in March Boosts Slipping Annuity Sales, LIMRA Finds',
        source: 'InsuranceNewsNet',
        url: 'https://insurancenewsnet.com/innarticle/economic-anxiety-in-march-boosts-slipping-annuity-sales-limra-finds',
        imageUrl: 'https://insurancenewsnet.com/wp-content/uploads/2025/04/Preliminary-Q1-annuity-sales-show-1-decline-LIMRA-reports.jpg',
        summary:
          'Economic anxiety is the primary demand driver — 6 in 10 consumers are very concerned about the economy. Falling rates reshaping products: RILAs surged 38% while fixed-rate deferred dropped 7%.',
      },
      {
        title: 'The Annuity Industry in 2025: What You Need To Know',
        source: 'Bankrate',
        url: 'https://www.bankrate.com/retirement/annuity-market/',
        imageUrl: 'https://www.bankrate.com/brp/2025/01/15183709/Annuity-sales-soared-in-2024-What-investors-can-expect-in-2025.jpg',
        summary:
          'Through 2029, 4M+ people turn 65 annually — most without pensions. Just half of pre-retirees believe they have enough guaranteed income. Interest in annuities remains at historic highs.',
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
    heroImage:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80',
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
        title: 'Financial Advisor Shortage: The Decline of Younger Advisors & Future of the Industry',
        source: 'Integrated Financial Group',
        url: 'https://integrated-financial-group.com/resources/the-decline-of-younger-financial-advisors/',
        imageUrl: 'https://integrated-financial-group.com/wp-content/uploads/2025/03/multiethnic-male-caucasian-mentor-and-female-asian-2025-01-10-05-27-02-utc-scaled.jpg',
        summary:
          'McKinsey projects a 90,000–110,000 advisor shortfall by 2034. Only 6% of advisors are under 30, the workforce grows at just 0.3% annually, and the rookie failure rate is 72%.',
      },
      {
        title: 'As More Americans Turn to FinTok for Financial Guidance, Experts Urge Caution',
        source: 'Wealthtender',
        url: 'https://wealthtender.com/insights/fintok/',
        imageUrl: 'https://wealthtender.com/wp-content/uploads/2024/12/fintok.jpg',
        summary:
          '68% of FinTok users say it improved their financial situation. 71% of Gen Z report social media positively impacts financial decisions — a seismic shift in how consumers discover products.',
      },
      {
        title: 'Jackson Grows RILA, Fixed Annuity Sales in Q2 as Product Pivot Pays Off',
        source: 'InsuranceNewsNet',
        url: 'https://insurancenewsnet.com/innarticle/jackson-grows-rila-fixed-annuity-sales-in-q2-as-product-pivot-pays-off',
        imageUrl: 'https://insurancenewsnet.com/wp-content/uploads/2025/08/Jackson-Financial-q2-earnings.jpg',
        summary:
          'RILA sales exploded from $3.7B in 2015 to $65.6B in 2024. Major carriers like Jackson are pivoting away from riskier products, intensifying competition across every annuity category.',
      },
      {
        title: '2026 Global Insurance Outlook',
        source: 'Deloitte',
        url: 'https://www.deloitte.com/us/en/insights/industry/financial-services/financial-services-industry-outlooks/insurance-industry-outlook.html',
        imageUrl: 'https://www.deloitte.com/content/dam/insights/articles/2025/us188426_cfs_insurance-outlook-2026/primary-images/US188426_Banner-1920x880.jpg',
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
      image: `${import.meta.env.BASE_URL}images/hugh.jpg`,
    },
    {
      name: 'Evan Duval',
      role: 'Senior Consultant',
      image: `${import.meta.env.BASE_URL}images/evan.jpg`,
    },
    {
      name: 'Shaun Mascarenhas',
      role: 'Senior Consultant',
      image: `${import.meta.env.BASE_URL}images/shaun.jpg`,
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
