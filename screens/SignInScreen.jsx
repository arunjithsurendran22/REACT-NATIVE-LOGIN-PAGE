import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  FadeInUp,
  FadeInDown,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="w-full h-full  ">
      <Image
        source={require("../assets/images/background.png")}
        className="w-full h-full absolute"
      />
      {/*lights*/}
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          source={require("../assets/images/Hanging-Light-PNG-Transparent-Image.png")}
          className="h-72 w-36 object-contain"
        />
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          source={require("../assets/images/Hanging-Light-PNG-Transparent-Image.png")}
          className="h-36 w-36"
        />
      </View>

      <View className="h-full w-full justify-around pt-56 ">
        {/*title*/}
        <View className="flex items-center ">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className=" text-white font-bold tracking-wider text-4xl italic"
          >
            SignIn
          </Animated.Text>
        </View>
        {/*form*/}
        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="bg-black/5 p-4 rounded-2xl w-full"
          >
            <TextInput placeholder="email" placeholderTextColor={"gray"} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className="bg-black/5 p-4 rounded-2xl w-full"
          >
            <TextInput
              placeholder="password"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            className="w-full"
          >
            <TouchableOpacity className="w-full bg-sky-500 p-3 rounded-2xl mb-3">
              <Text className="text-white text-lg font-bold text-center ">
                SIGN IN
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="flex-row justify-center"
          >
            <Text className="text-gray-900 italic mx-2">
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.push("SignUp")}>
              <Text className="text-sky-500">SignUp</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;
