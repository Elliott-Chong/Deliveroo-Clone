import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { urlFor } from "../../sanity";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity style={tw`mx-1 relative`}>
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        style={tw`h-20 w-20 rounded`}
      />
      <Text style={tw.style("absolute bottom-1 left-1 text-white font-bold")}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
