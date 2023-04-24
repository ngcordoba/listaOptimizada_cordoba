import { StyleSheet, TextInput, View, Button, Text, FlatList } from 'react-native';
import { useState } from 'react';


export default function App() {

  const [directionHome, setDirectionHome] = useState("")
  const [directions, setDirections] = useState([])

  const onHandleChangeDirection = text => {
    setDirectionHome(text)
  };

  const addDirection = () => {
    setDirections(prevState => [
      ...prevState,
      { name: directionHome, id: Math.random().toString() },
    ]);
    setDirectionHome("");
  };

  const renderItem = ({ item }) => (
    <View style={styles.renderItem}>
      <Text>{item.name}</Text>
      <Button
        title="X"
        onPress={() => console.log("Aqui se abrira un modal")}
        color={"red"}
      />
    </View>
  )


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.titleContainer}> My Directions </Text>
        <View style={styles.addItemContainer}>
          <TextInput
            placeholder='Escriba la dirección de su hogar'
            style={styles.TextInput}
            onChangeText={onHandleChangeDirection}
            value={directionHome}
          />

          <Button
            title="Add"
            onPress={addDirection} />
        </View>

      </View>

      <View styles={styles.listContainer}>
        <FlatList
          data={directions}
          renderItem={renderItem}
          keyExtractor={direction => direction.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: "#E7EAF2",
  },

  titleContainer: {
    margin: 10,
    fontSize: 30,
    fontWeight: "500",
    color: "#1E283C",
    textAlign: "center"
  },

  inputContainer: {
    height: 200,
    paddingHorizontal: 30,
    paddingTop: 80,
  },

  addItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  listContainer: {
    flex: 1,
    marginHorizontal: 30,
    marginTop: 20,
    padding: 3,
  },


  TextInput: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: 200,
  },

  renderItem: {
    alignItems: "center",
    height: 60,
    width: 300,
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  }
});
