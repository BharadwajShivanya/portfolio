import { useSubmitContact } from "@/hooks/useBackend";
import type { ContactFormData } from "@/types";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function RevealSection({
  children,
  delay = 0,
}: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  const submitContact = useSubmitContact();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    await submitContact.mutateAsync(data);
    reset();
  };

  return (
    <div data-ocid="contact.page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-card border-b border-border py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <RevealSection>
            <p className="text-sm font-body tracking-[0.18em] uppercase text-muted-foreground mb-4">
              Get in Touch
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Contact Dr. Sharma
            </h1>
            <div className="w-12 h-px bg-accent mx-auto mb-6" />
            <p className="font-body text-muted-foreground text-base leading-relaxed">
              For academic inquiries, collaboration proposals, lecture
              invitations, or research correspondence, please reach out
              directly.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-background py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Left — contact details */}
          <div className="md:col-span-2 space-y-8">
            <RevealSection delay={0.1}>
              <div>
                <h2 className="font-display text-xl text-foreground mb-4">
                  Academic Contact
                </h2>
                <div className="w-8 h-px bg-accent mb-6" />
                <div className="space-y-5">
                  <ContactDetail
                    label="Email"
                    value="ic.sharma@university.edu"
                    href="mailto:ic.sharma@university.edu"
                  />
                  <ContactDetail
                    label="Institution"
                    value="Department of Economics"
                  />
                  <ContactDetail
                    label="Office Hours"
                    value="Monday – Friday, 10:00 – 13:00"
                  />
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={0.2}>
              <div className="bg-muted/40 border border-border rounded-lg p-5">
                <p className="font-body text-sm text-muted-foreground leading-relaxed italic">
                  "I welcome correspondence from scholars, students, and
                  practitioners engaged with questions of development economics,
                  institutional reform, and the history of economic thought."
                </p>
                <p className="font-display text-sm text-foreground mt-3">
                  — Dr. I.C. Sharma
                </p>
              </div>
            </RevealSection>
          </div>

          {/* Right — form */}
          <div className="md:col-span-3">
            <RevealSection delay={0.15}>
              <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                {submitContact.isSuccess ? (
                  <motion.div
                    data-ocid="contact.success_state"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-primary"
                        role="img"
                        aria-label="Success checkmark"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-2">
                      Message Received
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      Thank you for your inquiry. Dr. Sharma will respond within
                      3–5 working days.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
                      For academic or professional inquiries, please complete
                      the form below. All fields are required. Please allow 3–5
                      working days for a response.
                    </p>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-5"
                      noValidate
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FieldGroup
                          label="Full Name"
                          error={errors.name?.message}
                          ocid="contact.name_input"
                        >
                          <input
                            id="contact.name_input"
                            data-ocid="contact.name_input"
                            type="text"
                            placeholder="Your name"
                            className={fieldCls(!!errors.name)}
                            {...register("name", {
                              required: "Name is required",
                            })}
                          />
                        </FieldGroup>
                        <FieldGroup
                          label="Email Address"
                          error={errors.email?.message}
                          ocid="contact.email_input"
                        >
                          <input
                            id="contact.email_input"
                            data-ocid="contact.email_input"
                            type="email"
                            placeholder="your@email.com"
                            className={fieldCls(!!errors.email)}
                            {...register("email", {
                              required: "Email is required",
                              pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email address",
                              },
                            })}
                          />
                        </FieldGroup>
                      </div>

                      <FieldGroup
                        label="Subject"
                        error={errors.subject?.message}
                        ocid="contact.subject_input"
                      >
                        <input
                          id="contact.subject_input"
                          data-ocid="contact.subject_input"
                          type="text"
                          placeholder="Nature of your inquiry"
                          className={fieldCls(!!errors.subject)}
                          {...register("subject", {
                            required: "Subject is required",
                          })}
                        />
                      </FieldGroup>

                      <FieldGroup
                        label="Message"
                        error={errors.message?.message}
                        ocid="contact.message_textarea"
                      >
                        <textarea
                          id="contact.message_textarea"
                          data-ocid="contact.message_textarea"
                          rows={6}
                          placeholder="Please describe your inquiry in detail…"
                          className={`${fieldCls(!!errors.message)} resize-none`}
                          {...register("message", {
                            required: "Message is required",
                            minLength: {
                              value: 20,
                              message: "Message must be at least 20 characters",
                            },
                          })}
                        />
                      </FieldGroup>

                      {submitContact.isError && (
                        <p
                          data-ocid="contact.error_state"
                          className="text-sm text-destructive font-body"
                        >
                          Something went wrong. Please try again or email
                          directly.
                        </p>
                      )}

                      <button
                        type="submit"
                        data-ocid="contact.submit_button"
                        disabled={isSubmitting || submitContact.isPending}
                        className="w-full py-3 px-6 bg-primary text-primary-foreground font-body text-sm tracking-wide rounded-lg transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {submitContact.isPending ? "Sending…" : "Send Message"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
    </div>
  );
}

function fieldCls(hasError: boolean) {
  return [
    "w-full px-4 py-2.5 rounded-lg border font-body text-sm bg-background text-foreground placeholder:text-muted-foreground",
    "focus:outline-none focus:ring-2 focus:ring-ring transition-colors duration-150",
    hasError ? "border-destructive focus:ring-destructive/40" : "border-input",
  ].join(" ");
}

function FieldGroup({
  label,
  error,
  ocid,
  children,
}: {
  label: string;
  error?: string;
  ocid: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={ocid}
        className="block font-body text-xs uppercase tracking-[0.1em] text-muted-foreground"
      >
        {label}
      </label>
      {children}
      {error && (
        <p
          data-ocid={`${ocid}.field_error`}
          className="text-xs text-destructive font-body mt-1"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function ContactDetail({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <p className="font-body text-xs uppercase tracking-[0.1em] text-muted-foreground mb-0.5">
        {label}
      </p>
      {href ? (
        <a
          href={href}
          className="font-body text-sm text-primary hover:underline transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="font-body text-sm text-foreground">{value}</p>
      )}
    </div>
  );
}
