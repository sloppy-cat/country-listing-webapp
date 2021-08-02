import React, { ReactNode, FC } from 'react'
import { Country } from '../@lib/type'

interface CountryRowProps {
  country: Country
}

const CountryRow: FC<CountryRowProps> = ({country}) => {
  return (
    <tr>
      <td>{country.alpha2Code}</td>
      <td>{country.capital}</td>
      <td>{country.name}</td>
      <td>{country.region}</td>
      <td>{country.callingCodes?.[0]}</td>
      <td>삭제</td>
    </tr>
  )
}

export default CountryRow