"use client";

import Link from "next/link";
import { useTranslation } from "../../i18n/client";
import { useState } from "react";
import { ClientFooter } from "../components/footer/client";

interface ClientPageProps {
  params: {
    lng: string;
  };
}

export default function ClientPage({ params: { lng } }: ClientPageProps) {
  console.log({ lng });
  const { t } = useTranslation(lng, "client-page", undefined);
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("counter", { count: counter })}</p>
      <div>
        <button onClick={() => setCounter(Math.max(0, counter - 1))}>-</button>
        <button onClick={() => setCounter(Math.min(10, counter + 1))}>+</button>
      </div>
      <Link href={`/${lng}`}>
        <button type="button">{t("back-to-home")}</button>
      </Link>
      <ClientFooter lng={lng} />
    </>
  );
}
