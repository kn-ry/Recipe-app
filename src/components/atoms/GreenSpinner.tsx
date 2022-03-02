import { Spinner } from '@chakra-ui/react'
import { memo, VFC } from 'react'

export const GreenSpinner: VFC = memo(() => {
    return (
        <>
            <Spinner thickness="5px" speed="0.65s" color="#C7CF30" emptyColor="gray.200" size={'xl'} />
        </>
    )
})
