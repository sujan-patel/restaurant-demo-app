import { Navigation } from 'react-native-navigation';

import LoginPage from './src/screens/LoginPage/LoginPage';
import DetailScreen from './src/screens/DetailScreen/DetailScreen';
import MenuScreen from './src/screens/MenuScreen/MenuScreen';
import MapScreen from './src/screens/MapScreen/MapScreen';
import ItemsScreen from './src/screens/ItemsScreen/ItemsScreen';
import ImagePickerScreen from './src/screens/ImagePickerScreen/ImagePickerScreen';

// Register Screen
Navigation.registerComponent('DemoApp.LoginPage', () => LoginPage);
Navigation.registerComponent('DemoApp.DetailScreen', () => DetailScreen);
Navigation.registerComponent('DemoApp.MenuScreen', () => MenuScreen);
Navigation.registerComponent('DemoApp.MapScreen', () => MapScreen);
Navigation.registerComponent('DemoApp.ItemsScreen', () => ItemsScreen);
Navigation.registerComponent('DemoApp.ImagePickerScreen', () => ImagePickerScreen);

// Start App
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'DemoApp.LoginPage'
            }
        }
    });
});