import Navbar from "@/components/Navbar/Navbar";
import "../styles/globals.css";
import RegistgerModal from "@/components/modals/RegistgerModal";
import LoginModal from "@/components/modals/LoginModal";
import ToasterProvider from "@/providers/ToasterProvider";
import getCurrentUser from "@/actions/getCurrentUser";
import RentModal from "@/components/modals/RentModal";
import SearchModal from "@/components/modals/SearchModal";
// import { Nunito } from "next/font/google";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

// const font = Nunito({
//   subsets: ["latin"],
// });
export default async function RootLayout({ children }) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body>
        <ToasterProvider />
        <RentModal />
        <RegistgerModal />
        <LoginModal />
        <SearchModal />
        <Navbar currentUser={currentUser} />
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
