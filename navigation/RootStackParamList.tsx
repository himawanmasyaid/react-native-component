import { RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";


export type RootStackParamList = {
    splash : undefined,
    login : undefined,
    main : undefined,
    home : { name: string },
    feature : undefined,
    text : undefined,
    textinput : undefined,
    card : undefined,
    statusbar : undefined,
    dropdown : undefined,
    people : undefined,
    people_detail : PeopleModel,
}

// Routes
export type HomeScreenRouteProps = RouteProp<RootStackParamList, "home">


