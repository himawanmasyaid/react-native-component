import { RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";


export type RootStackParamList = {
    splash : undefined,
    login : undefined,
    home : { name: string },
}

// Routes
export type HomeScreenRouteProps = RouteProp<RootStackParamList, "home">


