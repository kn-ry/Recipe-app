import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Heading,
    ModalBody,
    VStack,
    HStack,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Select,
    ModalFooter,
    Button
} from '@chakra-ui/react'
import { ChangeEvent, Dispatch, memo, SetStateAction, VFC } from 'react'
import { GreenSlider } from '../../atoms/GreenSlider'
import { ResetIconButton } from '../../atoms/ResetIconButton'

type Props = {
    isOpen: boolean
    onClose: () => void
    q: string
    diet: string
    health: string
    cuisineType: string
    mealType: string
    dishType: string
    calSlider: number
    timeSlider: number
    setQ: Dispatch<SetStateAction<string>>
    setDiet: Dispatch<SetStateAction<string>>
    setHealth: Dispatch<SetStateAction<string>>
    setCuisineType: Dispatch<SetStateAction<string>>
    setMealType: Dispatch<SetStateAction<string>>
    setDishType: Dispatch<SetStateAction<string>>
    setCalSlider: Dispatch<SetStateAction<number>>
    setTimeSlider: Dispatch<SetStateAction<number>>
    onClickSearch: () => void
}

export const RecipeSearchModal: VFC<Props> = memo((props: Props) => {
    const {
        isOpen,
        onClose,
        q,
        diet,
        health,
        cuisineType,
        mealType,
        dishType,
        calSlider,
        timeSlider,
        setQ,
        setDiet,
        setHealth,
        setCuisineType,
        setMealType,
        setDishType,
        setCalSlider,
        setTimeSlider,
        onClickSearch
    } = props

    const onChangeQ = (e: ChangeEvent<HTMLInputElement>) => setQ(e.target.value)

    const onChangeDiet = (e: ChangeEvent<HTMLSelectElement>) => setDiet(e.target.value)

    const onChangeHealth = (e: ChangeEvent<HTMLSelectElement>) => setHealth(e.target.value)

    const onChangeCuisineType = (e: ChangeEvent<HTMLSelectElement>) => setCuisineType(e.target.value)

    const onChangeMealType = (e: ChangeEvent<HTMLSelectElement>) => setMealType(e.target.value)

    const onChangeDishType = (e: ChangeEvent<HTMLSelectElement>) => setDishType(e.target.value)

    const onChangeCalSlider = (val: number) => setCalSlider(val)

    const onChangeTimeSlider = (val: number) => setTimeSlider(val)

    const onClickResetCal = () => setCalSlider(5000)

    const onClickResetTime = () => setTimeSlider(360)

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeader alignSelf={'center'}>
                            <Heading>search recipes</Heading>
                        </ModalHeader>
                        <ModalBody>
                            <VStack spacing={6} align={'left'}>
                                <HStack>
                                    <FormControl isRequired>
                                        <FormLabel>keyword</FormLabel>
                                        <Input placeholder="example: chicken" value={q} onChange={onChangeQ} />
                                        <FormHelperText>menu, ingredient, etc...</FormHelperText>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>diet</FormLabel>
                                        <Select value={diet} onChange={onChangeDiet}>
                                            <option>all</option>
                                            <option value="balanced">balanced</option>
                                            <option value="high-fiber">high-fiber</option>
                                            <option value="high-protein">high-protein</option>
                                            <option value="low-carb">low-carb</option>
                                            <option value="low-fat">low-fat</option>
                                            <option value="low-sodium">low-sodium</option>
                                        </Select>
                                        <FormHelperText>Diet label</FormHelperText>
                                    </FormControl>
                                </HStack>
                                <HStack align={'top'}>
                                    <FormControl>
                                        <FormLabel>health</FormLabel>
                                        <Select value={health} onChange={onChangeHealth}>
                                            <option>all</option>
                                            <option value="alcohol-cocktail">alcohol-cocktail</option>
                                            <option value="crustacean-free">crustacean-free</option>
                                            <option value="dairy-free">dairy-free</option>
                                            <option value="egg-free">egg-free</option>
                                            <option value="fish-free">fish-free</option>
                                            <option value="gluten-free">gluten-free</option>
                                            <option value="soy-free">soy-free</option>
                                            <option value="vegan">vegan</option>
                                            <option value="vegetarian">vegetarian</option>
                                        </Select>
                                        <FormHelperText>Health label</FormHelperText>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>cuisine type</FormLabel>
                                        <Select value={cuisineType} onChange={onChangeCuisineType}>
                                            <option>all</option>
                                            <option value="American">American</option>
                                            <option value="Asian">Asian</option>
                                            <option value="British">British</option>
                                            <option value="Caribbean">Caribbean</option>
                                            <option value="Central%20Europe">Central Europe</option>
                                            <option value="Chinese">Chinese</option>
                                            <option value="French">French</option>
                                            <option value="Indian">Indian</option>
                                            <option value="Italian">Italian</option>
                                            <option value="Japanese">Japanese</option>
                                            <option value="Mexican">Mexican</option>
                                        </Select>
                                        <FormHelperText>The type of cuisine of the recipe</FormHelperText>
                                    </FormControl>
                                </HStack>
                                <HStack>
                                    <FormControl>
                                        <FormLabel>meal type</FormLabel>
                                        <Select value={mealType} onChange={onChangeMealType}>
                                            <option>all</option>
                                            <option value="Breakfast">Breakfast</option>
                                            <option value="Dinner">Dinner</option>
                                            <option value="Lunch">Lunch</option>
                                            <option value="Snack">Snack</option>
                                            <option value="Teatime">Teatime</option>
                                        </Select>
                                        <FormHelperText>The type of meal a recipe belongs to</FormHelperText>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>dish type</FormLabel>
                                        <Select value={dishType} onChange={onChangeDishType}>
                                            <option>all</option>
                                            <option value="Side%20dish">Side-dish</option>
                                            <option value="Soup">Soup</option>
                                            <option value="Starter">Starter</option>
                                            <option value="Sweets">Sweets</option>
                                        </Select>
                                        <FormHelperText>The dish type a recipe belongs to</FormHelperText>
                                    </FormControl>
                                </HStack>

                                <HStack>
                                    <FormControl>
                                        <FormLabel>calories</FormLabel>
                                        <GreenSlider onChange={onChangeCalSlider} sliderThumb={calSlider} max={5000} />
                                        <FormHelperText>
                                            max: {calSlider}
                                            kcal
                                        </FormHelperText>
                                    </FormControl>
                                    <ResetIconButton onClick={onClickResetCal} />
                                </HStack>

                                <HStack>
                                    <FormControl>
                                        <FormLabel>time</FormLabel>
                                        <GreenSlider onChange={onChangeTimeSlider} sliderThumb={timeSlider} max={360} />
                                        <FormHelperText>
                                            max: {timeSlider}
                                            minute
                                        </FormHelperText>
                                    </FormControl>
                                    <ResetIconButton onClick={onClickResetTime} />
                                </HStack>
                            </VStack>
                            <ModalFooter mt={6}>
                                <Button onClick={onClickSearch}>search</Button>
                            </ModalFooter>
                        </ModalBody>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </>
    )
})
