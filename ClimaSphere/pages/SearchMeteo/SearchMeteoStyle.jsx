import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E3F2FD',
        alignItems: 'center',
        paddingTop: 50,
    },
    searchContainer: {
        width: '90%',
        marginBottom: 20,
    },
    searchBar: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
        fontSize: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 6,
    },
    scrollView: {
        width: '100%',
    },
    weatherCard: {
        borderRadius: 20,
        padding: 20,
        marginHorizontal: 20,
        marginBottom: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 6,

    },

    cityName: {
        fontSize: 24,
        color: '#fff',
    },

    temperature: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#fff',
    },
    weatherDescription: {
        fontSize: 24,
        color: '#fff',
    },
    temperatureRange: {
        fontSize: 18,
        color: '#fff',
        marginTop: 5,
    },

});
