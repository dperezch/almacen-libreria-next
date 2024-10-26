import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section className="py-12 bg-sky-100" id="contacto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-sky-900 mb-6">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" />
              <Button className="bg-yellow-400 text-sky-900 hover:bg-yellow-500">
                Send Message
              </Button>
            </form>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="text-sky-900" />
              <span className="text-sky-800">
                123 Store Street, City, Country
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="text-sky-900" />
              <span className="text-sky-800">+1 234 567 8900</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="text-sky-900" />
              <span className="text-sky-800">info@yourstore.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
