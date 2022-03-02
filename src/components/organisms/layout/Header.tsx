import { Box, Button, Flex, Heading, Link } from '@chakra-ui/react'
import { memo, useCallback, VFC } from 'react'
import { useHistory } from 'react-router-dom'

export const Header: VFC = memo(() => {
    const history = useHistory()
    const onClickHome = useCallback(() => history.push('/recipes'), [history])
    const onClickRecipes = useCallback(() => history.push('/recipes'), [history])
    const onClickFavRecipes = useCallback(() => history.push('/favoriterecipes'), [history])
    return (
        <>
            <Flex
                as="nav"
                bg="#C7CF30"
                color="#6D711A"
                align="center"
                justify="space-between"
                padding={5}
                textAlign={'center'}
            >
                <Flex _hover={{ cursor: 'pointer', opacity: 0.8 }} onClick={() => onClickHome()} mx={'auto'}>
                    <Heading as="h1" fontSize="xl">
                        Recipe app
                    </Heading>
                </Flex>
                <Flex align="center" flex="auto" fontSize="md">
                    <Box paddingRight={4} paddingLeft={4}>
                        <Link onClick={() => onClickRecipes()}>search recipes</Link>
                    </Box>
                    <Link onClick={() => onClickFavRecipes()}>favorite recipes</Link>
                </Flex>
                <Flex justifyContent={'flex-end'}></Flex>
            </Flex>
        </>
    )
})
