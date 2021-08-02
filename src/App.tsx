import React from 'react'
import CountryCreateBox from './@component/CountryCreateBox';
import CountrySearchBox from './@component/CountrySearchBox';
import CountryTable from './@component/CountryTable';
import Layout from './@component/Layout';

export default function App() {
  return (
    <Layout>
      <CountryCreateBox/>
      <CountrySearchBox/>
      <CountryTable/>
    </Layout>
  )
}