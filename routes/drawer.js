import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const RootDrawerNavigation = createDrawerNavigator({
    About: {
        screen: AboutStack,
    },
    Home: {
        screen: HomeStack,
    },

})

export default createAppContainer(RootDrawerNavigation);