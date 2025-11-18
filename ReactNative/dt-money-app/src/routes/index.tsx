import { useAuthContext } from '@/context/auth.context';
import { NavigationContainer } from '@react-navigation/native';
import { useCallback } from 'react';
import { SystemBars } from 'react-native-edge-to-edge';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';



export const NavigationRoutes = () => {
    const { token, user } = useAuthContext();    

    const Routes = useCallback(() => {
        if(!user || !token) {
            return <PublicRoutes />;
        }else{
            return <PrivateRoutes />;
        }
    }, [user, token]);

    return (
        <NavigationContainer>
            <SystemBars style={"light"}/>
            <Routes />
        </NavigationContainer>
    );
};
