import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#121212',
    padding: 20,
  },

  btn: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 25,
    backgroundColor: '#cf9556',
    paddingVertical: 5,
    width: 200,
    marginBottom: 10
  },
  btnIcon: {
    width: 25,
    height: 25,
  },
  btnLabel: {
    backgroundColor: '#cf9556',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 25,
  },
  
  cardImg: {
    width: 320,
    height: 200,
    borderRadius: 10,
    marginBottom: 40,
  },
  
  titulo: {
    fontSize:26,
    color: '#cf9556',
    marginBottom: 15,
  },
  descricao: {
    color: '#b2b2b2',
    width: 320,
    marginBottom: 25,
  },
});

export default estilos;