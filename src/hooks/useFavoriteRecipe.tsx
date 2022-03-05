import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { favRecipesState } from '../store/favRecipesState'
import { Recipe } from '../types/recipe'
import { useMessage } from './useMessage'

export const useFavoriteRecipe = () => {
    const { showMessage } = useMessage()
    const [favRecipes, setFavRecipes] = useRecoilState(favRecipesState)
    const addFavorite = useCallback(
        (recipe: Recipe) => {
            if (!favRecipes.includes(recipe)) {
                const newFavs = [...favRecipes, recipe]
                setFavRecipes(newFavs)
            } else {
                showMessage({ title: 'already registered', status: 'info' })
            }
        },
        [favRecipes, showMessage]
    )
    console.log(favRecipes)

    return { favRecipes, setFavRecipes, addFavorite }
}
