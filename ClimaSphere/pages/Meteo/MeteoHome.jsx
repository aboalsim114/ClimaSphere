import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import * as Location from 'expo-location';
import { API_KEY } from '../../config.js';
import { styles } from "./MteoHomeStyle.jsx"
const weatherIcons = {
    'Clear': require('../../assets/sun.png'),
    'Clouds': require('../../assets/cloudy-day.png'),
    'Rain': require('../../assets/rain.png'),
};

export default function MeteoHome() {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecastWeather, setForecastWeather] = useState([]);

    useEffect(() => {
        fetchWeatherData();
    }, []);

    const fetchWeatherData = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            alert("Permission d'accéder à l'emplacement refusée");
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        fetchTodaysWeather(location.coords);
        fetchForecastWeather(location.coords);
    };

    const fetchTodaysWeather = (coords) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&lang=fr&APPID=${API_KEY}`)
            .then(response => response.json())
            .then(data => setCurrentWeather(data))
            .catch(error => alert("Erreur lors de la récupération des données météo"));
    };

    const fetchForecastWeather = async (coords) => {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&lang=fr&APPID=${API_KEY}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            const dailyData = data.list.filter((item, index, arr) => {
                return index === 0 || item.dt_txt.split(' ')[0] !== arr[index - 1].dt_txt.split(' ')[0];
            });
            setForecastWeather(dailyData);
        } catch (error) {
            alert("Erreur lors de la récupération des prévisions météo");
        }
    };




    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>{currentWeather ? `${currentWeather.name}, ${currentWeather.sys.country}` : 'Chargement...'}</Text>
                <Text style={styles.subHeader}>Emplacement actuel</Text>
            </View>

            {currentWeather ? (
                <View style={styles.card}>
                    <Text style={styles.temperature}>{`${Math.round(currentWeather.main.temp)}°`}</Text>
                    <Image source={weatherIcons[currentWeather.weather[0].main]} style={styles.weatherIcon} />
                    <Text style={styles.weatherDescription}>{currentWeather.weather[0].description}</Text>
                    <Text style={styles.highLow}>Max : {`${Math.round(currentWeather.main.temp_max)}°`} Min : {`${Math.round(currentWeather.main.temp_min)}°`}</Text>
                </View>
            ) : (
                <View style={styles.card}>
                    <Text style={styles.temperature}>--°</Text>
                    <Image style={styles.weatherIcon} />
                    <Text style={styles.weatherDescription}>Chargement...</Text>
                    <Text style={styles.highLow}>Max : --° Min : --°</Text>
                </View>
            )}



            <Text style={styles.forecastTitle}>Prévisions quotidiennes</Text>
            <ScrollView style={styles.dailyForecast}>
                {forecastWeather.map((forecast, index) => (
                    <View key={index} style={styles.dailyItem}>
                        <Text style={styles.dayOfWeek}>
                            {new Date(forecast.dt * 1000).toLocaleDateString('fr-FR', { weekday: 'long' })}
                        </Text>
                        <Image source={weatherIcons[forecast.weather[0].main]} style={styles.weatherIcon} />
                        <Text style={styles.dailyTemperature}>
                            {`${Math.round(forecast.main.temp_max)}° / ${Math.round(forecast.main.temp_min)}°`}
                        </Text>
                    </View>
                ))}
            </ScrollView>

        </View>
    );
}

