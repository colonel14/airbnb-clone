import getCurrentUser from "@/actions/getCurrentUser";
import getListings from "@/actions/getListings";
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import React from "react";
import PropertiesClient from "./PropertiesClient";

export default async function Properties() {
  const currentUser = await getCurrentUser();
  const listings = await getListings({ userId: currentUser?.id });

  if (!currentUser) {
    return <EmptyState title="Unathorized" subtitle="Please login" />;
  }

  if (listings.length == 0) {
    return (
      <EmptyState
        title="No Properties found"
        subtitle="Looks like you haven't added any property yet!"
      />
    );
  }
  return <PropertiesClient listings={listings} currentUser={currentUser} />;
}
