import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import styles from './style';
import { ScrollView } from 'react-native';

console.log("A tela Home foi carregada!");

function Home(){
    return(
        

        <ScrollView contentContainerStyle={styles.container}>
             <View style={styles.imageContainer}>
                <Image 
                    source={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQGuWaeWz0FOSA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1676400098875?e=1749081600&v=beta&t=dH7nhQTmIfvMX7kcKX_Tv8R8TWKoEw6-l8n-9XJLkr0'}}
                    style={styles.imagem}
                    resizeMode='container'
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

                <Text style={styles.titulo}>Experiênca Profissional</Text>
                <Text><Text style={styles.bold}>Fortec Assessoria e Treinamento S/C LTDA | Professor | 03/2023 - Atual: </Text>Ministrar aulas de Sistemas Operacionais para ensino técnico. 
                    Ensinar Lógica de Programação (C#), para ensino técnico.
                    Desenvolver materiais de ensino, como planos de aula, apresentações de slides, exemplos de código e exercícios.
                    Conduzir aulas teóricas e práticas.
                    Estimular a participação dos alunos através de discussões, debates e resolução de problemas em grupo.
                    Criar e administrar avaliações, como testes, provas, trabalhos práticos e projetos.
                    Fornecer feedback construtivo aos alunos sobre seu desempenho e progresso individual, identificando áreas de melhoria e oferecendo orientação personalizada quando necessário.
                    Acompanhar e orientar os alunos na implementação de projetos práticos relacionados a sistemas operacionais e programação.
                </Text>
                <Text></Text>
                <Text><Text style={styles.bold}>Almeida Imagens e  Fotografia LTDA | Estágiario em Desenvolvimento | 05/2014 - 12/2014: </Text> Responsável por desenvolver e manter o site da empresa. 
                    Desenvolvimento da interface do usuário do site, utilizando tecnologias como HTML, CSS e JavaScript.
                    Desenvolver e integrar sistemas de gerenciamento de banco de dados (DBMS).
                    A tualizações regulares no site para garantir que ele esteja funcionando corretamente e atendendo aos padrões de segurança, performance e acessibilidade. 
                    Trabalhar no desenvolvimento de novos recursos e funcionalidades para o site.
                    Realizar testes rigorosos no site para identificar e corrigir problemas de funcionalidade.
                    Trabalhar em colaboração com outros membros da equipe de desenvolvimento.
                </Text>
            </View>
        </ScrollView>
    
    )
}


export default Home;