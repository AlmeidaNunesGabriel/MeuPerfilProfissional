import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    titulo:{
        fontSize: 28,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,

    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:20,
        backgroundColor: '#f5f5f5',
    },
    imageContainer: {
        width: '100%',
        alignItems: 'center', 
        marginBottom: 20,
    }, 
    bold: {
        fontWeight: 'bold',
    },
    imagem: {
        width: 150,  
        height: 150, 
        borderRadius: 75, 
        marginBottom: 20, 
    }
});

export default styles;