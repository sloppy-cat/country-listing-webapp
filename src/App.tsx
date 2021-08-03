import React from 'react'
import { Provider } from 'react-redux';
import CountrySearchBox from './@component/CountrySearchBox';
import CountryTable from './@component/CountryTable';
import Layout from './@component/Layout';
import createStore from './@lib/redux/store';
export default function App() {
  const store = createStore()
  return (
    <Provider store={store}>
      <Layout>
        <CountrySearchBox/>
        <CountryTable/>
      </Layout>
    </Provider>
  )
}