import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import tw from "twrnc";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "./components/Categories";
import FeaturedRow from "./components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = ({ navigation }) => {
  const [featuredCategories, setFeaturedCategories] = React.useState([]);
  React.useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured"] {
        ...,
        restaurents[]->,
        restaurant[]->{..., dishes[]->}
      }
      `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={tw`pt-5 bg-white`}>
      <View style={tw`flex-row items-center px-4`}>
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full mr-2`}
        />
        <View style={tw`flex-1`}>
          <Text style={tw`font-bold text-gray-400 text-xs`}>Delivery now!</Text>
          <Text style={tw`font-bold text-xl flex flex-row items-center`}>
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* Search */}
      <View style={tw`flex-row items-center mt-2 px-4`}>
        <View style={tw`flex-row bg-gray-200 p-3 items-center mr-2 flex-1`}>
          <MagnifyingGlassIcon />
          <TextInput
            style={tw`justify-center px-2`}
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* content */}
      <ScrollView contentContainerStyle={tw`bg-gray-100`}>
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        {featuredCategories.map(({ _id, name, short_description }) => {
          return (
            <FeaturedRow
              key={_id}
              id={_id}
              title={name}
              description={short_description}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
