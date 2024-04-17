import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function Modulo1() {
  return (
    <View style={style.estilo0}>
      <View style={style.estilo1}>1</View>
      <View style={style.estilo0}>
        <View style={style.estilo2}>
          <View style={quadrados.quadrado1}></View>
          <View style={quadrados.quadrado2}></View>
        </View>
        <View style={style.estilo3}>
          <View style={quadrados.quadrado3}></View>
          <View style={quadrados.quadrado4}></View>
        </View>
        <View style={style.estilo4}>
          <View style={quadrados.quadrado5}></View>
          <View style={quadrados.quadrado5}></View>
          <View style={quadrados.quadrado5}></View>
          <View style={quadrados.quadrado5}></View>
          <View style={quadrados.quadrado5}></View>
          <View style={quadrados.quadrado5}></View>
        </View>
      </View>
      <View style={style.estilo5}>5</View>
    </View>
  );
}

const style = StyleSheet.create({
  estilo0: {
    flex: 1,
    width: "100%",
  },
  estilo1: {
    backgroundColor: "yellow",
  },
  estilo2: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  estilo3: {
    flex: 0.2,
    backgroundColor: "white",
    flexDirection: "row",
  },
  estilo4: {
    flex: 1.2,
    backgroundColor: "green",
    flexWrap: "wrap",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around",
    gap: 8,
  },
  estilo5: {
    backgroundColor: "#4b0082",
  },
});

const quadrados = StyleSheet.create({
  quadrado1: {
    backgroundColor: "black",
    width: "30%",
    height: "50%",
  },
  quadrado2: {
    backgroundColor: "red",
    width: "45%",
    height: "10%",
  },
  quadrado3: {
    flex: 1,
    backgroundColor: "black",
    height: "85%",
  },
  quadrado4: {
    flex: 1,
    backgroundColor: "orange",
    height: "85%",
  },
  quadrado5: {
    backgroundColor: "black",
    width: "30%",
    height: "30%",
  },
});
