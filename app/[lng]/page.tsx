import Image from "next/image";
import Link from "next/link";

export default function Home({ params: { lng } }) {
  return (
    <div>
      <h1>Hi there!</h1>
      <Link href={`/${lng}/second`}>Second page</Link>
    </div>
  );
}
