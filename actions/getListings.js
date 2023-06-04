import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import prisma from "@/libs/prismadb";

export default async function getListings(params) {
  try {
    let query = {};
    const {
      userId,
      guestCount,
      roomCount,
      bathroomCount,
      startDate,
      endDate,
      locationValue,
      category,
    } = params;
    if (userId) {
      query.userId = userId;
    }

    if (category) {
      query.category = category;
    }
    if (roomCount) {
      query.roomCount = { gte: +roomCount };
    }
    if (guestCount) {
      query.guestCount = { gte: +guestCount };
    }
    if (bathroomCount) {
      query.bathroomCount = { gte: +bathroomCount };
    }
    if (startDate && endDate) {
      query.NOT = {
        reservations: {
          some: {
            OR: [
              {
                endDate: { gte: startDate },
                startDate: { lte: startDate },
              },
              {
                startDate: { lte: endDate },
                endDate: { gte: endDate },
              },
            ],
          },
        },
      };
    }

    if (locationValue) {
      query.locationValue = locationValue;
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

    return listings;
  } catch (error) {
    throw new Error(error);
  }
}
