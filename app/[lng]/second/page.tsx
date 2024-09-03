import Link from "next/link";
import { useTranslation } from "../../i18n";

interface SecondPageProps {
  params: {
    lng: string;
  };
}
const SecondPage = async ({ params }: SecondPageProps) => {
  const { t } = await useTranslation(params.lng, "second-page");
  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${params.lng}`}>{t("back-home")}</Link>
    </>
  );
};

export default SecondPage;
