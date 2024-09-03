import { useTranslation } from "../../../i18n";
import { FooterBase } from "./footerBase";

export const Footer = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, "footer");
  return <FooterBase t={t} lng={lng} />;
};
