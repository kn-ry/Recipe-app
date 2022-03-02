import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import { memo, VFC } from 'react'

type Props = {
    id: string
    imageUrl: string
    title: string
    detail: string
    onClick: (id: string) => void
}

export const RecipeCard: VFC<Props> = memo((props) => {
    const { id, imageUrl, title, onClick } = props
    return (
        <>
            <Box
                w={'240px'}
                h={'340px'}
                bg={'whiteAlpha.500'}
                px={0}
                pt={0}
                boxShadow="6px 6px 2px 1px #a9a9a9"
                onClick={() => onClick(id)}
                _hover={{ boxShadow: '9px 9px 5px 1px #C7CF30', transform: 'translate(-5px, -5px)' }}
            >
                <VStack h={'full'}>
                    <Image src={imageUrl} boxSize={'240px'} alt="   image invalid" />
                    <Flex align={'center'} justify={'center'} w={'full'} h={'full'}>
                        <Text fontSize={'lg'} fontWeight={'bold'} textAlign={'center'}>
                            {title}
                        </Text>
                    </Flex>
                    {/* <Text fontSize={'sm'} color={'gray'}>
                        {detail}
                    </Text> */}
                </VStack>
            </Box>
        </>
    )
})
