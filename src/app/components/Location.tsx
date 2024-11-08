import { Clock, Mail, MapPin, Phone } from "lucide-react";

const Location = () => {
  return (
    <section className="py-12 bg-sky-100" id="ubicacion">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-sky-900 mb-6">
          Nuestra ubicación
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-sky-800 mb-4">
              Nos encontramos aquí: ¡Visita nuestra tienda!
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="text-sky-900" />
              <span className="text-sky-800">
                Hamburgo 3347, Población René Schneider, Calama.
              </span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Phone className="text-sky-900" />
              <span className="text-sky-800">
                +569 38827045 - Sólo Mensajes por WhatsApp -{" "}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="text-sky-900" />
              <span className="text-sky-800">
                almacenlafamilia3347@gmail.com
              </span>
            </div>
          </div>
          <div className="h-[300px] md:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.5470942487605!2d-68.93870522551613!3d-22.446066321566512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ac0994c74647a5%3A0x48abda4533e21574!2sAlmacen%20La%20Familia%20-%20Calama!5e0!3m2!1ses-419!2scl!4v1730908423358!5m2!1ses-419!2scl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Store Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
