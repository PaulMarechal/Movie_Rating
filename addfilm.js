import {
  NavigationContainer,
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [list, setList] = useState([{ id: 0, txt: "coucou" }]);

  const addElement = (txt) => {
    setList((current) => [...current, { id: current.length, txt: txt }]);
  };

  useFocusEffect(() => {
    if (!route.params.addElement) return;
    addElement(route.params.addElement);
    route.params.addElement = null;
  });

  return (
    <View>
      <Button
        title="go to add page"
        onPress={() => {
          navigation.navigate("Add");
        }}
      />
      <ScrollView>
        {list.map((elm) => (
          <Text key={elm.id}>element: {elm.txt}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const AddScreen = () => {
  const [value, setValue] = useState("");
  const navigation = useNavigation();
  return (
    <View>
      <TextInput
        value={value}
        placeholder="add element..."
        onChangeText={setValue}
      />
      <Button
        title="add element !"
        onPress={() => navigation.navigate("Home", { addElement: value })}
      />
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ addElement: null }}
        />
        <Stack.Screen name="Add" component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
App.js
2 Ko