import React, { ReactNode, FC } from 'react'
import { useDispatch } from 'react-redux'
import { Country, countryAttributeOrderKr } from '../@lib/type'
import { removeCountry } from '../features/countryList/countryListSlice'
import styled from 'styled-components' 

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
      {countryAttributeOrderKr.map((value, index)=>
        <td key={index}>{value.key !== 'callingCodes' ? country[value.key] : country.callingCodes?.[0] }</td>
      )}
      <td><DeleteButton onClick={handleRemoveCountry}>삭제</DeleteButton></td>
    </tr>
  )
}
export default CountryRow

const DeleteButton = styled.div`
  width: 100%;
  height: 2rem;
  cursor: pointer;
  text-align: center;
`