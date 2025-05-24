import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor: '#f5f5f5',
        minHeight: '100%',
    },
    textContainer: {
        width: '100%',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 28,
        color: 'black',
        marginBottom: 30,
        fontFamily: 'Orbitron-Bold',
        textAlign: 'center',
    },
    formacaoContainer: {
        width: '100%',
    },
    cursoItem: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
        borderLeftWidth: 4,
        borderLeftColor: '#007AFF',
    },
    instituicao: {
        fontSize: 18,
        fontFamily: 'Orbitron-Bold',
        color: '#007AFF',
        marginBottom: 8,
    },
    curso: {
        fontSize: 16,
        fontFamily: 'Rajdhani_700Bold',
        color: '#333',
        marginBottom: 8,
    },
    periodo: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    statusContainer: {
        alignItems: 'flex-start',
    },
    statusAtual: {
        fontSize: 14,
        color: '#28a745',
        fontFamily: 'Rajdhani_700Bold',
    },
    statusConcluido: {
        fontSize: 14,
        color: '#007AFF',
        fontFamily: 'Rajdhani_700Bold',
    },
});

export default styles;