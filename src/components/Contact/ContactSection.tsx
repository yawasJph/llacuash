import { MsgIcon, PhoneIcon } from '@/utils/icons'
import ContactForm from './ContactForm'
import SectionHeading from '../SectionHeading/SectionHeading'

const ContactSection = () => {
  return (
    <section id="contact">
      <SectionHeading title='// Contactame:' />
      <section
        className="bg-secondary my-8 grid grid-cols-1 gap-16 rounded-4xl p-8 md:my-16 md:grid-cols-2 md:gap-8 lg:gap-12">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <h3 className="text-neutral text-3xl font-bold">Hablemos</h3>
            <h4 className="text-accent text-2xl font-bold md:text-3xl">Me encantaría ayudarte</h4>
            <p className="text-neutral mt-8">
              Creando soluciones innovadoras para resolver problemas del mundo real
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-neutral text-lg font-bold">Información de contacto</p>
            {/* <a
            href="mailto:johndoe@gmail.com"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <MsgIcon /> llacuash@gmail.com
          </a> */}
            <a
              href="mailto:llacuash@gmail.com?subject=Contacto%20desde%20portafolio&body=Hola%20Joseph%2C%20quiero%20ponerme%20en%20contacto%20contigo."
              className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer">
              <MsgIcon /> llacuash@gmail.com
            </a>
            <a
              href="https://wa.me/51987654321?text=Hola%20Joseph%2C%20vi%20tu%20portafolio%20y%20quiero%20contactarte."
              className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer">
              <PhoneIcon /> +51 987950377
            </a>
            {/* <a
            href="tel:+92 3123456789"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <PhoneIcon /> +51 3123456789
          </a> */}
          </div>
        </div>
        <ContactForm />
      </section>
    </section>
  )
}

export default ContactSection
