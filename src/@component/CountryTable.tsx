import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Country, countryAttribute, countryAttributeOrderKr } from '../@lib/type'
import { addCountry, countryListSelector, fetchCountryList, getCountryList, sortCountryList } from '../features/countryList/countryListSlice'
import { listSortSelector, setListSort } from '../features/listSort/listSortSlice'
import CountryCreateBox from './CountryCreateBox'
import CountryRow from './CountryRow'
import { SubmitHandler, useForm } from "react-hook-form"
import { listSearchSelector } from '../features/listSearch/listSearchSlice'

const CountryTable: FC = () => {
  const dispatch = useDispatch()
  const { countryList, loading, error } = useSelector(countryListSelector)
  const { sortedBy, order } = useSelector(listSortSelector)
  const { keyword } = useSelector(listSearchSelector)
  const { handleSubmit, register, reset } = useForm()

  useEffect(() => {
    dispatch(getCountryList())
  }, [])
  
  useEffect(() => {
    dispatch(sortCountryList({sortedBy, order}))
  }, [sortedBy, order])

  function handleClickAttribute(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    dispatch(setListSort(event.currentTarget.id as countryAttribute))
  }
  
  interface formData {
    alpha2Code: string
    capital: string
    name: string
    region: string
    callingCodes: string
  }

  function onSubmitCountry(data: formData, event: React.BaseSyntheticEvent<object, any, any>) {
    console.log(data)
    event.target.reset()
    dispatch(addCountry({
      alpha2Code: data.alpha2Code,
      capital: data.capital,
      name: data.name,
      region: data.region,
      callingCodes: [data.callingCodes]
    }))
  }

  return loading? (
    <div>
      LOADING
    </div>
  ) : (
    <form onSubmit={handleSubmit(onSubmitCountry)}>
      <table>
        <thead>
          <tr>
            {countryAttributeOrderKr.map((value, index) => <th key={index} >
              <div onClick={handleClickAttribute} id={value.key}>{value.value}{sortedBy === value.key ? order === 'asc'? '▲' : '▼' : ''}</div>
            </th>)}
            <th/>
          </tr>
        </thead>
        <tbody>
          <CountryCreateBox register={register}/>
          {countryList.map(
            (country: Country, index: number) => (
              country.alpha2Code.includes(keyword) ||
              country.callingCodes?.[0].includes(keyword) ||
              country.capital.includes(keyword) ||
              country.name.includes(keyword) ||
              country.region.includes(keyword) 
            ) && <CountryRow key={index} country={country} index={index}/>
          )}
        </tbody>
      </table>
    </form>
  )
}

export default CountryTable