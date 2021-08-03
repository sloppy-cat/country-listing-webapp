import React, { FC } from 'react'
import { countryAttributeOrderKr } from '../@lib/type'
const CountryCreateBox: FC<{register: Function}> = ({ register }) => {

  return (
    <tr>
        {countryAttributeOrderKr.map((value, index)=><td key={index}><input {...register(value.key)} /></td>)}
        <td>
          <input type="submit" value="추가"/>
        </td>
    </tr>
  )
}

export default CountryCreateBox