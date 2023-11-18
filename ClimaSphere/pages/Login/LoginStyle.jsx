import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    backgroundImage: {
        position: 'absolute',
    },
    header: {
        fontSize: 26,
        fontWeight: "bold",
        color: '#222',
        marginBottom: 20,
    },
    subHeader: {
        fontSize: 18,
        color: '#222',
        marginBottom: 40,
    },
    inputContainer: {
        width: '80%',
        marginBottom: 15,
    },
    input: {
        backgroundColor: '#2222',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 25,
        fontSize: 16,
        borderWidth: 2,
        borderColor: '#00BDD6',
        fontSize: 16,
        shadowColor: '#222',
    },
    error: {
        color: 'red',
        alignSelf: 'flex-start',
        marginLeft: '10%',
        marginTop: 4,
    },
    button: {
        width: '80%',
        backgroundColor: '#00BDD6',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
