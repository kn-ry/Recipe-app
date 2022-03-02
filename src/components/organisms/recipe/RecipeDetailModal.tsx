import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    HStack,
    ModalFooter,
    Button,
    Image,
    Text,
    Heading,
    Box,
    Checkbox,
    Link,
    Stack,
    StackDivider
} from '@chakra-ui/react'
import { memo, VFC } from 'react'
import { BiDish } from 'react-icons/bi'
import { HiFire } from 'react-icons/hi'
import { MdOutlineDinnerDining } from 'react-icons/md'
import { GiMeal } from 'react-icons/gi'
import { ImEarth } from 'react-icons/im'
import { RiTimerLine } from 'react-icons/ri'

import { Recipe } from '../../../types/recipe'
import { useFavoriteRecipe } from '../../../hooks/useFavoriteRecipe'
import { FavoriteRecipes } from '../../pages/FavoriteRecipes'
import { NotFoundMessage } from '../../atoms/NotFoundMessage'

type Props = {
    recipe: Recipe | null
    isOpen: boolean
    onClose: () => void
}

export const RecipeDetailModal: VFC<Props> = memo((props) => {
    const { recipe, isOpen, onClose } = props
    const { favRecipes, setFavRecipes, addFavorite } = useFavoriteRecipe()
    console.log(recipe)

    const onClickImage = () => {}

    const cal = parseInt(String(parseInt(String(recipe?.recipe.calories)) / parseInt(String(recipe?.recipe.yield))))

    const ingredients = recipe?.recipe.ingredientLines

    const onClickFavorite = () => addFavorite(recipe!)
    const onClickRemove = () => {
        const newFavs = favRecipes.filter((val) => {
            return val !== recipe
        })
        setFavRecipes(newFavs)
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeader>
                            <Heading>{recipe?.recipe.label}</Heading>
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <HStack bg={'gray.100'} padding={3}>
                                <Box>
                                    <Image
                                        src={recipe?.recipe.images.REGULAR.url}
                                        boxSize={'200px'}
                                        borderRadius={'md'}
                                        shadow={'md'}
                                        my={'auto'}
                                        display={'flex'}
                                        onClick={onClickImage}
                                    />
                                </Box>
                                <Box width={'230px'} display={'flex'} alignItems={'center'}>
                                    <Stack
                                        spacing={2}
                                        divider={<StackDivider borderWidth={'2px'} borderStyle={'dashed'} />}
                                        width={'full'}
                                    >
                                        <HStack>
                                            <Box w={'50%'}>
                                                <HStack>
                                                    <BiDish size={'25px'} />
                                                    <Text fontSize={'sm'}>Yield:</Text>
                                                </HStack>
                                            </Box>
                                            <Box display={'flex'} w={'50%'} justifyContent={'flex-end'}>
                                                <HStack>
                                                    <Text fontWeight={'bold'} fontSize={'xl'}>
                                                        {recipe?.recipe.yield}
                                                    </Text>
                                                    <Text>serving</Text>
                                                </HStack>
                                            </Box>
                                        </HStack>
                                        <HStack>
                                            <Box w={'50%'}>
                                                <HStack>
                                                    <HiFire size={'25px'} />
                                                    <Text fontSize={'sm'}>Calories:</Text>
                                                </HStack>
                                            </Box>
                                            <Box display={'flex'} w={'50%'} justifyContent={'flex-end'}>
                                                <HStack>
                                                    <Text fontWeight={'bold'} fontSize={'xl'}>
                                                        {cal}
                                                    </Text>
                                                    <Text>kcal</Text>
                                                </HStack>
                                            </Box>
                                        </HStack>
                                        <HStack>
                                            <Box w={'50%'}>
                                                <HStack>
                                                    <RiTimerLine size={'25px'} />
                                                    <Text fontSize={'sm'}>Total time:</Text>
                                                </HStack>
                                            </Box>
                                            <Box display={'flex'} w={'50%'} justifyContent={'flex-end'}>
                                                <HStack>
                                                    <Text fontWeight={'bold'} fontSize={'xl'}>
                                                        {recipe?.recipe.totalTime}
                                                    </Text>
                                                    <Text>minutes</Text>
                                                </HStack>
                                            </Box>
                                        </HStack>
                                        <HStack>
                                            <Box w={'50%'}>
                                                <HStack>
                                                    <MdOutlineDinnerDining size={'25px'} />
                                                    <Text fontSize={'sm'}>Meal type:</Text>
                                                </HStack>
                                            </Box>
                                            <Box display={'flex'} w={'50%'} justifyContent={'flex-end'}>
                                                <Text fontWeight={'bold'} fontSize={'lg'}>
                                                    {recipe?.recipe.mealType}
                                                </Text>
                                            </Box>
                                        </HStack>
                                        <HStack>
                                            <Box w={'50%'}>
                                                <HStack>
                                                    <GiMeal size={'25px'} />
                                                    <Text fontSize={'sm'}>Dish type:</Text>
                                                </HStack>
                                            </Box>
                                            <Box display={'flex'} w={'50%'} justifyContent={'flex-end'}>
                                                <Text fontWeight={'bold'} fontSize={'lg'}>
                                                    {recipe?.recipe.dishType}
                                                </Text>
                                            </Box>
                                        </HStack>
                                        <HStack>
                                            <Box w={'50%'}>
                                                <HStack>
                                                    <ImEarth size={'25px'} />
                                                    <Text fontSize={'sm'}>Cuisine:</Text>
                                                </HStack>
                                            </Box>
                                            <Box display={'flex'} w={'50%'} justifyContent={'flex-end'}>
                                                <Text fontWeight={'bold'} fontSize={'lg'}>
                                                    {recipe?.recipe.cuisineType}
                                                </Text>
                                            </Box>
                                        </HStack>
                                    </Stack>
                                </Box>
                            </HStack>

                            <Box left={'sm'}>
                                <Heading as="h2" size={'lg'} my={3}>
                                    ingridients
                                </Heading>
                                <Stack
                                    direction={'column'}
                                    spacing={3}
                                    divider={<StackDivider borderWidth={'2px'} borderStyle={'dashed'} />}
                                >
                                    {ingredients?.map((ingredient) => (
                                        <Checkbox size={'lg'} key={ingredient}>
                                            {ingredient}
                                        </Checkbox>
                                    ))}
                                </Stack>
                            </Box>

                            <Box left={'sm'} marginTop={6}>
                                <Heading as="h2" size={'lg'} my={3}>
                                    directions
                                </Heading>
                                <Link color={'teal.500'} href={recipe?.recipe.url} isExternal>
                                    Source Page <ExternalLinkIcon mx={'2px'} />
                                </Link>
                            </Box>
                        </ModalBody>
                        <ModalFooter>
                            <HStack>
                                {favRecipes.includes(recipe!) ? (
                                    <Button onClick={onClickRemove}>Remove from My Favorite</Button>
                                ) : (
                                    <Button onClick={onClickFavorite}>Add to My Favorite</Button>
                                )}
                            </HStack>
                        </ModalFooter>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </>
    )
})
