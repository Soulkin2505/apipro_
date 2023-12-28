import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import axios from 'axios';

const App = () => {
  const [dogImage, setDogImage] = useState('');

  const fetchRandomDogImage = () => {
    // Realiza una solicitud GET a la API The Dog API para obtener una imagen al azar
    axios.get('https://thedogapi.com/v1/images/search')
      .then(response => {
        if (response.data && response.data[0] && response.data[0].url) {
          setDogImage(response.data[0].url);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchRandomDogImage();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Imagen de Perro al Azar</Text>
      <Image source={{ uri: dogImage }} style={{ width: 200, height: 200, marginTop: 20, marginBottom: 20 }} />
      <Button title="Nueva Imagen" onPress={fetchRandomDogImage} />
    </View>
  );
};

export default App;
