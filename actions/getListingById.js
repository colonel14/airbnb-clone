import prisma from "@/libs/prismadb";

export default async function getListingById(params) {
  try {
    const { listingId } = params;
    console.log(listingId);
    const listing = await prisma.listing.findUnique({
      where: {
        id: listingId,
      },
      include: { user: true },
    });

    if (!listing) {
      return null;
    }
    return listing;
  } catch (error) {
    throw new Error(error);
  }
}
