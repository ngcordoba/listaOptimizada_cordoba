import { StyleSheet, TextInput, View, Button, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from './src/components/Modal'
import { useState } from 'react';


export default function App() {

  const [directionHome, setDirectionHome] = useState("");
  const [directions, setDirections] = useState([]);
  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false);



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

  const onHandleModal = item => {
    setItemSelected(item)
    setModalVisible(true)
  };

  const onHandleDelete = item => {
    setDirections(prevState => prevState.filter(element => element.name !== item.name))
    setModalVisible(!modalVisible)
  };

  const renderItem = ({ item }) => (
    <View style={styles.renderItem}>
      <Text>{item.name}</Text>
      <TouchableOpacity title='Eliminar' onPress={() => onHandleModal(item)}>
        <Icon
          name='delete'
          size={30}
          color="red"
        />
      </TouchableOpacity>
    </View>
  )


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.titleContainer}> My Directions </Text>
        <View style={styles.addItemContainer}>
          <Icon
            name='location-pin'
            size={26}
            style={styles.IconLocation}
          />
          <TextInput
            placeholder='Agregue una dirección'
            onChangeText={onHandleChangeDirection}
            value={directionHome}
          />

          <View style={styles.addButtonContainer}>
            <Icon
              name='add'
              size={30}
              onPress={addDirection} />
          </View>
        </View>

      </View>

      <View styles={styles.listContainer}>
        <FlatList
          data={directions}
          renderItem={renderItem}
          keyExtractor={direction => direction.id}
        />
      </View>

      <Modal
        isVisible={modalVisible}
        actionDeleteItem={() => onHandleDelete(itemSelected)}
        itemSelected={itemSelected}
      />
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
    margin: 10
  },

  IconLocation: {
    marginLeft: 20,
  },

  addItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 55,
    backgroundColor: "white",
    borderRadius: 10,
  },

  addButtonContainer: {
    alignSelf: 'flex-end',
    borderRadius: 10,
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',

  },

  listContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },


  TextInput: {
    height: 50,
    width: 220,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,

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
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  }
});
