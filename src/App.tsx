// Third
import React, { FC } from 'react';
//import { useQuery } from 'react-query'
// Components
import { CardList } from './components/CardList'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
//Styles
import { GlobalStyle } from './styles/global.styles';

const App: FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Hero />
      <CardList />
    </div>
  )
}

export default App