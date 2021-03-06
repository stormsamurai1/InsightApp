import React, { useState } from 'react'

import { Container } from '../../global'

import { useNavigation } from '@react-navigation/native'

import { LogoContainer,
         FirstLogoText,
         SecondLogoText,
         DataContainer,
         InputContainer,
         InputName,
         Input,
         ButtonContainer,
         Button,
         ButtonText } from './styles.js'

export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passVisibility, setPassVisibility] = useState(true)

    const navigator = useNavigation()

    function navigateToHome(){
        navigator.navigate('Home')
    }
    
    return(
        <Container>
            <LogoContainer>
                <FirstLogoText>Job</FirstLogoText>
                <SecondLogoText>Hub</SecondLogoText>
            </LogoContainer>
            
            <DataContainer>
                <InputContainer>
                    <InputName>Email</InputName>
                    <Input placeholder="Digite seu email..."
                            placeholderTextColor="#000000"
                            onChange = {(e) => setEmail(e.target.value)}
                    />
                </InputContainer>
                <InputContainer>
                    <InputName>Password</InputName>
                    <Input placeholder="Digite sua senha..." 
                            secureTextEntry={passVisibility}
                            placeholderTextColor="#000000"
                            onChange = {(e) => setPassword(e.target.value)}
                    />    
                </InputContainer>
            
                <ButtonContainer>
                    <Button onPress={() => navigateToHome()}>
                        <ButtonText>Entrar</ButtonText>
                    </Button>
                    <Button>
                        <ButtonText>Inscreva-se</ButtonText>
                    </Button>
                </ButtonContainer>
            </DataContainer>
        </Container>
    )
}