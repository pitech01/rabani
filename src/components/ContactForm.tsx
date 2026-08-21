import { useRef, useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Button } from './ui/Button'
import { cx } from '../lib/utils'

const categories = [
  'General Inquiry',
  'Logistics Partnership',
  'Mining Partnership',
  'Investment',
  'Careers',
]

type Errors = Partial<Record<'name' | 'email' | 'category' | 'message', string>>

export function ContactForm({ defaultCategory }: { defaultCategory?: string } = {}) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const nameRef = useRef<HTMLInputElement>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '').trim()
    const email = String(form.get('email') ?? '').trim()
    const category = String(form.get('category') ?? '')
    const message = String(form.get('message') ?? '').trim()

    const nextErrors: Errors = {}
    if (!name) nextErrors.name = 'Please enter your full name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'Please enter a valid email address.'
    if (!category) nextErrors.category = 'Please select an inquiry type.'
    if (!message) nextErrors.message = 'Please tell us a bit about your inquiry.'

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      nameRef.current?.focus()
      return
    }

    setSubmitting(true)
    window.setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 700)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-none border border-sky-200 bg-sky-50 p-8">
        <CheckCircle2 className="size-8 text-sky-600" aria-hidden="true" />
        <h3 className="font-heading text-xl font-bold text-navy-950">Thank you for reaching out</h3>
        <p className="text-navy-700">
          Your inquiry has been received. A member of the Rabani Geologistics team will get back to you shortly.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Send another inquiry
        </Button>
      </div>
    )
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-navy-900">
            Full Name <span className="text-ember-600">*</span>
          </label>
          <input
            ref={nameRef}
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={cx(
              'mt-1.5 block w-full rounded-none border px-3.5 py-2.5 text-navy-950 outline-none transition-colors focus:border-sky-500 focus:ring-0',
              errors.name ? 'border-ember-500' : 'border-navy-300',
            )}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-sm text-ember-700">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy-900">
            Email Address <span className="text-ember-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={cx(
              'mt-1.5 block w-full rounded-none border px-3.5 py-2.5 text-navy-950 outline-none transition-colors focus:border-sky-500 focus:ring-0',
              errors.email ? 'border-ember-500' : 'border-navy-300',
            )}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-sm text-ember-700">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-navy-900">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-1.5 block w-full rounded-none border border-navy-300 px-3.5 py-2.5 text-navy-950 outline-none transition-colors focus:border-sky-500 focus:ring-0"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-semibold text-navy-900">
            Inquiry Type <span className="text-ember-600">*</span>
          </label>
          <select
            id="category"
            name="category"
            defaultValue={defaultCategory ?? ''}
            aria-invalid={Boolean(errors.category)}
            aria-describedby={errors.category ? 'category-error' : undefined}
            className={cx(
              'mt-1.5 block w-full rounded-none border bg-white px-3.5 py-2.5 text-navy-950 outline-none transition-colors focus:border-sky-500 focus:ring-0',
              errors.category ? 'border-ember-500' : 'border-navy-300',
            )}
          >
            <option value="" disabled>
              Select an inquiry type
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p id="category-error" className="mt-1.5 text-sm text-ember-700">
              {errors.category}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy-900">
          Message <span className="text-ember-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={cx(
            'mt-1.5 block w-full rounded-none border px-3.5 py-2.5 text-navy-950 outline-none transition-colors focus:border-sky-500 focus:ring-0',
            errors.message ? 'border-ember-500' : 'border-navy-300',
          )}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-sm text-ember-700">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" variant="accent" className="w-full sm:w-auto">
        {submitting ? 'Sending…' : 'Send Inquiry'}
      </Button>
    </form>
  )
}
