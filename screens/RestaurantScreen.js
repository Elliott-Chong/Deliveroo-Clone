import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";
import tw from "twrnc";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

const RestaurantScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const {
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
  } = params;
  return (
    <ScrollView>
      <View style={tw.style("relative")}>
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          style={tw`w-full h-56 bg-gray-300 p-4`}
        />
        <TouchableOpacity
          style={tw.style(
            "absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          )}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ArrowLeftIcon color={"#00CCBB"} size={20} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
