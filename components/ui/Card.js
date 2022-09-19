import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;
const devicewidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: devicewidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4, //android specific
    //works as elevation - ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6, //how much the shadow expands
    shadowOpacity: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
});
