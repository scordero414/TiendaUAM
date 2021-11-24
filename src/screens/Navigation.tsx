import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { StartUp } from './auth/StartUp';
import { Auth } from './auth/Auth';
import { Profile } from './auth/Profile';

const MainNavigator = createSwitchNavigator({
    Startup: StartUp,
    Authentication: Auth,
    Dashboard: Profile
});

export default createAppContainer(MainNavigator);
