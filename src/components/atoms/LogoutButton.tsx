import { useAuth0 } from '@auth0/auth0-react'
import { Button, IconButton } from '@chakra-ui/react'
import { memo, VFC } from 'react'
import { IoLogOutSharp } from 'react-icons/io5'

export const LogoutButton: VFC = memo(() => {
    const { logout } = useAuth0()
    return (
        <>
            <Button size={'sm'} variant={'unstyled'} onClick={() => logout()} _hover={{ opacity: 0.6 }}>
                Log Out
                <IconButton bg={'transparent'} h={3} aria-label="login button" icon={<IoLogOutSharp size={'25px'} />} />
            </Button>
        </>
    )
})
