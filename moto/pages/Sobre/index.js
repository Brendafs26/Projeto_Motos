
import React, { useState } from 'react';

import { View, Text, StyleSheet,TouchableOpacity,Image} from 'react-native';



export default function Sobre(){
  const [imagem, setImagem] = useState(require('../../src/motovermelha.png'));

  function vermelha(){
    setImagem(require('../../src/motovermelha.png'));
    
  }

  function cinza(){
    setImagem(require('../../src/motocinza.png'));
    
  }
 

  function azul(){

    setImagem(require('../../src/motoazul.png'));
    
  }


  return(
    <View style={styles.container}>

    <Image
      source={imagem}
      style={styles.imgUma}
    />
    


      <View style={styles.Modal}>
      <Text style={styles.Texto}>Biz 110i</Text>
      

      <View style={styles.Cores}>
     <Text style={styles.Color}>Cores</Text>
     <TouchableOpacity style={styles.Vermelho}  onPress={vermelha}></TouchableOpacity>
     <TouchableOpacity style={styles.Cinza}  onPress={cinza}></TouchableOpacity>
     <TouchableOpacity style={styles.Azul}  onPress={azul}></TouchableOpacity>
      </View>
      <Text style={styles.Textao}>
      Deixamos o porta-objetos da Biz ainda maior, você pode levar os seus cadernos, livros, compras e, claro,
       o seu capacete. 
       A sua companheira está de cara nova e pronta para o que der e vier.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'black',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  imgUma:{
    width: 400,
    height: 300,
    
  },
 
  Texto:{
    fontSize:30,
    color: "black",
    paddingLeft:25,
    paddingTop:15,
  },
  TextoMenor:{
    fontSize:20,
    paddingLeft:25,
    paddingTop:15,
  },

  Textao:{
     fontSize:15,
     maxWidth:370,
     paddingTop:25,
     paddingLeft:20,
  },

  Color:{
    fontSize:20,
    paddingLeft:25,
    paddingTop:20,
  },

  Cores:{
    
    flexDirection:'row',
    
  },

  Modal:{
    backgroundColor:'#FFF',
    width:400,
    height:250,
    borderRadius:20,
   marginTop:100,
  },

  Vermelho:{
    borderRadius:50,
    width:30,
    height:30,
    backgroundColor:"#E2443B",
    marginTop:10,
    marginLeft:210,
   

  },
  Cinza:{
    borderRadius:50,
    width:30,
    height:30,
    backgroundColor:"#b2b2b2",
    marginTop:10,
    marginLeft:5,

  }, 
  Azul:{
    borderRadius:50,
    width:30,
    height:30,
    backgroundColor:"#302a75",
    marginTop:10,
    marginLeft:5,
    

  }
})