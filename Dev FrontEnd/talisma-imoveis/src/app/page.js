import Image from "next/image";
import Inicio from "./home/page";
import SearchBanner from "@/components/SearchBanner";

export default function Home() {
  return (
    <div>
      <Inicio />

      <SearchBanner/>
    </div>
  );
}
