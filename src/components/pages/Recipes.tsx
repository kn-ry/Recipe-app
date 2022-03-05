import { Search2Icon } from '@chakra-ui/icons'
import {
    Center,
    HStack,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    useDisclosure,
    Wrap,
    WrapItem
} from '@chakra-ui/react'
import { ChangeEvent, memo, useCallback, useEffect, useState, VFC } from 'react'
import { useAllRecipes } from '../../hooks/useAllRecipes'
import { useSelectRecipe } from '../../hooks/useSelectRecipe'
import { FollowButton } from '../atoms/FollowButton'
import { GreenSpinner } from '../atoms/GreenSpinner'
import { NotFoundMessage } from '../atoms/NotFoundMessage'
import { RecipeCard } from '../organisms/recipe/RecipeCard'
import { RecipeDetailModal } from '../organisms/recipe/RecipeDetailModal'
import { RecipeSearchModal } from '../organisms/recipe/RecipeSearchModal'

export const Recipes: VFC = memo(() => {
    const { getRecipes, recipes, isLoading } = useAllRecipes()
    const { onSelectRecipe, selectedRecipe } = useSelectRecipe()
    const modalSearch = useDisclosure()
    const modalDetail = useDisclosure()

    const [q, setQ] = useState('')
    const [diet, setDiet] = useState('')
    const [health, setHealth] = useState('')
    const [cuisineType, setCuisineType] = useState('')
    const [mealType, setMealType] = useState('')
    const [dishType, setDishType] = useState('')
    const [calSlider, setCalSlider] = useState<number>(5000)
    const [timeSlider, setTimeSlider] = useState<number>(360)

    const onChangeQue = (e: ChangeEvent<HTMLInputElement>) => setQ(e.target.value)

    const onCLickCard = useCallback(
        (id: string) => {
            onSelectRecipe({ id, recipes })
            modalDetail.onOpen()
        },
        [onSelectRecipe, recipes, modalDetail]
    )

    const onClickSearch = () => {
        const searchData = {
            diet,
            health,
            cuisineType,
            mealType,
            dishType,
            calories: `${calSlider}`,
            time: `${timeSlider}`
        }

        getRecipes(q, searchData)
        console.log(recipes)

        setQ('')
        setDiet('')
        setHealth('')
        setCuisineType('')
        setMealType('')
        setDishType('')
        setCalSlider(5000)
        setTimeSlider(360)
        modalSearch.onClose()
    }

    useEffect(() => {
        // display default recipes searched by ramdom query.
        const exArr = ['lunch', 'dinner', 'chicken', 'fish', 'beef', 'italian', 'french', 'pork', 'sandwich', 'potato']
        const random = exArr[Math.floor(Math.random() * exArr.length)]
        getRecipes(random, {})
    }, [])

    return (
        <>
            <HStack
                pt={{ base: '80px', md: '90px' }}
                w={{ sm: '350px', md: '650px' }}
                spacing="8px"
                display={'flex'}
                mx={'auto'}
            >
                <InputGroup display={'flex'} mx={'auto'} size={'lg'} w={{ sm: '240px', md: '480px' }}>
                    <Input placeholder="Find recipes" onChange={onChangeQue} value={q} variant={'filled'} />
                    <InputRightElement>
                        <IconButton
                            aria-label="open search modal"
                            size={'md'}
                            icon={<Search2Icon />}
                            onClick={onClickSearch}
                        />
                    </InputRightElement>
                </InputGroup>
                <FollowButton onClick={modalSearch.onOpen}>Advanced Search</FollowButton>
            </HStack>
            <RecipeSearchModal
                isOpen={modalSearch.isOpen}
                onClose={modalSearch.onClose}
                q={q}
                diet={diet}
                health={health}
                cuisineType={cuisineType}
                mealType={mealType}
                dishType={dishType}
                calSlider={calSlider}
                timeSlider={timeSlider}
                setQ={setQ}
                setDiet={setDiet}
                setHealth={setHealth}
                setCuisineType={setCuisineType}
                setMealType={setMealType}
                setDishType={setDishType}
                setCalSlider={setCalSlider}
                setTimeSlider={setTimeSlider}
                onClickSearch={onClickSearch}
            />

            {isLoading ? (
                <Center height={'100vh'}>
                    <GreenSpinner />
                </Center>
            ) : recipes.length === 0 ? (
                <NotFoundMessage title={'No matching results.'}>
                    Try a different search or filter combination.
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
                    {recipes.map((recipe) => (
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
                    {/* 次ページへの遷移　未実装 */}
                    {/* <WrapItem w={'full'}>
                        <Box mx={'auto'}>
                            <HStack spacing={5}>
                                <Button w={'50px'}>◀︎</Button>
                                <Button w={'50px'}>▶︎</Button>
                            </HStack>
                        </Box>
                    </WrapItem> */}
                </Wrap>
            )}
            <RecipeDetailModal recipe={selectedRecipe} isOpen={modalDetail.isOpen} onClose={modalDetail.onClose} />
        </>
    )
})
