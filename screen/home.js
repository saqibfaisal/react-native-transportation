import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import database from '@react-native-firebase/database';
import {useEffect, useState} from 'react';
function Home({navigation}) {
  let [list, setList] = useState([]);
  let getData = () => {
    database()
      .ref('vehicles')
      .on('value', dt => {
        // console.log(dt.val())
        let li = Object.values(dt.val());
        setList([...li]);
        // console.log('li', li);
      });
  };
  // console.log('list', list)
  useEffect(() => {
    getData();
  }, []);
  return (
    <View
      style={{backgroundColor: '#5D94AD', height: '100%', paddingTop: '10%'}}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          paddingVertical: 10,
          color: '#06283D',
          fontWeight: 'bold',
          fontFamily: 'monospace',
        }}>
        Available
      </Text>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginHorizontal: 10,
            marginVertical: 0,
          }}>
          {list.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('Vehicle', item)}
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  width: '50%',
                }}>
                <View
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    borderRadius: 10,
                    backgroundColor: '#06283D',
                    borderRadius: 20,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 18,
                      paddingVertical: 5,
                    }}>
                    {' '}
                    No #{index + 1}
                  </Text>
                  <Text style={{color: 'white'}}>Id:{item.id}</Text>
                  <Text style={{color: 'white'}}>Time: {item.Time}</Text>
                  <Text style={{color: 'white'}}>
                    Vehicle Name:{item.vehicleName}
                  </Text>
                  <Text style={{color: 'white'}}>
                    Vehicle Type:{item.vehicleType}
                  </Text>
                  <Text style={{color: 'white'}}>No of Seats:{item.seats}</Text>
                  <Text style={{color: 'white'}}>Start Dest:{item.start}</Text>
                  <Text style={{color: 'white'}}>End Dest:{item.end}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
export default Home;
