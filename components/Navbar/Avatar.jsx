"use client";

import Image from "next/image";

export default function Avatar({ src }) {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      alt="avatar"
      src={src || "/images/placeholder.jpg"}
    />
  );
}
