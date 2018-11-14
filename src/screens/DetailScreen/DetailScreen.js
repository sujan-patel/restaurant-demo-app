import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';

import restaurantImg from '../../../src/assets/restaurant-1.jpg';
import restaurantInfo from '../../../restaurantInfo.json';
import CustomButton from '../../components/UI/CustomButton/CustomButton';

class DetailScreen extends Component {

  constructor(props) {
    super(props);
  }

  redirectToDetailScreen = (screen) => {
    if (screen === 'menu') {
      Navigation.push(this.props.componentId, {
        component: {
          name: 'DemoApp.MenuScreen',
          options: {
            topBar: {
              title: {
                text: 'Menu',
                fontFamily: 'Helvetica',
                alignment: 'center'
              }
            }
          }
        }
      });
    } else {
      Navigation.push(this.props.componentId, {
        component: {
          name: 'DemoApp.MapScreen',
          options: {
            topBar: {
              title: {
                text: 'Map',
                fontFamily: 'Helvetica',
                alignment: 'center'
              }
            }
          }
        }
      });
    }    
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <View style={styles.imgContainer}>
          <Image style={styles.image} source={restaurantImg}/>
        </View>

        <View style={styles.container}>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={() => this.redirectToDetailScreen("menu")}>
              <Text style={styles.btn}>Menu</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.redirectToDetailScreen("map")}>
              <Text style={styles.btn}>Map</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.detailContainer}>
            <Text style={styles.headingText}>
              {restaurantInfo.restaurantInfo.name}
            </Text>
            <Text style={styles.address}>
              1404 De La Vina St, Santa Barbara, CA 93101, USA
            </Text>
            <Text style={styles.phoneNumber}>
              Contact Us: {restaurantInfo.restaurantInfo.phone}
            </Text>
            <Text style={styles.email}>
              Contact Email: {restaurantInfo.restaurantInfo.contactEmail}
            </Text>
            <Text style={styles.hours}>
              Close Time: 11:00
              Open Time: 11:00
            </Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      alignItems: 'center',
      marginTop: 5,
      width: "100%"
    },
    container: {
      width: 350
    },
    imgContainer: {
      width: 350,
      margin: 4
    },
    btnContainer: {
      flexDirection: "row",
      justifyContent:'space-between',
    },
    btn: {
      backgroundColor: "#1976D2",
      padding: 10,
      width: 170,
      borderRadius: 3,
      color: "#fff",
      textAlign: 'center'
    },
    image: {
      width: "100%",
      height: 150
    },
    detailContainer: {
      padding: 4
    },
    headingText: {
      fontSize: 20,
      fontWeight: "300",
      marginBottom: 5
    },
    hours: {
      color: 'red'
    }
});

export default DetailScreen;
