import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {useContext}
 from "react"
 import {GlobalContext} from "../contexts/GlobalContext"  
  export default function SocialProfileWithImage({user}) {
    const context = useContext(GlobalContext)
    const {idSelected, setIdSelected} = context

    return (
      
      <Center 
      py={6}
      >        
        <Box
          w={'250px'}
          bg={useColorModeValue('white', 'gray.800')}
          border={idSelected===user.id?"2px solid darkred":"none"}
          background={idSelected===user.id?"rgb(141, 10, 10, 0.4)":"none"}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              `https://picsum.photos/seed/${user.id}/200/300`
            }
            objectFit={'cover'}
          />
          <Flex 
          justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={
                `https://picsum.photos/seed/${user.name}/200/300`
              }
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {user.name}
              </Heading>
             
            </Stack>
  
            
  
            <Button
              onClick={()=>setIdSelected(user.id)}
              w={'full'}
              mt={8}
              bg={useColorModeValue('rgb(0, 0, 0, 0.6)', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-10px)',
                boxShadow: 'lg',
              }}>
              Follow
            </Button>
          </Box>
        </Box>
      </Center>
    
    );
  }