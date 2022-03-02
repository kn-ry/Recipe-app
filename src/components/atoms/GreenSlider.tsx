import { Box, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react'
import { memo, VFC } from 'react'

type Props = {
    onChange: (val: number) => void
    sliderThumb: number | undefined
    max: number
}

export const GreenSlider: VFC<Props> = memo((props: Props) => {
    const { onChange, sliderThumb, max } = props
    return (
        <>
            <Slider min={0} max={max} step={5} w={'80%'} onChange={onChange} value={sliderThumb}>
                <SliderTrack bg={'#E3E3E3'}>
                    <SliderFilledTrack bg={'#C7CF30'} />
                </SliderTrack>
                <SliderThumb w={12} h={6} boxShadow={'sm'} bg={'gray.100'}>
                    <Box>{sliderThumb === max ? 'MAX' : sliderThumb}</Box>
                </SliderThumb>
            </Slider>
        </>
    )
})
