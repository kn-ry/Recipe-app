import { useAuth0 } from '@auth0/auth0-react'
import {
    Button,
    Divider,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    HStack,
    Text,
    VStack
} from '@chakra-ui/react'
import { memo, VFC } from 'react'
import { LoginButton } from '../atoms/LoginButton'
import { LogoutButton } from '../atoms/LogoutButton'

type Props = {
    onClose: () => void
    isOpen: boolean
    onClickRecipes: () => void
    onClickFavRecipes: () => void
}

export const MenuDrawer: VFC<Props> = memo((props: Props) => {
    const { user, isAuthenticated } = useAuth0()

    const { onClose, isOpen, onClickRecipes, onClickFavRecipes } = props
    return (
        <Drawer placement="left" size={'xs'} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p={0} bg={'gray.200'}>
                        <VStack onClick={onClose} mt={5} spacing={5}>
                            <Button
                                onClick={onClickRecipes}
                                variant="unstyled"
                                w={'100%'}
                                autoFocus={false}
                                fontSize={'xl'}
                            >
                                Search Recipes
                            </Button>
                            <Button onClick={onClickFavRecipes} variant="unstyled" w={'100%'} fontSize={'xl'}>
                                Favorite recipes
                            </Button>
                            <Divider h={10} borderBottomWidth={2} borderBottomColor={'gray.300'} w={'90%'} />
                            {isAuthenticated ? (
                                <VStack spacing={6}>
                                    <Text textAlign={'center'}>
                                        Logged in as{' '}
                                        <Text fontSize={'lg'} fontWeight={'extrabold'}>
                                            "{user?.nickname}"
                                        </Text>
                                    </Text>
                                    <LogoutButton />
                                </VStack>
                            ) : (
                                <LoginButton />
                            )}
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
})
