const searchQueries = {
  1: '("great wealth transfer" OR "women wealth" OR "generational inheritance" OR "retirement anxiety" OR "longevity risk") AND (annuity OR insurance OR "financial planning" OR "life insurance")',
  2: '("AI financial" OR "artificial intelligence insurance" OR "robo-advisor" OR "digital financial advice" OR "agentic AI") AND (insurance OR annuity OR "wealth management")',
  3: '("annuity sales record" OR "RILA sales" OR "fixed indexed annuity" OR "interest rate" OR "private credit insurance") AND (annuity OR "life insurance")',
  4: '("financial advisor shortage" OR "FinTok" OR "insurtech" OR "RILA innovation" OR "annuity competition") AND (insurance OR annuity OR "wealth management")',
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { domainId } = req.query

  if (!searchQueries[domainId]) {
    return res.status(404).json({ error: 'Domain not found' })
  }

  const apiKey = process.env.NEWS_API_KEY
  if (!apiKey) {
    return res.status(200).json({
      articles: [],
      message: 'NEWS_API_KEY not configured. Add it to .env to enable live news.',
    })
  }

  try {
    const query = searchQueries[domainId]
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=relevancy&pageSize=4&language=en&apiKey=${apiKey}`

    const response = await fetch(url)
    const data = await response.json()

    if (data.status !== 'ok') {
      throw new Error(data.message || 'News API error')
    }

    const articles = (data.articles || [])
      .filter(
        (article) =>
          article.title && !article.title.includes('[Removed]') && article.description
      )
      .slice(0, 4)
      .map((article) => ({
        title: article.title,
        source: article.source?.name || 'Unknown',
        url: article.url,
        summary: article.description || '',
        imageUrl: article.urlToImage,
        publishedAt: article.publishedAt,
      }))

    res.json({ articles })
  } catch (error) {
    console.error('News API error:', error.message)
    res.status(200).json({
      articles: [],
      message: 'Unable to fetch news articles. Using fallback content.',
    })
  }
}
