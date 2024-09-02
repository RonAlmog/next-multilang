import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../i18n";

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng, "translation");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}/second`}>{t("to-second-page")}</Link>
    </div>
  );
}
