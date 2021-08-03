import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Country } from '../@lib/type'
import { useCountryList } from '../@lib/utilCountry'
import { countryListSelector, fetchCountryList, getCountryList } from '../features/countryList/countryListSlice'
import CountryCreateBox from './CountryCreateBox'
import CountryRow from './CountryRow'


const CountryTable: FC = () => {
  // const countryList1 = useSelector(countryListSelector)
  const dispatch = useDispatch()
  const {countryList, loading, error} = useSelector(countryListSelector)
  useEffect(() => {
    dispatch(getCountryList())
    console.log(countryList)
  }, [])
  return loading? (
    <div>
      로딩중
    </div>
  ) : (
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
          <CountryCreateBox/>
          {countryList.map(
            (country: Country, index: number) => <CountryRow key={index} country={country} index={index}/>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default CountryTable