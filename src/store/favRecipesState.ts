import { atom } from 'recoil'
import { Recipe } from '../types/recipe'
export const favRecipesState = atom<Array<Recipe>>({
    key: 'favRecipesState',
    default: []
})
