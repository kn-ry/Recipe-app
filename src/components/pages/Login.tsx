// this component is not in use now

import { Box, Divider, Flex, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react'
import { ChangeEvent, memo, useState, VFC } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { GreenButton } from '../atoms/GreenButton'

export const Login: VFC = memo(() => {
    const { login, isLoading } = useAuth()
    const [userId, setUserId] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)
    const onClickLogin = () => {
        login(userId)
    }
    return (
        <>
            <Flex align={'center'} justify={'center'} height={'100vh'}>
                <Box bgColor={'whiteAlpha.500'} borderRadius={'md'} shadow={'md'} w={'sm'} padding={5}>
                    <VStack>
                        <Heading as={'h1'} textAlign={'center'} size={'xl'}>
                            welcome!
                        </Heading>
                        <Divider colorScheme={'#E3E3E3'} size={'lg'} />
                        <VStack spacing={3} py={4} px={10}>
                            <Input
                                placeholder="username"
                                borderColor="#C7CF30"
                                borderRadius="lg"
                                borderWidth="2px"
                                onChange={onChange}
                            />
                            <Input
                                placeholder="password"
                                borderColor="#C7CF30"
                                borderRadius="lg"
                                borderWidth="2px"
                                onChange={onChange}
                            />
                            <GreenButton
                                onClick={onClickLogin}
                                width="full"
                                loading={isLoading}
                                disabled={userId === ''}
                            >
                                Log in
                            </GreenButton>
                            <HStack>
                                <Text>new to us?</Text>
                                <Text color="#33D6FF">Create Account</Text>
                            </HStack>
                            <Text>※auth user: 1 ~ 10</Text>
                        </VStack>
                    </VStack>
                </Box>
            </Flex>
        </>
    )
})
