import { Button, IconButton } from '@chakra-ui/react'
import { memo, VFC } from 'react'
import { FaHamburger } from 'react-icons/fa'

type Props = {
    onOpen: () => void
}

export const HamburgerIconButton: VFC<Props> = memo((props: Props) => {
    const { onOpen } = props
    return (
        <IconButton
            marginLeft={3}
            autoFocus={false}
            aria-label="hamburger icon"
            icon={<FaHamburger size={'30px'} />}
            variant={'unstyled'}
            size={'md'}
            display={{ base: 'block', md: 'none' }}
            onClick={onOpen}
        />
    )
})
