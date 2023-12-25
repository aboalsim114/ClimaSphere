import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eef6fd',
    },
    headerContainer: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        alignItems: 'center',
        backgroundColor: '#4c8bf5',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    subHeader: {
        fontSize: 16,
        color: '#fff',
    },
    card: {
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        alignItems: 'center',
        elevation: 4,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: '#000',
        shadowOffset: { height: 2, width: 0 },
    },
    temperature: {
        fontSize: 72,
        color: '#333',
    },
    weatherDescription: {
        fontSize: 20,
        color: '#666',
        fontWeight: 'bold',
    },
    highLow: {
        fontSize: 16,
        color: '#666',
    },
    forecastTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 20,
        marginTop: 10,
    },
    hourlyForecast: {
        paddingLeft: 20,

    },
    hourlyItem: {
        width: 75,
        alignItems: 'center',
        marginRight: 10,
    },
    hourlyTime: {
        fontSize: 16,
        color: '#333',
    },
    weatherIcon: {
        width: 50,
        height: 50,
        marginVertical: 10,
    },
    hourlyTemperature: {
        fontSize: 16,
        color: '#333',
    },
    dailyForecast: {
        marginTop: 10,
    },
    dailyItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 20,
        elevation: 2,
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowColor: '#000',
        shadowOffset: { height: 2, width: 0 },
    },
    dayOfWeek: {
        fontSize: 18,
        color: '#333',
    },
    dailyTemperature: {
        fontSize: 18,
        color: '#333',
    },
});
