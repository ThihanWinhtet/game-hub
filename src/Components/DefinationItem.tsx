

import { Box, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react'

interface Props{
    term : string;
    children : ReactNode | ReactNode[]
}

const DefinationItem = ({term, children} : Props) => {
  return (
    <Box marginY={5}>
        <Heading size={'md'} color={'gray.600'} as='dt'>{term}</Heading>
        <dd>{children}</dd>
    </Box>
  )
}

export default DefinationItem