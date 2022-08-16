import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import {
  Box,
  Center,
  Heading,
  Input,
  FormControl,
  Icon,
  Button,
  Checkbox,
  Text,
  HStack,
  VStack,
  WarningOutlineIcon,
  Image,
  Switch,
  useColorMode
} from "native-base";


export function Signin(){
  const { colorMode, toggleColorMode } = useColorMode();
  return(
    <Center
      height="full"
      _dark={{ bg: "black" }}
      _light={{ bg: "white" }}
    >

    <Image
      size={150}
      source={{ uri: 'http://github.com/lucasmonfre.png' }}
      alt="Foto do Usuário"
      resizeMode='contain'
    />
      
      <VStack
        width="full"
        p={10}
      >
      <Box width="full">
        <Heading 
        color="coolGray.700"
        _dark={{color: 'white'}}
        _light={{color: 'black'}}
        >
          Entrar
        </Heading>

       
          <FormControl isInvalid isRequired  >
            <FormControl.Label>E-mail</FormControl.Label>
              <Input
                placeholder="seu@email.com.br"
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="person" />}
                    size={5}
                    ml={2}
                    color="muted.400"
                  />
                }
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                E-mail inválido
              </FormControl.ErrorMessage>
          </FormControl>

          <FormControl>
            <FormControl.Label>Senha</FormControl.Label>
              <Input
                placeholder="sua senha"
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="lock" />}
                    size={5}
                    ml={2}
                    color="muted.400"
                  />
                }
              />
          </FormControl>
       
        <Button mt="7" colorScheme="purple" >
          Entrar
        </Button>

      </Box>

      <HStack mt={5} >
        <Checkbox value="agree" />
          <Text ml={3}> 
            Concordo com a politica de segurança.
          </Text>
      </HStack>
      </VStack>

      <HStack alignItems="center" space={4} alignContent="center" >
        <Text>Dark</Text>
        <Switch
          isChecked={colorMode === "light"}
          onToggle={toggleColorMode}
          aria-label={
            colorMode === "light" ? "troque para o tema escuro" : "troque para o tema claro"
          }
        />
        <Text>Light</Text>
       </HStack>
    </Center>
  )
}