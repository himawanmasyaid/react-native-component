import { RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";


export type RootStackParamList = {
    splash : undefined,
    login : undefined,
    home : { name: string },
    text : undefined,
    textinput : undefined,
    card : undefined,
    statusbar : undefined,
}

// Routes
export type HomeScreenRouteProps = RouteProp<RootStackParamList, "home">


