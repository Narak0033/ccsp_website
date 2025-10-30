import React from "react";
import Image from "next/image";
import FormFill from "@/components/Contact/FormFill";
import { MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";

const ContactClub = () => {
  const t = useTranslations("Contact");
  return (
    <main className="my-20">
      <div data-aos="fade-up" className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="small-card ">
            <MessageSquare className="w-4 h-4 mr-2" />
           {t("badge")}
          </div>
          <h1 className="text-header">{t("title")}</h1>
          <p className="subtext max-w-xl">
            {t("des")}
          </p>
          <Image src="/images/contacts/contact.webp" alt="contact" width={400} height={400} />
        </div>
        <FormFill />
      </div>
    </main>
  );
};

export default ContactClub;
