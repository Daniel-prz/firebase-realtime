import Image from "next/image";
import RealTimeForm from "./components/RealTimeForm";
import RealTimeDisplay from "./components/RealTimeDisplay";

export default function Home() {
  return (
    <>
      <RealTimeForm />
      <RealTimeDisplay />
    </>
  );
}
