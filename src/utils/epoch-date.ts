export const now = () => Math.floor(Date.now() / 1000)

export const addSeconds = (seconds: number): number => now() + seconds

export const checkExpired = (expireAt: number): boolean =>
  expireAt < now()

export const epochToISOString = (epoch: number): string =>
  new Date(epoch * 1000).toISOString()

export const ISOToEpoch = (iso: string) =>
  Math.floor(new Date(iso).getTime() / 1000)
