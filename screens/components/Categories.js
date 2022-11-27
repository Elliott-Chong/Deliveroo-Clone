import { View, Text, ScrollView } from "react-native";
import React from "react";
import sanityClient from "../../sanity";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type=="category"]
    `
      )
      .then((data) => setCategories(data));
  }, []);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {categories.map((c) => {
        const { name, image, _id } = c;
        return <CategoryCard key={_id} imgUrl={image} title={name} />;
      })}
    </ScrollView>
  );
};

export default Categories;
