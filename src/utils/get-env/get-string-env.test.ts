import getStringEnv from './get-string-env'

describe('Utils - Get String ENV', () => {
  it('should get string env if exists', () => {
    process.env['🧺'] = '🍌'

    expect(getStringEnv('🧺')).toBe('🍌')

    delete process.env['🧺']
  })

  it('should throw error when key is not set', () => {
    delete process.env['🔥']

    expect(() => {
      getStringEnv('🔥')
    }).toThrowError(new Error('🔥 is not set'))
  })
})
