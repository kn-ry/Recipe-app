import { memo, VFC } from 'react'
import { IconButton } from '@chakra-ui/react'
import { RepeatClockIcon } from '@chakra-ui/icons'

type Props = {
    onClick: () => void
}

export const ResetIconButton: VFC<Props> = memo(
    (props: Props) => {
        const { onClick } = props
        return (
            <>
                <IconButton
                    aria-label="resetButton"
                    icon={<RepeatClockIcon />}
                    variant={'unstyled'}
                    onClick={onClick}
                    size={'2xl'}
                />
            </>
        )
    }
)
