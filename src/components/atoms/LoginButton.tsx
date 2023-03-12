import { useAuth0 } from '@auth0/auth0-react'
import { Button, IconButton } from '@chakra-ui/react'
import { memo, VFC } from 'react'
import { IoLogInSharp } from 'react-icons/io5'

export const LoginButton: VFC = memo(() => {
    const { loginWithRedirect } = useAuth0()
    return (
        <>
            <Button size={'sm'} variant={'unstyled'} onClick={() => loginWithRedirect()} _hover={{ opacity: 0.6 }}>
                Login
                <IconButton bg={'transparent'} h={3} aria-label="login button" icon={<IoLogInSharp size={'25px'} />} />
            </Button>
        </>
    )
})
