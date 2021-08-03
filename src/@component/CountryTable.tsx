import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Country, countryAttribute, countryAttributeOrderKr } from '../@lib/type'
import { useCountryList } from '../@lib/utilCountry'
import { countryListSelector, fetchCountryList, getCountryList, sortCountryList } from '../features/countryList/countryListSlice'
import { listSortSelector, setListSort } from '../features/listSort/listSortSlice'
import CountryCreateBox from './CountryCreateBox'
import CountryRow from './CountryRow'


const CountryTable: FC = () => {
  const dispatch = useDispatch()
  const {countryList, loading, error} = useSelector(countryListSelector)
  const {sortedBy, order} = useSelector(listSortSelector)
  useEffect(() => {
    dispatch(getCountryList())
  }, [])
  useEffect(() => {
    dispatch(sortCountryList({sortedBy, order}))
  }, [sortedBy, order])
  function handleClickAttribute(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    dispatch(setListSort(event.currentTarget.value as countryAttribute))
    
  }

  return loading? (
    <div>
      LOADING
    </div>
  ) : (
    <div>
      <table>
        <thead>
          <tr>
            {countryAttributeOrderKr.map((value, index) => <th key={index} ><button onClick={handleClickAttribute} value={value.key}>{value.value}{sortedBy === value.key ? order === 'asc'? '▲' : '▼' : ''}</button></th>)}
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