import getISOString from './get-iso-string'

const ISO_8601_FULL = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i

describe('Utils - Date - Get ISO String', () => {
  it('should be a valid ISO string date', () => {
    const date = getISOString()
    expect(date).toMatch(ISO_8601_FULL)
  })
})
