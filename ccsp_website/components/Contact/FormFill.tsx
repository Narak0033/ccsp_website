"use client";

import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const FormFill = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setLoading(false);
      if (res.ok) {
        setSuccess(true);
        setForm({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        alert("Failed to send message");
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      alert("Something went wrong!");
    }
  };

  return (
    <section>
      <Card className="relative bg-[#0f142ed9] border-gray-500 text-white overflow-hidden px-8 py-20 md:py-18">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Send us a message</h2>
          <p className="text-shadow-amber-50 text-sm">
            Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label-style text-white">First Name</label>
              <Input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="bg-[#0f142ed9] text-white [&::placeholder]:text-white border-gray-400"
                required
              />
            </div>

            <div>
              <label className="label-style text-white">Last Name</label>
              <Input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="bg-[#0f142ed9] text-white [&::placeholder]:text-white border-gray-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="label-style text-white">Email Address</label>
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="bg-[#0f142ed9] text-white [&::placeholder]:text-white border-gray-400"
              required
            />
          </div>

          <div>
            <label className="label-style text-white">Message</label>
            <Textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message here."
              className="bg-[#0f142ed9] text-white [&::placeholder]:text-white border-gray-400"
              required
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              variant="ghost"
              className="bg-[#B22234]/60 w-full h-full p-4 rounded-full text-base"
              disabled={loading}
            >
              <Send className="w-5 h-5 mr-2" />
              {loading ? "Sending..." : "Send message"}
            </Button>
          </div>

          {success && (
            <p className="text-green-400 mt-4 text-center">Message sent successfully!</p>
          )}
        </form>
      </Card>
    </section>
  );
};

export default FormFill;
