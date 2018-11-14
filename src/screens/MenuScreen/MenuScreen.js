import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Text, StyleSheet, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

import menuInfo from '../../../menu.json';
import menuImages from './menuImg';

class MenuScreen extends Component {

  constructor(props) {
    super(props);
  }

  redirectToScreen = (itemId) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'DemoApp.ItemsScreen',
        passProps: {
          itemId: itemId
        },
        options: {
          topBar: {
            title: {
              text: 'Items'
            }
          }
        }
      }
    });
  };

  render() {
    const menuList = menuInfo.menu.map((categoryName) => {
      return (
        <TouchableOpacity 
          onPress={() => this.redirectToScreen(categoryName.id)}
          style={styles.boxContainer} 
          key={categoryName.id}
        >
          <ImageBackground source={menuImages[categoryName.id].imgPath} style={styles.itemContainer}>
            <Text style={styles.categoryTitle}>{categoryName.name}</Text>
          </ImageBackground>
        </TouchableOpacity>
      );
    });

    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          {menuList}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    boxContainer: {
      width: "100%",
      height: 150,
      borderWidth: 0.5,
      borderColor: "black",
      marginBottom: 2
    },
    itemContainer: {
      width: "100%",
      height: "100%",
      justifyContent: 'center',
      alignItems: 'center'
    },
    categoryTitle: {
      color: 'white',
      fontSize: 23
    }
});


export default MenuScreen;