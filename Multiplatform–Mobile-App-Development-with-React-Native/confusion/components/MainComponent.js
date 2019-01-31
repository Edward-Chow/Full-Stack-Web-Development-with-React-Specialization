import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import { View, Platform, SafeAreaView } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail }
},
{
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
});

const HomeNavigator = createStackNavigator({
    Home: { screen: Home },
},
{
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
});

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home'
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu'
        }
    }
}, {
    drawerBackgroundColor: '#D1C4E9'
});

class Main extends Component {

    render() {
        return (
            <SafeAreaView  style={{flex: 1, backgroundColor: "#512DA8"}}>
                <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                    <MainNavigator />
                </View>
            </SafeAreaView>
        );
    }
}

export default Main;