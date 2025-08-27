'use client'

import action from '@/actions/contact-form'
import { useActionState } from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import Textarea from '../UI/Textarea'

const ContactForm = () => {
  const [status, formAction, isPending] = useActionState(action, null)

  if (status?.success) {
    return (
      <p className="text-accent self-center text-center text-2xl font-medium">{status.message}</p>
    )
  }

  return (
    <form action={formAction}>
      <Input label="Nombre completo" id="name" name="name" placeholder="Tu nombre aquí" required />
      <Input
        label="Dirección de correo electrónico"
        id="email"
        type="email"
        name="email"
        placeholder="Tu dirección de correo electrónico aquí"
        required
      />
      <Input label="Asunto" id="subject" name="subject" placeholder="Tu sujeto aquí" />
      <Textarea
        label="Mensaje"
        id="message"
        name="message"
        placeholder="Tu mensaje aquí"
        rows={7}
        required
      />
      {!status?.success && <p className="my-2 font-light text-red-600">{status?.message}</p>}
      <Button text={isPending ? 'Submitting...' : 'Submit'} disabled={isPending} />
    </form>
  )
}

export default ContactForm
