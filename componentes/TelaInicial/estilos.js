import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#121212',
    padding: 20,
  },
  
  cardImg: {
    width: 320,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  
  titulo: {
    fontSize:26,
    color: '#cf9556',
    marginBottom: 5,
  },
  descricao: {
    color: '#b2b2b2',
    width: 320,
    marginBottom: 25,
  },

  boxBotoes: {
    flexDirection: "row",
  },  

  botaoContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#cf9556',
    margin: 5,
    borderRadius: 20,
  },
  botaoLabel: {
    color: '#252535',
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default estilos;