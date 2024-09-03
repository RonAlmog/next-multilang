import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../../i18n/settings";

export const FooterBase = ({ t, lng }: { t: any; lng: string }) => {
  return (
    <footer className="mt-10">
      <span>{t("languageSwitcher", lng)}</span>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          );
        })}
    </footer>
  );
};
