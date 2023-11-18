import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        position: 'absolute',

    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#222',
        marginTop: 60,
    },
    subHeader: {
        fontSize: 18,
        color: '#222',
        marginBottom: 30,
    },
    input: {
        width: '80%',
        marginVertical: 10,
        padding: 15,
        borderRadius: 20,
        backgroundColor: '#2222',
        color: '#ffffff',
        borderWidth: 2,
        borderColor: '#00BDD6',
        fontSize: 16,
        shadowColor: '#222',

    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    checkbox: {
        marginRight: 8,
    },
    checkboxLabel: {
        fontSize: 16,
        color: '#ffffff',
    },
    button: {
        width: '80%',
        padding: 15,
        borderRadius: 20,
        backgroundColor: '#00BDD6',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,

    },
    buttonText: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    error: {
        color: 'red',
        alignSelf: 'flex-start',
        marginLeft: '10%',
        marginTop: 4,
    },
});
