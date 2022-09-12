import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

import imgFundo from '../../assets/fundo-tela-inicial.png';
import estilos from './estilos';

export default function TelaInicial (props) {
  return (
    <View style={ estilos.container }>
      <Image source={imgFundo} style={ estilos.cardImg } />

      <Text style={ estilos.titulo }>Conheça um pouco sobre o universo</Text>
      <Text style={ estilos.descricao }>Toque nos botões abaixo e conheça um pouco mais sobre o que existe no céu.</Text>

      <View style={ estilos.boxBotoes }>
        <Pressable 
          onPress={ () => { props.navigation.navigate("Planetas") } }
          style={ estilos.botaoContainer } 
        >
          <Text style={ estilos.botaoLabel }>Planetas</Text>
        </Pressable>
        
        <Pressable 
          onPress={ () => { props.navigation.navigate("Galáxias") } }
          style={ estilos.botaoContainer } 
        >
          <Text style={ estilos.botaoLabel }>Galáxias</Text>
        </Pressable>
        
        <Pressable 
          onPress={ () => { props.navigation.navigate("Buraco Negro") } }
          style={ estilos.botaoContainer } 
        >
          <Text style={ estilos.botaoLabel }>Buraco Negro</Text>
        </Pressable>
      </View>
    </View>
  )
}