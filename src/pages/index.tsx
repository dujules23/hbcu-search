import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SearchBar from "../../components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <SearchBar />;
}
