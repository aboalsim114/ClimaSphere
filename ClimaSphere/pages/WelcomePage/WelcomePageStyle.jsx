import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#ffffff',
        position: 'absolute',
        top: 60,
        alignSelf: 'center',
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
    },
    ButtonPrimary: {
        position: 'absolute',
        bottom: 100,
        left: 20,
        right: 20,
        backgroundColor: '#00BDD6',
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 30,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,

    },
    ButtonLight: {
        position: 'absolute',
        bottom: 40,
        left: 20,
        right: 20,
        backgroundColor: '#FFF',
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 30,
        elevation: 2,
        borderWidth: 4,
        borderColor: "#00BDD6",
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#222',
        fontSize: 18,
        fontWeight: '600',
    },
});
