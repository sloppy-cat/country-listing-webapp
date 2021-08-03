export interface Country {
  name: string
  alpha2Code: string
  callingCodes: string[]
  capital: string
  region: string
}
export type countryAttribute = 'name'|'alpha2Code'|'callingCodes'|'capital'|'region'

export const countryAttributeOrderKr: {key: countryAttribute, value: string}[] = [
  {
    key: 'alpha2Code',
    value: '코드'
  },
  {
    key: 'capital',
    value: '수도'
  },
  {
    key: 'name',
    value: '이름'
  },
  {
    key: 'region',
    value: '대륙'
  },
  {
    key: 'callingCodes',
    value: '국가 전화번호'
  }
] 