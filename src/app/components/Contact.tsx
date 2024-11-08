"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, MessageCircle } from "lucide-react";
import React, { useState } from "react";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Ingrese un email válido",
  }),
  subject: z.string().min(4, {
    message: "El asunto debe tener al menos 4 caracteres.",
  }),
  text: z.string(),
});
const Contact = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      subject: "",
      text: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    setLoading(true);

    const formBody = {
      from: process.env.NEXT_PUBLIC_MAILER_USER,
      to: process.env.NEXT_PUBLIC_MAILER_TO,
      subject: data.subject,
      text: `Email enviado por ${data.email} desde página web <n />
      Mensaje: ${data.text}`,
    };

    const formBody2 = {
      from: process.env.NEXT_PUBLIC_MAILER_USER,
      to: data.email,
      subject: "Gracias por contactar con nosotros",
      text: `Estimado/a ${data.username}, hemos recibido tu mensaje de contacto. Te responderemos a la brevedad posible. Gracias por tu tiempo. <n />
      Atte. Almacén y Librería La Familia.`,
    };

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(formBody),
    }).then((response) => response.json());
    console.log(response);

    const response2 = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(formBody2),
    }).then((response2) => response2.json());
    console.log(response2);

    if (response.status === 200 && response2.status === 200) {
      toast({
        description: "Tu mensaje ha sido enviado.",
      });
    } else if (response.status === 500 && response2.status === 500) {
      toast({
        variant: "destructive",
        title: "¡Oh, oh! Algo salió mal.",
        description: "Hubo un problema con tu solicitud.",
      });
    }

    form.reset();
    setLoading(false);
  }

  return (
    <section className="py-12 bg-white" id="contacto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-sky-900 mb-6">Contáctanos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Nombre" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Asunto" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="text"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder="Tu mensaje" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {loading ? (
                  <Button disabled>
                    <Loader2 className="animate-spin" />
                    Espere por favor
                  </Button>
                ) : (
                  <Button
                    className="bg-yellow-400 text-sky-900 hover:bg-yellow-500"
                    type="submit"
                  >
                    Enviar mensaje
                  </Button>
                )}
              </form>
            </Form>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <p className="text-sky-800">
                Si prefieres, puedes enviarnos un mensaje directamente por
                WhatsApp en el siguiente botón:
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button className="bg-yellow-400 text-sky-900 hover:bg-yellow-500">
                <MessageCircle />
                Enviar WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
