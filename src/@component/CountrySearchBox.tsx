import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { getListSearch } from '../features/listSearch/listSearchSlice'
import styled from 'styled-components' 

const CountrySearchBox: FC = ({}) => {
  const dispatch = useDispatch()
  
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(getListSearch(event.currentTarget.value))
  }

  return (
    <div>
      <InputSearch type="text" onChange={handleChange} placeholder="검색어를 입력하세요"/>
    </div>
  )
}

export default CountrySearchBox

const InputSearch = styled.input`
  width: 100%;
  height: 2rem;
`