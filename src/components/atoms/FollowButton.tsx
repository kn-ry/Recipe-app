import { ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { memo, ReactNode, VFC } from 'react'

type Props = {
    children: ReactNode
    onClick: () => void
}

export const FollowButton: VFC<Props> = memo((props: Props) => {
    const { children, onClick } = props
    return (
        <Button bg={'transparent'} size={'sm'} p={5} onClick={onClick} rightIcon={<ChevronRightIcon />}>
            {children}
        </Button>
    )
})
