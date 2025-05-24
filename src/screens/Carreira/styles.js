import { StyleSheet } from "react-native";const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor: '#f5f5f5',
        minHeight: '100%',
    },
    textContainer: {
        width: '100%',
    },
    titulo: {
        fontSize: 28,
        color: 'black',
        marginBottom: 30,
        fontFamily: 'Orbitron-Bold',
        textAlign: 'center',
    },
    experienciaContainer: {
        width: '100%',
    },
    experienciaItem: {
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
        borderLeftColor: '#28a745',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 10,
        flexWrap: 'wrap',
    },
    empresa: {
        fontSize: 16,
        fontFamily: 'Orbitron-Bold',
        color: '#007AFF',
        flex: 1,
        marginRight: 10,
    },
    periodo: {
        fontSize: 12,
        color: '#28a745',
        fontFamily: 'Rajdhani_700Bold',
        backgroundColor: '#e8f5e8',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    cargo: {
        fontSize: 18,
        fontFamily: 'Rajdhani_700Bold',
        color: '#333',
        marginBottom: 15,
    },
    atribuicoesContainer: {
        marginTop: 10,
    },
    atribuicoesTitle: {
        fontSize: 14,
        fontFamily: 'Orbitron-Bold',
        color: '#666',
        marginBottom: 10,
    },
    atribuicao: {
        fontSize: 14,
        color: '#555',
        marginBottom: 6,
        lineHeight: 20,
        paddingLeft: 5,
    },
});

export default styles;