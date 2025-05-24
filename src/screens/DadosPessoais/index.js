import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import styles from "./styles";

export default function DadosPessoais() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    source={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQGuWaeWz0FOSA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1676400098875?e=1749081600&v=beta&t=dH7nhQTmIfvMX7kcKX_Tv8R8TWKoEw6-l8n-9XJLkr0'}}
                    style={styles.imagem}
                    resizeMode='cover'
                />
            </View>
            
            <View style={styles.textContainer}>
                <Text style={styles.titulo}>Dados Pessoais</Text>
                
                <View style={styles.infoContainer}>
                    <Text style={styles.infoItem}>
                        <Text style={styles.bold}>Nome:</Text> Gabriel Almeida Nunes
                    </Text>
                    <Text style={styles.infoItem}>
                        <Text style={styles.bold}>Idade:</Text> 29
                    </Text>
                    <Text style={styles.infoItem}>
                        <Text style={styles.bold}>E-mail:</Text> dev.almeidanunesgabriel@gmail.com
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

