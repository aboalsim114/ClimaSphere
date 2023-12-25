import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { styles } from "./SearchMeteoStyle";
import { API_KEY } from '../../config';

export default function SearchMeteo() {
    const [searchText, setSearchText] = useState('');
    const [cityWeather, setCityWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (searchText) {
            fetchCityWeather(searchText);
        } else {
            setCityWeather(null);
        }
    }, [searchText]);

    const fetchCityWeather = async (city) => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&APPID=${API_KEY}`
            );
            const data = await response.json();

            if (data.cod === 200) {
                setCityWeather({
                    name: data.name,
                    main: data.main,
                    description: data.weather[0].description,
                });
                setError(null);
            } else {
                setCityWeather(null);
                setError("ville non trouvé ");
            }
        } catch (error) {
            console.error("Error fetching city weather:", error);
            setCityWeather(null);
            setError("Error fetching data");
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Rechercher une ville"
                    style={styles.searchBar}
                    value={searchText}
                    onChangeText={setSearchText}
                />
            </View>
            <ScrollView style={styles.scrollView}>
                {error ? (
                    <Text style={styles.errorText}>{error}</Text>
                ) : (
                    cityWeather && (
                        <WeatherCard
                            cityName={cityWeather.name}
                            temp={`${Math.round(cityWeather.main?.temp)}°`}
                            description={cityWeather.description}
                            range={`${Math.round(cityWeather.main?.temp_min)}° ~ ${Math.round(cityWeather.main?.temp_max)}°`}
                            backgroundColor="#517fa4"
                        />

                    )
                )}
            </ScrollView>
        </View>
    );
}


const WeatherCard = ({ cityName, temp, description, range, backgroundColor }) => (
    <View style={[styles.weatherCard, { backgroundColor }]}>
        <Text style={styles.cityName}>{cityName}</Text>
        <Text style={styles.temperature}>{temp}</Text>
        <Text style={styles.weatherDescription}>{description}</Text>
        <Text style={styles.temperatureRange}>{range}</Text>
    </View>
);

