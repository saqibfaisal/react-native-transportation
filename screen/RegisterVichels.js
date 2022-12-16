import {
  ActivityIndicator,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Input from '../component/input';
import Opacity from '../component/opacity';
import database from '@react-native-firebase/database';
function RegisterVehicle() {
  let [model, setModel] = useState();
  let [isLoading, setLoading] = useState(false);
  let register = () => {
    setLoading(true);
    console.log(model);
    model.id = database().ref('vehicles/').push().key;
    database()
      .ref(`vehicles/${model.id}`)
      .set(model)
      .then(res => {
        setLoading(false);
        ToastAndroid.show(
          'Vehicle Registered Successfully',
          ToastAndroid.SHORT
        );
        console.log(res);
        setModel();
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
        setModel();
      });
    setModel({});
  };
  return (
    <>
      <View
        style={{height: '100%', backgroundColor: '#5D94AD', paddingTop: '10%'}}>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            paddingVertical: 20,
            color: '#06283D',
            fontWeight: 'bold',
          }}>
          Register Vehicle
        </Text>
        <View style={{paddingHorizontal: 30, paddingVertical: 20}}>
          <View>
            <Input
              placeholder="Vehicle Name"
              placeholderTextColor="black"
              style={styles.input}
              onChangeText={e => setModel({...model, vehicleName: e})}
            />
          </View>
          <View>
            <Input
              placeholder="Vehicle Type"
              placeholderTextColor="black"
              style={styles.input}
              onChangeText={e => setModel({...model, vehicleType: e})}
            />
          </View>
          <View>
            <Input
              placeholder="Number of Seats"
              placeholderTextColor="black"
              style={styles.input}
              onChangeText={e => setModel({...model, seats: e})}
            />
          </View>
          <View>
            <Input
              placeholder="Time"
              placeholderTextColor="black"
              style={styles.input}
              onChangeText={e => setModel({...model, Time: e})}
            />
          </View>
          <View>
            <Input
              placeholder="Starting Point"
              placeholderTextColor="black"
              style={styles.input}
              onChangeText={e => setModel({...model, start: e})}
            />
          </View>
          <View>
            <Input
              placeholder="ending Point"
              placeholderTextColor="black"
              style={styles.input}
              onChangeText={e => setModel({...model, end: e})}
            />
          </View>
          <View>
            <Opacity
              onPress={register}
              value={
                isLoading ? (
                  <ActivityIndicator color="white" size={25} />
                ) : (
                  'Register'
                )
              }
              textStyle={styles.button}
              touchableStyle={styles.btn}
            />
          </View>
        </View>
      </View>
    </>
  );
}
export default RegisterVehicle;
const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 15,
  },
  btn: {
    backgroundColor: 'black',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginTop: 15,
  },
  button: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
