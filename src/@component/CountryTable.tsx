import React, { FC } from 'react'
import { Country } from '../@lib/type'
import { useCountryList } from '../@lib/utilCountry'
import CountryRow from './CountryRow'

const CountryTable: FC = () => {
  const countryList = useCountryList()
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>코드</th>
            <th>수도</th>
            <th>이름</th>
            <th>대륙</th>
            <th>국가 전화번호</th>
            <th/>
          </tr>
        </thead>
        <tbody>
          {countryList.map((country: Country, index: number)=><CountryRow key={index} country={country}/>)}
        </tbody>
      </table>
    </div>
  )
}

export default CountryTable