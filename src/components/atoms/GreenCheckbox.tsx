// this component is not in use now

import { Checkbox } from '@chakra-ui/react'
import { memo, ReactNode, VFC } from 'react'

type Props = {
    children: ReactNode
    onChange: (index: number) => void
    index: number
}

export const GreenCheckbox: VFC<Props> = memo((props) => {
    const { children, onChange, index } = props
    return (
        <Checkbox onChange={() => onChange(index)} colorScheme={'green'} borderColor="#C7CF30" size="lg" spacing="2rem">
            {children}
        </Checkbox>
    )
})
