import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import estilos from './estilos';

import imgHome from '../../assets/icon-home.png';
import imgGalaxy from '../../assets/icon-galaxy.png';
import imgGalaxias1 from '../../assets/galaxias1.png';

export default function TelaBuracoNegro (props) {
  return (
    <View style={estilos.container}>
      
      <Text style={estilos.titulo}>Buraco Negro</Text>
      
      <Text style={estilos.descricao}>Buraco negro é uma região do espaço-tempo em que o campo gravitacional é tão intenso que nada pode escapar dela. A teoria da relatividade geral prevê que uma massa suficientemente compacta pode deformar o espaço-tempo para formar um buraco negro.</Text>
      <Image source={imgGalaxias1} style={estilos.cardImg} />
      
      <Pressable 
        onPress={ () => { props.navigation.navigate("Galáxias") } } 
        style={estilos.btn}
      >
        <Image source={imgGalaxy} style={estilos.btnIcon} />
        <Text style={estilos.btnLabel}>Galáxias</Text>
      </Pressable>
      
      <Pressable 
        onPress={ () => { props.navigation.navigate("Tela inicial") } } 
        style={estilos.btn}
      >
        <Image source={imgHome} style={estilos.btnIcon} />
        <Text style={estilos.btnLabel}>Início</Text>
      </Pressable>
    </View>
  )
}