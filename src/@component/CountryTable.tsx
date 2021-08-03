import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Country, countryAttribute, countryAttributeOrderKr } from '../@lib/type'
import { addCountry, countryListSelector, getCountryList, sortCountryList } from '../features/countryList/countryListSlice'
import { listSortSelector, setListSort } from '../features/listSort/listSortSlice'
import CountryCreateBox from './CountryCreateBox'
import CountryRow from './CountryRow'
import { useForm } from "react-hook-form"
import { listSearchSelector } from '../features/listSearch/listSearchSlice'
import styled from 'styled-components' 

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
    data.alpha2Code.toUpperCase()
    if (/^[A-Z]{2,2}$/.test(data.alpha2Code) && countryList.findIndex((value)=> value.alpha2Code === data.alpha2Code) === -1) {
      event.target.reset()
      dispatch(addCountry({
        alpha2Code: data.alpha2Code,
        capital: data.capital,
        name: data.name,
        region: data.region,
        callingCodes: [data.callingCodes]
      }))
    } else {
      alert('중복되지 않은 알파벳2글자 코드를 입력해주세요')
    }
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
            {countryAttributeOrderKr.map((value) => <th key={value.key} >
              <AttributeButton onClick={handleClickAttribute} id={value.key}>{value.value}{sortedBy === value.key ? order === 'asc'? '▲' : '▼' : ''}</AttributeButton>
            </th>)}
            <th/>
          </tr>
        </thead>
        <tbody>
          <CountryCreateBox register={register}/>
          {countryList.map(
            (country: Country, index: number) => (
              country.alpha2Code.toUpperCase().includes(keyword) ||
              country.callingCodes?.[0].includes(keyword) ||
              country.capital.toUpperCase().includes(keyword) ||
              country.name.toUpperCase().includes(keyword) ||
              country.region.toUpperCase().includes(keyword) 
            ) && <CountryRow key={country.alpha2Code} country={country} index={index}/>
          )}
        </tbody>
      </table>
    </form>
  )
}

export default CountryTable

const AttributeButton = styled.div`
  cursor: pointer;
`