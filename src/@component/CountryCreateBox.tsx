import React, { FC } from 'react'
import { countryAttributeOrderKr } from '../@lib/type'
import styled from 'styled-components' 

const CountryCreateBox: FC<{register: Function}> = ({ register }) => {

  return (
    <tr>
        {countryAttributeOrderKr.map((value, index)=><td  key={index}><Input {...register(value.key)} width="fitContent"/></td>)}
        <td>
          <input type="submit" value="추가"/>
        </td>
    </tr>
  )
}

export default CountryCreateBox

const Input = styled.input`
  width: 95%;
`