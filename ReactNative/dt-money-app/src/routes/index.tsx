import { NavigationContainer } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { SystemBars } from 'react-native-edge-to-edge';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';



export const NavigationRoutes = () => {
    const [user, setUser] = useState(null);

    const Routes = useCallback(() => {
        return user ? <PrivateRoutes /> : <PublicRoutes />;
    }, [user]);

    return (
        <NavigationContainer>
            <SystemBars style={"light"}/>
            <Routes />
        </NavigationContainer>
    );
};
