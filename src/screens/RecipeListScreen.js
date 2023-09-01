import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";

const RecipeListScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
            {/* render header */}
            <Header headerText={"Hi, John "} headerIcon={"bell-o"} />

            {/* Search Filter */}
            <SearchFilter icon="search" placeholder={"Enter your fav recipe"} />

            {/* Categories filter */}

            <View style={{ marginTop: 22 }}>
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
                <CategoriesFilter />
            </View>

            {/* Recipe List Filter */}

            <View style={{ marginTop: 22, flex: 1 }}>
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
                <RecipeCard />
            </View>
        </SafeAreaView>
    );
};

export default RecipeListScreen;

const styles = StyleSheet.create({});
