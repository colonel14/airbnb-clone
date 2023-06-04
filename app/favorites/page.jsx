import getCurrentUser from "@/actions/getCurrentUser";
import getFavoriteListings from "@/actions/getFavoriteListing";
import EmptyState from "@/components/EmptyState";
import ListingCard from "@/components/Listings/ListingCard";
import React from "react";
import FavoritesClient from "./FavoritesClient";

export default async function Favorites() {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length == 0) {
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks like you have no favorite listings"
      />
    );
  }
  return (
    <FavoritesClient
      listings={listings}
      currentUser={currentUser}
    ></FavoritesClient>
  );
}
