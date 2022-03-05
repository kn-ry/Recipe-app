import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme/theme'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router/Router'
import { RecoilRoot } from 'recoil'
import { Auth0Provider } from '@auth0/auth0-react'

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

const App = () => {
    return (
        <>
            <Auth0Provider domain={domain!} clientId={clientId!} redirectUri={window.location.origin}>
                <RecoilRoot>
                    <ChakraProvider theme={theme}>
                        <BrowserRouter>
                            <Router />
                        </BrowserRouter>
                    </ChakraProvider>
                </RecoilRoot>
            </Auth0Provider>
        </>
    )
}

export default App
