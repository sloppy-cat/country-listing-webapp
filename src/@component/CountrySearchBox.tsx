import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { setListSearch } from '../features/listSearch/listSearchSlice'

const CountrySearchBox: FC = ({}) => {
  const dispatch = useDispatch()

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setListSearch(event.currentTarget.value))
  }

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="검색어를 입력하세요"/>
    </div>
  )
}

export default CountrySearchBox