import getListingById from "@/actions/getListingById";
import EmptyState from "@/components/EmptyState";
import ListingClient from "./ListingClient";
import getCurrentUser from "@/actions/getCurrentUser";
import getReservations from "@/actions/getReservation";

export default async function page({ params }) {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    ("use client");
    return <EmptyState />;
  }
  return (
    <div>
      <ListingClient
        reservations={reservations}
        listing={listing}
        currentUser={currentUser}
      />
    </div>
  );
}
