import { useAuth0 } from '@auth0/auth0-react'
import { Box, HStack, Text } from '@chakra-ui/react'
import { memo, VFC } from 'react'
import { LoginButton } from '../atoms/LoginButton'
import { LogoutButton } from '../atoms/LogoutButton'

export const LoginStatus: VFC = memo(() => {
    const { user, isAuthenticated } = useAuth0()
    // console.log(user)

    return (
        <>
            <Box display={{ base: 'none', md: 'flex' }}>
                {isAuthenticated ? (
                    <HStack spacing={5} alignItems={'center'}>
                        <Text>
                            Logged in as <Text fontWeight={'extrabold'}>"{user?.nickname}"</Text>
                        </Text>
                        <LogoutButton />
                    </HStack>
                ) : (
                    <LoginButton />
                )}
            </Box>
        </>
    )
})
