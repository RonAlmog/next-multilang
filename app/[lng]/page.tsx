import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../i18n";
import { Footer } from "./components/footer";

interface HomePageProps {
  params: {
    lng: string;
  };
}

export default async function Home({ params }: HomePageProps) {
  const lng = params.lng;
  const { t } = await useTranslation(lng, "translation");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}/second`}>{t("to-second-page")}</Link>
      <br />
      <Link href={`/${lng}/client-page`}>{t("to-client-page")}</Link>
      <Footer lng={lng} />
    </div>
  );
}
