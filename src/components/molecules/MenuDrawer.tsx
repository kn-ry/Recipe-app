import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, VStack } from '@chakra-ui/react'
import { memo, VFC } from 'react'

type Props = {
    onClose: () => void
    isOpen: boolean
    onClickRecipes: () => void
    onClickFavRecipes: () => void
}

export const MenuDrawer: VFC<Props> = memo((props: Props) => {
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
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
})
