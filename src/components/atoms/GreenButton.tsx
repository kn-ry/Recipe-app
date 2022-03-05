// this component is not in use now

import { Button } from '@chakra-ui/react'
import { memo, ReactNode, VFC } from 'react'

type Props = {
    children: ReactNode
    onClick: () => void
    width?: string
    loading?: boolean
    disabled?: boolean
}

export const GreenButton: VFC<Props> = memo((props) => {
    const { children, onClick, width, loading = false, disabled = false } = props
    return (
        <Button bg="#C7CF30" onClick={() => onClick()} w={width} isLoading={loading} disabled={disabled || loading}>
            {children}
        </Button>
    )
})
