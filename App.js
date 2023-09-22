import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import React, { useState } from 'react';
//Flashlight
const Flight = ({ onBackPress }) => {
  const [isOn, setIsOn] = useState(true); // State to track flashlight status

  const toggleFlashlight = () => {
    setIsOn(!isOn); // Toggle the flashlight status
  };

  return (
    <View style={{ flexDirection: 'column', alignSelf: 'center', columnGap: 20 }}>
      <View style={{ marginBottom: 20, marginTop: 20 }}>
        {isOn ? (
          <Image style={{ height: 200, width: 200 }}
          source={{uri: 'https://scontent.fmnl25-5.fna.fbcdn.net/v/t1.15752-9/381143186_1471130300349141_8237933679359652085_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHzLIPB0aAkO1XdDaECXg6F6NPKysr37vXo08rKyvfu9YR1dots3Z5UhKkyROzom44gi8I9aNtH7h_nFjRsKA0B&_nc_ohc=59xFmKuL5_AAX8Kwfrq&_nc_ht=scontent.fmnl25-5.fna&oh=03_AdS95eR062ngnkcmapyrFwCzVu09VrSGkGPd0FUSBZ8T4w&oe=6534F0A5'}}
           />
        ) : (
          <Image style={{ height: 200, width: 200 }}
          source={{uri: 'https://scontent.fceb2-1.fna.fbcdn.net/v/t1.15752-9/381204690_1350046029057300_3538980966210904559_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGoZarl4zOnfR9hezdcRutFkvgExYUoCxWS-ATFhSgLFRqDHFe_XlyCgSQ1K0gRdTOjLtfUb_3bYlcUuGp4CB2h&_nc_ohc=XNGmSA28xT4AX_vh9NG&_nc_oc=AQlhr3TAQGa0ACBiCO52KQGD-W95N8SBCtTx491QogfhTY2NrwpFyj2JgP1SCpML4pE&_nc_ht=scontent.fceb2-1.fna&oh=03_AdRcNXX3M081uRN7upqVtWOo_DEUgaiwBHEex2RcOIheHw&oe=6534EDCB'}}
           />
        )}
      </View>

      <View style={{ marginBottom: 20 }}>
        <Button title={isOn ? "OFF" : "ON"} onPress={toggleFlashlight} />
      </View>
      <View>
        <Button title="BACK" onPress={onBackPress} />
      </View>
    </View>
  );
};
//counter
const Counter = ({ onBackPress }) => {
  const [number, setNumber] = useState(0);
  const setAdd = () => {
    setNumber(number + 1);
  };
  const setSubtract = () => {
    setNumber(number - 1);
  };

  return (
    <View>
      <Text style={{ fontSize: 300 }}>{number}</Text>
      <View style={{ flexDirection: 'row', height: 50, width: 60, gap: 100 }}>
        <Button title="-1" color="red" onPress={() => setSubtract()} />
        <Button title="+1" color="green" onPress={() => setAdd()} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button title="BACK" onPress={onBackPress} />
      </View>
    </View>
  );
};

export default function App() {
  const [flight, setFlight] = useState(false);
  const [counter, setCounter] = useState(false);

  const toggleFlight = () => {
    setFlight(!flight); // Toggle the flight state
    setCounter(false); // Disable the counter button
  };

  const toggleCounter = () => {
    setCounter(!counter); // Toggle the counter state
    setFlight(false); // Disable the F-LIGHT button
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignContent: 'center', alignSelf: 'center', justifyContent: 'space-between', columnGap: 80 }}>
        <View>
          <Button title="FLASHLIGHT" onPress={toggleFlight} disabled={flight || counter} />
        </View>
        <View></View>
        <Button title="COUNTER" onPress={toggleCounter} disabled={flight || counter} />
      </View>
      <View>
        {flight && <Flight onBackPress={toggleFlight} />}
      </View>
      <View>
        {counter && <Counter onBackPress={toggleCounter} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    margin: 20
  },
  bottonUpper: {
    color: 'green',
  },
});