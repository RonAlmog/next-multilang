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
      <h1 className="px-2 text-xl">{t("title")}</h1>
      <p className="px-1 my-2">{t("counter", { count: counter })}</p>
      <div className="my-2 p-3 border border-slate-800 rounded-lg shadow-lg w-56">
        <button
          className="px-3 mx-3 border border-slate-600 rounded-md shadow-sm"
          onClick={() => setCounter(Math.max(0, counter - 1))}
        >
          -
        </button>
        <button
          className="px-3 mx-3 border border-slate-600 rounded-md shadow-sm"
          onClick={() => setCounter(Math.min(10, counter + 1))}
        >
          +
        </button>
      </div>
      <Link href={`/${lng}`}>
        <button type="button">{t("back-to-home")}</button>
      </Link>
      <ClientFooter lng={lng} />
    </>
  );
}
