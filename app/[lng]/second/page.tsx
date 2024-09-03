import Link from "next/link";
import { useTranslation } from "../../i18n";
import Footer from "../components/footer";

interface SecondPageProps {
  params: {
    lng: string;
  };
}
const SecondPage = async ({ params }: SecondPageProps) => {
  const lng = params.lng;
  const { t } = await useTranslation(lng, "second-page");
  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}`}>{t("back-home")}</Link>
      <Footer lng={lng} />
    </>
  );
};

export default SecondPage;
