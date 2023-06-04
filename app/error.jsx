"use client";

import EmptyState from "@/components/EmptyState";
import { useEffect } from "react";

export default function Error({ error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return <EmptyState title="Uh Oh" subtitle="Something went wrong!" />;
}
