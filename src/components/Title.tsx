import React from 'react'

import { Box, Flex, Heading } from '@chakra-ui/core'

export const Title = (props) => (
  <Flex alignItems="center">
    <Box mx="auto" width={[21 / 24, 21 / 24, 20 / 24, 20 / 24]} mt={50}>
      <Heading size={props.size} mb={4}>
        {props.title}
      </Heading>
    </Box>
  </Flex>
)

export const Name = (props) => (
  <Flex alignItems="center">
    <Box
      mx="auto"
      width={[21 / 24, 21 / 24, 20 / 24, 20 / 24]}
      mt={[0, 30, 50, 50]}
    >
      <Box display={{ sm: 'flex' }} justifyContent="space-between">
        <Heading mb={4}>{props.name}</Heading>
        <Box textAlign="end">
          <Heading size="sm" color="gray.500">
            {props.phone}
          </Heading>
          <Heading size="sm" color="gray.500">
            {props.email}
          </Heading>
          <Heading size="sm" color="gray.500">
            {props.address}
          </Heading>
        </Box>
      </Box>
    </Box>
  </Flex>
)
