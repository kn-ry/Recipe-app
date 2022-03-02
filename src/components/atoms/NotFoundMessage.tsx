import { Center, Stack, Text } from '@chakra-ui/react'
import { memo, ReactNode, VFC } from 'react'

type Props = {
    title: string
    children: ReactNode
}

export const NotFoundMessage: VFC<Props> = memo((props: Props) => {
    const { title, children } = props
    return (
        <>
            <Center h={'50vh'}>
                <Stack align={'center'}>
                    <Text fontSize="xl">{title}</Text>
                    <Text fontSize="xl">{children}</Text>
                </Stack>
            </Center>
        </>
    )
})
