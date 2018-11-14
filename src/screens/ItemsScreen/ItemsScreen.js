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
                return item;
            });
            this.setState({items: updatedItems});
        }
    }

    addQuantity = (itemId) => {
        // this.state.items.filter((item) => {
        //     return item.id === itemId ? item.quantity
        // })
        this.setState(prevState => ({
            quantity: prevState.items
        }));
    }

    addRemove = (itemId) => {
        if (this.state.quantity > 1) {
            this.setState(prevState => ({
                quantity: prevState.quantity - 1
            }));
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
                                        <Text style={styles.quantity}>Item Quantity: {item.quantity}</Text>
                                        <CardItem footer button 
                                            onPress={() => this.addRemove(item.id)}
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
        backgroundColor: "#1976D2",
        margin: 2,
        color: "#fff",
        textAlign: 'center'
    },
    quantity: {
        margin: 2,
        textAlign: 'center'
    }
});

export default ItemsScreen;