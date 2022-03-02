import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme/theme'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router/Router'
import { RecoilRoot } from 'recoil'

const App = () => {
    return (
        <RecoilRoot>
            <ChakraProvider theme={theme}>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </ChakraProvider>
        </RecoilRoot>
    )
}

export default App
