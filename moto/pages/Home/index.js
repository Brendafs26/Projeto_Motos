import React from "react";
import { View, Text,Image, StyleSheet,TouchableOpacity} from 'react-native';


import { useNavigation } from '@react-navigation/native';
import logo from '../../src/motovermelha.png';


export default function Home(){

 

    const navigation = useNavigation();

    function navegaDetalhes(){
      navigation.navigate('Sobre')
    }
  
    return( 
      <View style={styles.container}>
    <Image
    style={styles.img}
    source={logo}
    />
       
            
        <Text style={styles.TexPrincipal}>Biz 110i</Text>

        <Text style={styles.detail}>
        Com a Biz 110i é mais fácil pilotar na cidade 
        graças a seu câmbio semi automático que permite uma pilotagem mais fácil.
      </Text>
        
      <TouchableOpacity
        style={styles.btn}
        onPress={ navegaDetalhes }
      >
        <Text style={styles.text}>Detalhes</Text>
      </TouchableOpacity>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container:{
      backgroundColor:'black',
      flex:1,
      justifyContent: 'center',
      alignItems: 'center', 
    },

    img:{
      width: 400,
      height: 300,
      
    },

  detail: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 30,
    marginTop: 30,
  },

    TexPrincipal:{
     color: '#fff',
     fontSize:30,
    },

    btn: {
      marginTop: 80,
      backgroundColor: "#E2443B",
      paddingHorizontal: 140,
      paddingVertical: 10,
      borderRadius: 30,
    },
    text: {
      fontSize: 30,
      color: "#FFF",
    },

 

  })
  