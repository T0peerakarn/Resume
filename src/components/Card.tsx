import React from 'react'
import { Box, PseudoBox, Heading, Text, Flex, Link } from '@chakra-ui/core'
import { IDisplay } from '../interface'

const boxConfig = {
  boxShadow: 'md',
  rounded: 'md',
}

const linkAnimation = {
  _hover: { boxShadow: 'xl' },
  transition: '0.2s',
}

const padding = {
  p: 6,
}

const UnlinkedCard = (props) => {
  let config = props._isLink
    ? { ...boxConfig, ...linkAnimation }
    : { ...boxConfig }
  if (props.img) {
    return (
      <PseudoBox {...config}>
        <picture>
          <source type="image/webp" srcSet={`/${props.img}.webp`} />
          <source type="image/jpeg" srcSet={`/${props.img}.jpg`} />
          <img src={`/${props.img}.jpg`} alt="" />
        </picture>
        <Box {...padding}>{props.children}</Box>
      </PseudoBox>
    )
  }
  return (
    <PseudoBox {...padding} {...config}>
      {props.children}
    </PseudoBox>
  )
}

export const Card = (props) => (
  <>
    {props.href ? (
      <Link _hover={null} isExternal href={props.href}>
        <UnlinkedCard {...props} _isLink={{}} />
      </Link>
    ) : (
      <UnlinkedCard {...props} />
    )}
  </>
)

export const Display = (props: IDisplay) => (
  <Card {...props}>
    <Heading color="gray.600" size="sm">
      {props.role}
    </Heading>
    <Flex justify="space-between">
      <Heading size="md">{props.name}</Heading>
      <Text color="gray.500">{props.year}</Text>
    </Flex>
    <Text color="gray.800" mt={2}>
      {props.desc}
    </Text>
  </Card>
)
