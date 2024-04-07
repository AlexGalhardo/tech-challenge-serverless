export type RateLimitKey = {
  id: string
}

export type RateLimitBody = {
  counter: number
  created_at: number
  expire_at: number
}

export type RateLimit = RateLimitKey & RateLimitBody
