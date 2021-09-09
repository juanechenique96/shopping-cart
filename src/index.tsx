import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'

// Styles
import { GlobalStyle } from './styles/global.styles'

const queryClient = new QueryClient();

ReactDom.render(
    <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <App />
    </QueryClientProvider>
    , document.getElementById('root')
)
