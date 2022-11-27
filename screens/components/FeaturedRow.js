import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import tw from "twrnc";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = React.useState([]);
  React.useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured" && _id==$id] {
      ..., restaurant[]->{
        ..., dishes[]->,
        type->{
          name
        }
      }
    }[0]
    `,
        { id }
      )
      .then((data) => {
        setRestaurants(data.restaurant || []);
      });
  }, [id]);
  return (
    <View style={tw`my-2 px-4`}>
      <View
        style={tw`text-gray-500 text-xs flex-row items-center justify-between`}
      >
        <Text style={tw`font-bold text-lg`}>{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text style={tw`text-xs text-gray-500`}>{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingVertical: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {restaurants.map((r) => {
          const {
            _id,
            image,
            address,
            name,
            dishes,
            rating,
            genre,
            short_description,
            type,
            long,
            lat,
          } = r;
          return (
            <RestaurantCard
              key={_id}
              id={_id}
              imgUrl={image}
              address={address}
              title={name}
              dishes={dishes}
              rating={rating}
              short_description={short_description}
              genre={genre}
              long={long}
              lat={lat}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
