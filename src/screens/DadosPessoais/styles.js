import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor: '#f5f5f5',
        minHeight: '100%',
    },
    imageContainer: {
        width: '100%',
        alignItems: 'center', 
        marginBottom: 30,
    }, 
    imagem: {
        width: 180,  
        height: 180, 
        borderRadius: 90, 
        marginBottom: 20,
        borderWidth: 3,
        borderColor: '#007AFF',
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
    infoContainer: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    infoItem: {
        fontSize: 18,
        marginBottom: 15,
        lineHeight: 24,
    },
    bold: {
        fontFamily: 'Orbitron-Bold',
        color: '#007AFF',
    },
});

export default styles;