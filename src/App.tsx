// Third
import React, { FC } from 'react';
//import { useQuery } from 'react-query'
// Components
import { CardList } from './components/CardList'
import { Header } from './components/Header'
//Styles
import { GlobalStyle } from './styles/global.styles';

const App: FC = () => {
  return (
    <div>
      <Header />
      <GlobalStyle />
      <CardList />
    </div>
  )
}

export default App