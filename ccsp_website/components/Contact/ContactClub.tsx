import React from "react";
import Image from "next/image";
import FormFill from "@/components/Contact/FormFill";
import { MessageSquare } from "lucide-react";

const ContactClub = () => {
  return (
    <main className="pt-24 my-20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="small-card ">
            <MessageSquare className="w-4 h-4 mr-2" />
            Contact us
          </div>
          <h1 className="text-header">Let&apos;s Get In Touch</h1>
          <p className="subtext max-w-xl">
            Ready to start a conversation? We&apos;re here to help and answer any
            questions you might have.
          </p>
          <Image src="/images/contacts/contact.png" alt="contact" width={400} height={400} />
        </div>
        <FormFill />
      </div>
    </main>
  );
};

export default ContactClub;
