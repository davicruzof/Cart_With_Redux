import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View, FlatList } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import {
  useFonts,
  Inter_300Light,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

const products = [
  {
    id: 1,
    name: 'Comestics Line',
    price: '3.000,00',
    photo: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 2,
    name: 'Hair Line',
    price: '2.680,00',
    photo: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 3,
    name: 'Body Comestic Line',
    price: '1.279,90',
    photo: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 4,
    name: 'SkinCare Gold',
    price: '2.537,00',
    photo: 'https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 5,
    name: 'Make Skin',
    price: '8.000,00',
    photo: 'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 6,
    name: 'Shampoo Vegan',
    price: '399,00',
    photo: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
  },
];

const product = ({ item }) => {
  return (<View style={styles.containerProduct}>
  <Image source={{ uri: item.photo }} style={styles.photoProduct} />
  <Text style={styles.title}>{item.name}</Text>
  <View style={styles.containerProductItem}>
    <View style={styles.info_product}>
      <Text style={styles.price}>R$: {item.price}</Text>
    </View>
    <View style={styles.containerButton}>
      <TouchableOpacity
        style={styles.buttonAdd}
      >
        <AntDesign name="shoppingcart" size={20} color="white" />
      </TouchableOpacity>
    </View>
  </View>
</View>)
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_300Light,Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <View style={styles.containerBemVindo}>
            <Text style={styles.bemVindo}>Olá Bem-Vindo,</Text>
            <Text style={styles.userName}>Davi</Text>
          </View>
          <TouchableOpacity style={styles.buttonCart}>
            <Feather name="shopping-bag" size={25} color="#979797" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={products}
          renderItem={product}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerProduct: {
    backgroundColor: '#fff',
    elevation: 3,
    borderRadius: 10,
    width: '45%',
    margin: '2%',
  },
  photoProduct: {
    height: 180,
    width: '100%',
    borderRadius: 10,
    resizeMode: 'cover'
  },
  containerProductItem: {
    flexDirection: 'row', 
    marginTop: 5,
    width: '100%',
    justifyContent: 'space-between'
  },
  info_product: {
    padding: 10,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    color: '#151515',
    marginLeft: 10,
    marginTop: 10,
    fontFamily: 'Inter_700Bold',
  },
  price: {
    color: '#979797',
    marginTop: 5,
    fontFamily: 'Inter_300Light'
  },
  buttonAdd: {
    height: 40,
    backgroundColor: '#F24D06',
    borderRadius: 4,
    paddingHorizontal: 13,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomEndRadius: 10,
  },
  containerButton: {
    alignItems: 'flex-end', 
    justifyContent: 'flex-end'
  },
  header: {
    flexDirection: 'row',
    height: 150,
    paddingTop: 50,
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
  },
  bemVindo: {
    fontSize: 15, 
    fontFamily: 'Inter_300Light'
  },
  userName: {
    fontSize: 25, 
    fontFamily: 'Inter_700Bold'
  },
  containerBemVindo: {
    width: '40%',
  },
  buttonCart: {
    padding: 10,
  }
});
