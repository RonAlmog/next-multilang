import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../i18n/settings";
import { useTranslation } from "../../i18n";

type Props = { lng: string };

const Footer = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, "footer");

  return <div>Footer</div>;
};

export default Footer;
