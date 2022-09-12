import React from 'react';
import { ScrollView, View, Text, Pressable, Image } from 'react-native';
import estilos from './estilos';

import imgHome from '../../assets/icon-home.png';
import imgGalaxy from '../../assets/icon-galaxy.png';
import imgPlanetas from '../../assets/planetas.png';
import imgPlanetas1 from '../../assets/planetas1.png';
import imgPlanetas3 from '../../assets/planeta-terra.png';

export default function TelaPlanetas (props) {
  return (
    <ScrollView>
      <View style={ estilos.container }>
        
        <Text style={ estilos.titulo }>Planetas</Text>
        
        <Text style={ estilos.descricao }>Os planetas do Sistema Solar são corpos celestes que orbitam o Sol com massa suficiente para que a sua própria gravidade possibilita que assumam uma forma arredondada, ou seja, a forma de equilíbrio estático.</Text>
        <Image source={imgPlanetas1} style={ estilos.cardImg } />
        
        <Text style={ estilos.descricao }>Os planetas do nosso Sistema Solar formam um conjunto de oito planetas que giram em torno do sol. Eles são: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno.</Text>
        <Image source={imgPlanetas} style={ estilos.cardImg } />
        
        <Text style={ estilos.descricao }>A Terra é o terceiro planeta a contar do Sol e o quinto maior do Sistema Solar. Até onde se sabe o planeta em que vivemos é o único do nosso sistema solar em condições de abrigar vida da forma como a conhecemos.</Text>
        <Image source={imgPlanetas3} style={ estilos.cardImg } />
        
        <Pressable 
          onPress={ () => { props.navigation.navigate("Galáxias") } } 
          style={ estilos.btn }
        >
          <Image source={imgGalaxy} style={ estilos.btnIcon } />
          <Text style={ estilos.btnLabel }>Galáxias</Text>
        </Pressable>

        <Pressable 
          onPress={ () => { props.navigation.navigate("Tela inicial") } } 
          style={ estilos.btn }
        >
          <Image source={imgHome} style={ estilos.btnIcon } />
          <Text style={ estilos.btnLabel }>Início</Text>
        </Pressable>

      </View>
    </ScrollView>
  )
}