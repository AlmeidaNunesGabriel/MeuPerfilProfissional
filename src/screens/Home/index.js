import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import styles from './style';

console.log("A tela Home foi carregada!");

function Home(){
    return(
    

        <View style={styles.container}>
             <View style={styles.imageContainer}>
                <Image 
                    source={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQGuWaeWz0FOSA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1676400098875?e=1749081600&v=beta&t=dH7nhQTmIfvMX7kcKX_Tv8R8TWKoEw6-l8n-9XJLkr0'}}
                    style={styles.imagem}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titulo}>Dados Pessoais</Text>
                <Text><Text style={styles.bold}>Nome:</Text> Gabriel Almeida Nunes</Text>
                <Text><Text style={styles.bold}>Idade:</Text> 29</Text>
                <Text><Text style={styles.bold}>E-mail:</Text> dev.almeidanunesgabriel@gmail.com</Text>
    
                <Text style={styles.titulo}>Formação Acadêmica</Text>
                <Text><Text style={styles.bold}>Fatec Praia Grande:</Text> Análise e Desenvolvimento de Sistemas. Início: 2024</Text>
                <Text><Text style={styles.bold}>Fundação Getúlio Vargas - FGV:</Text> Advocacia Empresarial. Início: 2022. Fim: 2023</Text>
                <Text><Text style={styles.bold}>Universidade Federal de Juiz de Fora - UFJF:</Text> Bacharel em Direito. Início: 2016. Fim: 2021</Text>
            </View>
        </View>
    
    )
}


export default Home;