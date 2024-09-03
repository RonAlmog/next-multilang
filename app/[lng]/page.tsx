import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../i18n";

interface HomePageProps {
  params: {
    lng: string;
  };
}

export default async function Home({ params }: HomePageProps) {
  const { t } = await useTranslation(params.lng, "translation");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href={`/${params.lng}/second`}>{t("to-second-page")}</Link>
    </div>
  );
}
