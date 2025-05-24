import React from 'react';
import { View, Text,} from 'react-native';
import { ScrollView } from 'react-native';
import styles from "./styles";


export default function Formacao() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.titulo}>Formação Acadêmica</Text>
                
                <View style={styles.formacaoContainer}>
                    <View style={styles.cursoItem}>
                        <Text style={styles.instituicao}>Fatec Praia Grande</Text>
                        <Text style={styles.curso}>Análise e Desenvolvimento de Sistemas</Text>
                        <Text style={styles.periodo}>Início: 2024</Text>
                        <View style={styles.statusContainer}>
                            <Text style={styles.statusAtual}>• Em Andamento</Text>
                        </View>
                    </View>

                    <View style={styles.cursoItem}>
                        <Text style={styles.instituicao}>Fundação Getúlio Vargas - FGV</Text>
                        <Text style={styles.curso}>Advocacia Empresarial</Text>
                        <Text style={styles.periodo}>2022 - 2023</Text>
                        <View style={styles.statusContainer}>
                            <Text style={styles.statusConcluido}>• Concluído</Text>
                        </View>
                    </View>

                    <View style={styles.cursoItem}>
                        <Text style={styles.instituicao}>Universidade Federal de Juiz de Fora - UFJF</Text>
                        <Text style={styles.curso}>Bacharel em Direito</Text>
                        <Text style={styles.periodo}>2016 - 2021</Text>
                        <View style={styles.statusContainer}>
                            <Text style={styles.statusConcluido}>• Concluído</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
