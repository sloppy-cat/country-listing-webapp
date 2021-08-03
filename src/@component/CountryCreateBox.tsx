import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCountry, countryListSelector } from '../features/countryList/countryListSlice'

const CountryCreateBox: FC = ({}) => {
  const dispatch = useDispatch()
  return (
    <tr>
      <td>
        <input type="text" />
      </td>
      <td>
        <input type="text" />
      </td>
      <td>
        <input type="text"/>
      </td>
      <td>
        <input type="text" />
      </td>
      <td>
        <input type="text"/>
      </td>
      <td>
        <button type="submit" onClick={()=>{
          dispatch(addCountry({
            "name": "123123",
            "alpha2Code": "ZA",
            "callingCodes": [
              "27"
            ],
            "capital": "Pretoria",
            "region": "Africa"
          }))}}
        >추가</button>
      </td>
    </tr>
  )
}

export default CountryCreateBox