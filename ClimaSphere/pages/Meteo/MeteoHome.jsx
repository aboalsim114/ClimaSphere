import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

// Icônes factices pour l'illustration
const weatherIcons = {
    'day-sunny': require('../../assets/sun.png'),
    'cloudy': require('../../assets/cloudy-day.png'),
    'rain': require('../../assets/rain.png'),
};

const weatherData = {
    hourly: [
        { time: 'Maintenant', temp: 19, icon: 'day-sunny' },
        { time: '16H', temp: 20, icon: 'cloudy' },
        { time: '17H', temp: 18, icon: 'rain' },
        // ... ajoutez d'autres données horaires
    ],
    daily: [
        { day: 'Lundi', high: 21, low: 14, icon: 'cloudy' },
        { day: 'Mardi', high: 22, low: 13, icon: 'day-sunny' },
        { day: 'Mercredi', high: 23, low: 16, icon: 'rain' },
        // ... ajoutez d'autres données quotidiennes
    ],
};

export default function MeteoHome() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Paris, France</Text>
                <Text style={styles.subHeader}>Emplacement actuel</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.temperature}>19°</Text>
                <Text style={styles.weatherDescription}>Légèrement Nuageux</Text>
                <Text style={styles.highLow}>Max : 21° Min : 14°</Text>
            </View>

            <Text style={styles.forecastTitle}>Prévisions horaires</Text>
            <ScrollView horizontal={true} style={styles.hourlyForecast} showsHorizontalScrollIndicator={false}>
                {weatherData.hourly.map((item, index) => (
                    <View key={index} style={styles.hourlyItem}>
                        <Text style={styles.hourlyTime}>{item.time}</Text>
                        <Image source={weatherIcons[item.icon]} style={styles.weatherIcon} />
                        <Text style={styles.hourlyTemperature}>{item.temp}°</Text>
                    </View>
                ))}
            </ScrollView>

            <Text style={styles.forecastTitle}>Prévisions quotidiennes</Text>
            <ScrollView style={styles.dailyForecast}>
                {weatherData.daily.map((item, index) => (
                    <View key={index} style={styles.dailyItem}>
                        <Text style={styles.dayOfWeek}>{item.day}</Text>
                        <Image source={weatherIcons[item.icon]} style={styles.weatherIcon} />
                        <Text style={styles.dailyTemperature}>{item.high}° / {item.low}°</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
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
