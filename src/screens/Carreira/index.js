import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import styles from "./styles";

export default function Carreira() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.titulo}>Experiência Profissional</Text>
                
                <View style={styles.experienciaContainer}>
                    <View style={styles.experienciaItem}>
                        <View style={styles.header}>
                            <Text style={styles.empresa}>Fortec Assessoria e Treinamento S/C LTDA</Text>
                            <Text style={styles.periodo}>03/2023 - Atual</Text>
                        </View>
                        <Text style={styles.cargo}>Professor</Text>
                        
                        <View style={styles.atribuicoesContainer}>
                            <Text style={styles.atribuicoesTitle}>Principais atividades:</Text>
                            <Text style={styles.atribuicao}>• Ministrar aulas de Sistemas Operacionais para ensino técnico</Text>
                            <Text style={styles.atribuicao}>• Ensinar Lógica de Programação (C#) para ensino técnico</Text>
                            <Text style={styles.atribuicao}>• Desenvolver materiais de ensino, planos de aula e apresentações</Text>
                            <Text style={styles.atribuicao}>• Conduzir aulas teóricas e práticas</Text>
                            <Text style={styles.atribuicao}>• Estimular participação através de discussões e resolução de problemas</Text>
                            <Text style={styles.atribuicao}>• Criar e administrar avaliações e projetos práticos</Text>
                            <Text style={styles.atribuicao}>• Fornecer feedback construtivo e orientação personalizada</Text>
                            <Text style={styles.atribuicao}>• Acompanhar projetos relacionados a sistemas operacionais e programação</Text>
                        </View>
                    </View>

                    <View style={styles.experienciaItem}>
                        <View style={styles.header}>
                            <Text style={styles.empresa}>Almeida Imagens e Fotografia LTDA</Text>
                            <Text style={styles.periodo}>05/2014 - 12/2014</Text>
                        </View>
                        <Text style={styles.cargo}>Estagiário em Desenvolvimento</Text>
                        
                        <View style={styles.atribuicoesContainer}>
                            <Text style={styles.atribuicoesTitle}>Principais atividades:</Text>
                            <Text style={styles.atribuicao}>• Desenvolver e manter o site da empresa</Text>
                            <Text style={styles.atribuicao}>• Desenvolvimento de interface usando HTML, CSS e JavaScript</Text>
                            <Text style={styles.atribuicao}>• Desenvolver e integrar sistemas de gerenciamento de banco de dados</Text>
                            <Text style={styles.atribuicao}>• Realizar atualizações para garantir segurança e performance</Text>
                            <Text style={styles.atribuicao}>• Desenvolver novos recursos e funcionalidades</Text>
                            <Text style={styles.atribuicao}>• Realizar testes para identificar e corrigir problemas</Text>
                            <Text style={styles.atribuicao}>• Colaborar com outros membros da equipe de desenvolvimento</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

