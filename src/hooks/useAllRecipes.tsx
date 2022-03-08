import axios from 'axios'
import { useCallback, useState } from 'react'
import { Recipe } from '../types/recipe'
import { useMessage } from './useMessage'

export const useAllRecipes = () => {
    const APP_ID = 'a0399583'
    const APP_KEY = '525aeaf652d95fd16a3d50d33e73217d'
    const { showMessage } = useMessage()
    const [recipes, setRecipes] = useState<Array<Recipe>>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [nextUrl, setNextUrl] = useState('')

    const runAxios = useCallback(
        (url: string) => {
            setIsLoading(true)

            axios
                .get(url)
                .then((res) => {
                    console.log(res)

                    setRecipes(res.data.hits)
                    setNextUrl(res.data._links.next.href)
                })
                .catch(() =>
                    showMessage({
                        title: 'Failed to get recipes. Please try again.',
                        status: 'error'
                    })
                )
                .finally(() => {
                    setIsLoading(false)
                })
        },
        [showMessage]
    )

    const getRecipes = useCallback(
        (q: string, searchData: object) => {
            console.log(`Search result for ${q}`)

            new Promise((resolve: (value?: string) => void) => {
                const receivedData: any = { ...searchData }
                const validData: any = {}
                const arr: string[] = []
                for (let key of Object.keys(searchData)) {
                    if (receivedData[key] !== '') {
                        validData[key] = receivedData[key]
                    }
                }
                for (let key of Object.keys(validData)) {
                    arr.push(`${key}=${validData[key]}`)
                }

                const str = arr.join('&')

                resolve(str)
            })
                .then((str) => {
                    const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${q}&app_id=${APP_ID}&app_key=${APP_KEY}&${str}`
                    return apiUrl
                })
                .then((apiUrl) => {
                    // console.log(`axios started ${apiUrl}`)

                    runAxios(apiUrl)
                })
        },
        [runAxios]
    )

    const goNextPage = useCallback(() => runAxios(nextUrl), [runAxios, nextUrl])

    return { getRecipes, recipes, isLoading, goNextPage }
}
