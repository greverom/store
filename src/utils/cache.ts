

type CacheEntry<T> = {
    data: T
    timestamp: number
  }
  
  const cache: Record<string, CacheEntry<unknown>> = {}
  
  export function setCache<T>(key: string, data: T, ttl = 5 * 60 * 1000) {
    cache[key] = {
      data,
      timestamp: Date.now() + ttl,
    }
  }
  
  export function getCache<T>(key: string): T | null {
    const cached = cache[key] as CacheEntry<T> | undefined
    if (!cached) return null
  
    if (Date.now() > cached.timestamp) {
      delete cache[key]
      return null
    }
  
    return cached.data
  }