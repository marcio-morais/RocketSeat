import { useAuthContext } from '@/context/auth.context';
import { Loading } from '@/screens/Loading';
import { NavigationContainer } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { SystemBars } from 'react-native-edge-to-edge';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';



export const NavigationRoutes = () => {
    const [loading, setLoading] = useState(false);
    const { token, user } = useAuthContext();    

    const Routes = useCallback(() => {        
        if(loading) {
            return <Loading setLoading={setLoading} />;
        }
        if(!user || !token) {
            return <PublicRoutes />;
        }else{
            return <PrivateRoutes />;
        }
    }, [user, token, loading]);

    return (
        <NavigationContainer>
            <SystemBars style={"light"}/>
            <Routes />
        </NavigationContainer>
    );
};
