import React from 'react';
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from '@chakra-ui/react';

const Homepage = () => {
  return (
    <Container maxW='xl' centerContent>
      <Box
         d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
           <Text fontSize='4xl' fontFamily="work sans" color='black'>Talk-A-Tive</Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList mb="1rem">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Sing up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    </Container>
  )
}

export default Homepage
