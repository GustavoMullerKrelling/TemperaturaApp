import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SobreScreen from "../screens/SobreScreen";
import ProdutoScreen from "../screens/ProdutoScreen";
import TempoScreen from "../screens/TempoScreenAula";

import TempoScreenAula from "../screens/TempoScreenAula";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator" // funciona como uma ID da tela, vamos usa-la para chamar esta tela depois
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen" // id da tela
        component={HomeScreen} // aqui é onde será exibido a tela do componente HomeScreen.jsx
        options={{
          title: "Home",
          tabBarIcon: "home",
        }}
      />
      <Tab.Screen
        name="ProdutoScreen"
        component={ProdutoScreen}
        options={{
          title: "Produtos",
          tabBarIcon: "cart",
        }}
      />
      <Tab.Screen
        name="SobreScreen"
        component={SobreScreen}
        options={{
          title: "Sobre",
          tabBarIcon: "information",
        }}
      />
      <Tab.Screen
        name="TempoScreen"
        component={TempoScreen}
        options={{
          title: "Tempo",
          tabBarIcon: "weather-sunny",
        }}
      />
      <Tab.Screen
        name="TempoScreenAula"
        component={TempoScreenAula}
        options={{
          title: "Tempo",
          tabBarIcon: "weather-sunny",
        }}
      />
    </Tab.Navigator>
  );
}