import { Flex, Heading, HStack, Link, useDisclosure } from '@chakra-ui/react'
import { memo, useCallback, VFC } from 'react'
import { useHistory } from 'react-router-dom'
import { HamburgerIconButton } from '../../atoms/HamburgerIconButton'
import { LoginStatus } from '../../molecules/LoginStatus'
import { MenuDrawer } from '../../molecules/MenuDrawer'

export const Header: VFC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const history = useHistory()
    const onClickRecipes = useCallback(() => history.push('/'), [history])
    const onClickFavRecipes = useCallback(() => history.push('/favoriterecipes'), [history])
    const onClickAppInfo = useCallback(() => history.push('/appinfo'), [history])
    return (
        <>
            <Flex
                zIndex={100}
                w={'100%'}
                position={'fixed'}
                as="nav"
                bg="#C7CF30"
                color="#6D711A"
                align="center"
                // justify="space-between"
                padding={5}
                textAlign={'center'}
                // display="flex"
                p={{ base: 3, md: 6 }}
            >
                {/* <Flex align="center" flex="auto" fontSize="md" bg={'red'} display="table-cell">
                    <Box paddingRight={4} paddingLeft={4}>
                        <Link onClick={() => onClickRecipes()}>search recipes</Link>
                    </Box>
                    <Link onClick={() => onClickFavRecipes()}>favorite recipes</Link>
                </Flex>
                <Flex
                    bg={'green'}
                    flex={'auto'}
                    _hover={{ cursor: 'pointer', opacity: 0.8 }}
                    onClick={() => onClickHome()}
                    display="table-cell"
                >
                    <Heading as="h1" fontSize="xl">
                        Recipe app
                    </Heading>
                </Flex> */}
                <HamburgerIconButton onOpen={onOpen} />
                <Flex display={{ base: 'none', md: 'flex' }} align={'center'}>
                    <HStack spacing={5}>
                        <Link onClick={onClickRecipes}>Search Recipes</Link>
                        <Link onClick={onClickFavRecipes}>My Favorites</Link>
                        <Link onClick={onClickAppInfo}>About this app</Link>
                    </HStack>
                </Flex>
                <Flex
                    onClick={onClickRecipes}
                    _hover={{ cursor: 'pointer', opacity: 0.6 }}
                    position={'absolute'}
                    top={{ base: 4, md: 5 }}
                    left={'50%'}
                    transform={'translateX(-50%)'}
                >
                    <Heading as={'h1'} fontSize="2xl">
                        Recipe App
                    </Heading>
                </Flex>
                <Flex position={'absolute'} right={{ base: '1%', md: '3%' }}>
                    <LoginStatus />
                </Flex>
            </Flex>
            <MenuDrawer
                onClose={onClose}
                isOpen={isOpen}
                onClickRecipes={onClickRecipes}
                onClickFavRecipes={onClickFavRecipes}
                onClickAppInfo={onClickAppInfo}
            />
        </>
    )
})
