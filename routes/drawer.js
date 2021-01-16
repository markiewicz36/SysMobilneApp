import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import ChartStack from './chartStack';

const RootDrawerNavigation = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Chart: {
        screen: ChartStack,
    },
    About: {
        screen: AboutStack,
    },
})

export default createAppContainer(RootDrawerNavigation);