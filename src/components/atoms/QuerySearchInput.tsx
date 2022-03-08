import { Search2Icon } from '@chakra-ui/icons'
import { IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { ChangeEvent, memo, VFC } from 'react'

type Props = {
    onClick: () => void
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    q: string
}

export const QuerySearchInput: VFC<Props> = memo((props) => {
    const { onClick, onChange, q } = props
    return (
        <InputGroup display={'flex'} mx={'auto'} size={'lg'} w={{ sm: '240px', md: '480px' }}>
            <Input placeholder="Find recipes" onChange={(e) => onChange(e)} value={q} variant={'filled'} />
            <InputRightElement>
                <IconButton aria-label="open search modal" size={'md'} icon={<Search2Icon />} onClick={onClick} />
            </InputRightElement>
        </InputGroup>
    )
})
