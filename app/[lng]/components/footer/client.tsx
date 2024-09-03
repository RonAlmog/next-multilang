"use client";

import { useTranslation } from "@/app/i18n/client";
import { FooterBase } from "./footerBase";

export const ClientFooter = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, "footer", undefined);
  return <FooterBase t={t} lng={lng} />;
};
