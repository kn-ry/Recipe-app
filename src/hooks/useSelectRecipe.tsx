import { useCallback, useState } from 'react'
import { Recipe } from '../types/recipe'

type Props = {
    id: string
    recipes: Array<Recipe>
}

export const useSelectRecipe = () => {
    const [selectedRecipe, setSelectedRecipe] =
        useState<Recipe | null>(null)
    const onSelectRecipe = useCallback((props: Props) => {
        const { id, recipes } = props
        console.log(id)

        const targetRecipe = recipes.find(
            (recipe) => id === recipe.recipe.label
        )
        setSelectedRecipe(targetRecipe!)
    }, [])
    return { onSelectRecipe, selectedRecipe }
}
