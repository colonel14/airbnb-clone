import getCurrentUser from "@/actions/getCurrentUser";
import EmptyState from "@/components/EmptyState";
import React from "react";
import ReservationsClient from "./ReservationsClient";
import getReservations from "@/actions/getReservation";

export default async function ReservationsPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unathorized" subtitle="Please login" />;
  }

  const reservations = await getReservations({ authorId: currentUser.id });

  if (reservations.length == 0) {
    return (
      <EmptyState
        title="No reservations found"
        subtitle="Looks like you have no reservations on your property"
      />
    );
  }
  return (
    <div>
      <ReservationsClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </div>
  );
}
