import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { StarIcon } from "react-native-heroicons/solid";
import { MapIcon } from "react-native-heroicons/outline";
import { urlFor } from "../../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
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
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={tw.style("mr-4 bg-white p-3 rounded-md")}
      onPress={() => {
        navigation.navigate("Restaurant", {
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
        });
      }}
    >
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        style={tw`h-36 w-64 rounded-sm`}
      />
      <View>
        <Text style={tw`font-bold text-lg pt-2 `}>{title}</Text>
      </View>
      <View style={tw.style("flex-row items-center")}>
        <StarIcon color="green" opacity={0.5} size={22} />
        <Text style={tw.style("ml-1 text-gray-500 text-sm")}>
          {rating} | {genre}
        </Text>
      </View>
      <View style={tw.style("flex-row items-center mt-2")}>
        <MapIcon color="gray" opacity={0.4} size={22} />
        <Text style={tw`text-xs text-gray-500 ml-1`}>Nearby | {address} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
