import React, { ReactNode, FC } from 'react'
import { useDispatch } from 'react-redux'
import { Country } from '../@lib/type'
import { removeCountry } from '../features/countryList/countryListSlice'

interface CountryRowProps {
  country: Country
  index: number
}

const CountryRow: FC<CountryRowProps> = ({country, index}) => {
  const dispatch = useDispatch()

  function handleRemoveCountry() {
    dispatch(removeCountry(index))
  }
  
  return (
    <tr>
      <td>{country.alpha2Code}</td>
      <td>{country.capital}</td>
      <td>{country.name}</td>
      <td>{country.region}</td>
      <td>{country.callingCodes?.[0]}</td>
      <td onClick={handleRemoveCountry}>삭제</td>
    </tr>
  )
}

export default CountryRow