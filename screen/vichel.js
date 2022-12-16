import {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Opacity from '../component/opacity';
function Vichels({navigation, route}) {
  let item = route.params;

  let [reviewList, setReviewList] = useState([
    {
      name: 'Muhammad Ammar',
      feedback: 'He is nice person very responsialbe price.',
    },
    {
      name: 'Abdul Sattar',
      feedback: 'good job boy.',
    },
    {
      name: 'Muhammad Bilal',
      feedback: 'car is very amazing.',
    },
    {
      name: 'Anas Yaqoob',
      feedback: 'keep it up.',
    },
  ]);

  console.log(item);
  return (
    <View
      style={{backgroundColor: '#5D94AD', height: '100%', paddingTop: '10%'}}>
      <View>
        <Text
          style={{
            fontSize: 32,
            color: 'black',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Vehicle: {item.vehicleName}
        </Text>
        <Text
          style={{
            color: 'black',
            borderBottomWidth: 1,
            marginTop: 15,
            marginBottom: 10,
            fontSize: 16,
          }}>
          Seats: {item.seats}
        </Text>
        <Text
          style={{
            color: 'black',
            borderBottomWidth: 1,
            marginTop: 15,
            marginBottom: 10,
            fontSize: 16,
          }}>
          Starting Destination: {item.start}
        </Text>
        <Text
          style={{
            color: 'black',
            borderBottomWidth: 1,
            marginTop: 15,
            marginBottom: 10,
            fontSize: 16,
          }}>
          End Destination: {item.end}
        </Text>
      </View>
      <View
        style={{
          height: '60%',
          paddingHorizontal: 15,
          paddingVertical: 15,
          // marginVertical: 30,
        }}>
        <Text
          style={[
            {
              color: '#023047',
              marginBottom: 10,
              fontSize: 22,
              fontWeight: 'bold',
              textAlign: 'center',
            },
          ]}>
          Review
        </Text>
        <ScrollView>
          {reviewList.map((e, i) => (
            <View
              key={i}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <Text
                style={[
                  {
                    fontStyle: 'italic',
                    fontSize: 22,
                    color: '#023047',
                    fontWeight: 'bold',
                  },
                ]}>
                {e.name}
              </Text>
              <View style={{marginTop: 5}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: 'black',
                    marginBottom: 5,
                    fontFamily: 'sans-serif',
                    fontStyle: 'italic',
                  }}>
                  Feedback
                </Text>
                <Text
                  style={[
                    {
                      color: 'black',
                      fontStyle: 'italic',
                      marginLeft: 18,
                      marginTop: 3,
                    },
                  ]}>
                  {e.feedback}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{position: 'absolute', bottom: 10, left: 20, right: 10,justifyContent:"center",alignItems:'center'}}>
        <Opacity
          onPress={() => navigation.navigate('AddBooking', item)}
          value="Book Now"
          textStyle={{
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            fontStyle: 'italic',
            paddingVertical:"5%",
            backgroundColor:"white",
            width:"100%",
            borderRadius:15,
          }}
          touchableStyle={{borderRadius: 20, paddingVertical: 10}}
        />
      </View>
    </View>
  );
}
export default Vichels;
