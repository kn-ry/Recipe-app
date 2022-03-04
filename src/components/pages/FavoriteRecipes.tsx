import { Box, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react'
import { memo, useCallback, useEffect, VFC } from 'react'
import { useFavoriteRecipe } from '../../hooks/useFavoriteRecipe'
import { useSelectRecipe } from '../../hooks/useSelectRecipe'
import { NotFoundMessage } from '../atoms/NotFoundMessage'
import { RecipeCard } from '../organisms/recipe/RecipeCard'
import { RecipeDetailModal } from '../organisms/recipe/RecipeDetailModal'

export const FavoriteRecipes: VFC = memo(() => {
    const { favRecipes } = useFavoriteRecipe()
    const { onSelectRecipe, selectedRecipe } = useSelectRecipe()
    const { isOpen, onClose, onOpen } = useDisclosure()

    const onCLickCard = useCallback(
        (id: string) => {
            onSelectRecipe({ id, recipes: favRecipes })
            onOpen()
        },
        [onSelectRecipe]
    )

    useEffect(() => {
        console.log(`favorite recipes:`)
        console.log(`${favRecipes}`)
    }, [])
    return (
        <>
            <Box pt={{ base: '80px', md: '90px' }}></Box>
            {favRecipes.length === 0 ? (
                <NotFoundMessage title="No favorite recipes.">
                    Recipes added to your favorites will be displayed here.
                </NotFoundMessage>
            ) : (
                <Wrap
                    borderColor={'green'}
                    w={{
                        sm: '280px',
                        md: '540px',
                        lg: '540px',
                        xl: '1060px'
                    }}
                    align={'center'}
                    mx={'auto'}
                    p={4}
                    spacing={5}
                >
                    {favRecipes.map((recipe) => (
                        <WrapItem key={recipe.recipe.label}>
                            <RecipeCard
                                id={recipe.recipe.label}
                                imageUrl={recipe.recipe.images.SMALL.url}
                                title={recipe.recipe.label}
                                detail={recipe.recipe.url}
                                onClick={onCLickCard}
                            />
                        </WrapItem>
                    ))}
                </Wrap>
            )}

            <RecipeDetailModal recipe={selectedRecipe} isOpen={isOpen} onClose={onClose} />
        </>
    )
})
