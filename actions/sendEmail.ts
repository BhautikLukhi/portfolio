'use server';

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend"
import ContactFormEmail from "@/email/ContactFormEmail";
import React from "react";

//const resend = new Resend(process.env.)
const resend = new Resend('re_JqdEdzzM_DHwB7iVTFizS7nGPJyWkfSmy');

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail') as string
  const message = formData.get('message') as string

  if (!validateString(senderEmail, 500))
    return { error: "Invalid sender email" }

  if (!validateString(message, 5000))
    return { error: "Invalid message" }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact form <onboarding@resend.dev>',
      to: 'b.lukhi13@gmail.com',
      subject: 'Message from contact form',
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, { message, senderEmail })
    })
  } catch (error: unknown) {
    return { error: getErrorMessage(error) }
  }

  return { data }
}