import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

import menuInfo from '../../../menu.json';

class ItemsScreen extends Component {

    state = {
        items: []
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const categoryData = menuInfo.menu.filter((category) => {
            return category.id === this.props.itemId
        });
        if (categoryData && categoryData.length) {
            let updatedItems = categoryData[0].items.map((item) => {
                var item = Object.assign({}, item);
                item.quantity = 1;
                item.initialPrice = item.price;
                return item;
            });
            this.setState({items: updatedItems});
        }
    }

    addQuantity = (itemId) => {
        if (this.state.items) {
            let newItemsArrayObj = this.state.items.map((item) => {
                if (itemId === item.id) {
                    item.price = item.price + item.initialPrice;
                    item.quantity = item.quantity + 1;
                    return item;
                } else {
                    return item;
                }
            });
            this.setState({
                quantity: newItemsArrayObj
            });
        }
    }

    removeQuantity = (itemId) => {
        if (this.state.items) {
            let newItemsArrayObj = this.state.items.map((item) => {
                if (itemId === item.id) {
                    if (item.quantity > 1) {
                        item.price = item.price - item.initialPrice;
                        item.quantity = item.quantity - 1;
                        return item;
                    }
                } else {
                    return item;
                }
            });
            this.setState({
                quantity: newItemsArrayObj
            });
        }
    }


    render() {
        return (
            <Container>
                <Content>
                    {
                        this.state.items.map((item) => {
                            return (
                                <Card key={item.id}>
                                    <CardItem header>
                                        <Text>{item.name}</Text>
                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                            <Text>Item Price: {item.price}</Text>
                                            <Text>Item Description: {item.description}</Text>
                                        </Body>
                                    </CardItem>
                                    <View style={styles.footerBtn}>
                                        <CardItem footer button 
                                            onPress={() => this.addQuantity(item.id)}
                                            style={styles.button}
                                        >
                                            <Text>Add</Text>
                                        </CardItem>
                                        <Text style={styles.quantityTitle}>Item Quantity:</Text>
                                        <Text style={styles.quantityValue}>{item.quantity}</Text>
                                        <CardItem footer button 
                                            onPress={() => this.removeQuantity(item.id)}
                                            style={styles.button}
                                        >
                                            <Text>Remove</Text>
                                        </CardItem>
                                    </View>
                                </Card>
                            );
                        })
                    }
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    footerBtn: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        backgroundColor: "#EF5350",
        margin: 2,
        color: "#FFEBEE",
        textAlign: 'center',
        padding: 0
    },
    quantityTitle: {
        margin: 2,
        textAlign: 'center',
        padding: 10
    },
    quantityValue: {
        margin: 2,
        textAlign: 'center',
        padding: 10,
        backgroundColor: "#90CAF9"
    }
});

export default ItemsScreen;