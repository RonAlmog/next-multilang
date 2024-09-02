import Link from "next/link";
import { useTranslation } from "../../i18n";

const SecondPage = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng, "second-page");
  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}`}>{t("back-home")}</Link>
    </>
  );
};

export default SecondPage;
