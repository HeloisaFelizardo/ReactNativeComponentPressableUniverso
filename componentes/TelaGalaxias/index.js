import React from 'react';
import { ScrollView, View, Text, Pressable, Image } from 'react-native';
import estilos from './estilos';

import imgHome from '../../assets/icon-home.png';
import imgPlaneta from '../../assets/icon-planet.png';
import imgBuraco from '../../assets/icon-buraco-negro.png';
import imgGalaxias1 from '../../assets/galaxias1.png';
import imgGalaxias2 from '../../assets/galaxias2.png';

export default function TelaGalaxia (props) {
  return (
    <ScrollView>
      <View style={estilos.container}>
        
        <Text style={estilos.titulo}>Galaxias</Text>
        
        <Text style={estilos.descricao}>Na cosmologia, uma galáxia é um grande sistema, gravitacionalmente ligado, que consiste de estrelas, remanescentes de estrelas, um meio interestelar de gás e poeira, e um, importante mas insuficientemente conhecido, componente apelidado de matéria escura.</Text>
        <Image source={imgGalaxias1} style={estilos.cardImg} />
        
        <Text style={estilos.descricao}>A Via Láctea é uma galáxia espiral, da qual o Sistema Solar faz parte. Vista da Terra, aparece como uma faixa brilhante e difusa que circunda toda a esfera celeste, recortada por nuvens moleculares que lhe conferem um intrincado aspecto irregular e recortado.</Text>
        <Image source={imgGalaxias2} style={estilos.cardImg} />

        
        <Pressable 
          onPress={ () => { props.navigation.navigate("Planetas") } } 
          style={estilos.btn}
        >
          <Image source={imgPlaneta} style={estilos.btnIcon} />
          <Text style={estilos.btnLabel}>Planetas</Text>
        </Pressable>

        
        <Pressable 
          onPress={ () => { props.navigation.navigate("Buraco Negro") } } 
          style={estilos.btn}
        >
          <Image source={imgBuraco} style={estilos.btnIcon} />
          <Text style={estilos.btnLabel}>Buraco negro</Text>
        </Pressable>

        <Pressable 
          onPress={ () => { props.navigation.navigate("Tela inicial") } } 
          style={estilos.btn}
        >
          <Image source={imgHome} style={estilos.btnIcon} />
          <Text style={estilos.btnLabel}>Início</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}