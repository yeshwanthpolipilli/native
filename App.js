import React from 'react';
import { View, FlatList, StyleSheet, Text, Image } from 'react-native';

const DATA = [
  { id: '1', title: 'Item 1', image: require('./assets/Images/imageee.jpg') },
  { id: '2', title: 'Item 2', image: require('./assets/Images/imageee.jpg') },
  { id: '3', title: 'Item 3', image: require('./assets/Images/imageee.jpg') },
  { id: '4', title: 'Item 4', image: require('./assets/Images/imageee.jpg')},
  { id: '1', title: 'Item 1', image: require('./assets/Images/imageee.jpg') },
  { id: '2', title: 'Item 2', image: require('./assets/Images/imageee.jpg') },
  { id: '3', title: 'Item 3', image: require('./assets/Images/imageee.jpg') },
  { id: '4', title: 'Item 4', image: require('./assets/Images/imageee.jpg')},
  { id: '1', title: 'Item 1', image: require('./assets/Images/imageee.jpg') },
  { id: '2', title: 'Item 2', image: require('./assets/Images/imageee.jpg') },
  { id: '3', title: 'Item 3', image: require('./assets/Images/imageee.jpg') },
  { id: '4', title: 'Item 4', image: require('./assets/Images/imageee.jpg')},
  { id: '1', title: 'Item 1', image: require('./assets/Images/imageee.jpg') },
  { id: '2', title: 'Item 2', image: require('./assets/Images/imageee.jpg') },
  { id: '3', title: 'Item 3', image: require('./assets/Images/imageee.jpg') },
  { id: '4', title: 'Item 4', image: require('./assets/Images/imageee.jpg')},
  
  // Add more items as needed
];

const GridItem = ({ title, image }) => {
  return (
    <View style={styles.item}>
      <Image source={image} style={styles.image} />
      <Text>{title}</Text>
    </View>
  );
};

const App = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <GridItem title={item.title} image={item.image} />}
      // keyExtractor={item => item.id}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
});

export default App;
