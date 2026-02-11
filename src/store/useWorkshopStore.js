import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useWorkshopStore = create(
  persist(
    (set, get) => ({
      // Ideas submitted per domain (keyed by domain id)
      ideas: {
        1: [],
        2: [],
        3: [],
        4: [],
      },

      // Cleaned/processed ideas per domain
      cleanedIdeas: {
        1: [],
        2: [],
        3: [],
        4: [],
      },

      // Votes for priority ranking
      votes: {},

      // Add a raw idea to a domain
      addIdea: (domainId, idea) =>
        set((state) => ({
          ideas: {
            ...state.ideas,
            [domainId]: [
              ...state.ideas[domainId],
              {
                id: Date.now() + Math.random(),
                text: idea.text,
                timeHorizon: idea.timeHorizon || 'near-term',
                category: idea.category || 'product',
                timestamp: new Date().toISOString(),
                domainId,
              },
            ],
          },
        })),

      // Set cleaned ideas for a domain (after AI processing)
      setCleanedIdeas: (domainId, ideas) =>
        set((state) => ({
          cleanedIdeas: {
            ...state.cleanedIdeas,
            [domainId]: ideas,
          },
        })),

      // Vote for an idea
      toggleVote: (ideaId) =>
        set((state) => ({
          votes: {
            ...state.votes,
            [ideaId]: !state.votes[ideaId],
          },
        })),

      // Get all ideas across domains
      getAllIdeas: () => {
        const state = get()
        return Object.entries(state.ideas).flatMap(([domainId, ideas]) =>
          ideas.map((idea) => ({ ...idea, domainId: Number(domainId) }))
        )
      },

      // Clear all data (reset workshop)
      resetWorkshop: () =>
        set({
          ideas: { 1: [], 2: [], 3: [], 4: [] },
          cleanedIdeas: { 1: [], 2: [], 3: [], 4: [] },
          votes: {},
        }),
    }),
    {
      name: 'bhf-workshop-storage',
    }
  )
)

export default useWorkshopStore
