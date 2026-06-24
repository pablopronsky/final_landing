'use client';

import { useState } from 'react';
import { ArrowUpRight, Phone } from 'lucide-react';
import { whatsAppForLead, WHATSAPP_URL, WHATSAPP_PHONE } from '@/lib/config';
import { trackWhatsAppClick } from '@/lib/analytics';
import { CONTACTO } from '@/content/site';

const f = CONTACTO.form;

// Formulario de captación. Sin backend: arma un deep-link de WhatsApp con los
// datos cargados y lo abre. Esto estructura el lead (nombre/zona/obra/teléfono)
// sin sumar dependencias ni servidor — ideal para una marca que recién arranca.
export const LeadForm = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [obra, setObra] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = whatsAppForLead({ nombre, telefono, localidad, obra });
    trackWhatsAppClick('contacto-form');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const inputBase =
    'w-full rounded-[3px] border border-negro/15 bg-white/60 px-4 py-3 text-[15px] text-negro placeholder:text-negro/35 transition-colors focus:border-cobre focus:bg-white';
  const labelBase = 'mb-2 block font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-negro-muted';

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl rounded-[4px] border border-negro/15 bg-white/50 p-6 md:p-8 text-left backdrop-blur-sm"
    >
      <p className="mb-6 font-display text-[13px] font-bold uppercase tracking-[0.2em] text-grafito">{f.title}</p>

      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lf-nombre" className={labelBase}>{f.nameLabel}</label>
          <input
            id="lf-nombre"
            name="nombre"
            type="text"
            required
            autoComplete="name"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder={f.namePlaceholder}
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="lf-tel" className={labelBase}>{f.phoneLabel}</label>
          <input
            id="lf-tel"
            name="telefono"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder={f.phonePlaceholder}
            className={inputBase}
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="lf-zona" className={labelBase}>{f.zoneLabel}</label>
        <input
          id="lf-zona"
          name="localidad"
          type="text"
          required
          value={localidad}
          onChange={(e) => setLocalidad(e.target.value)}
          placeholder={f.zonePlaceholder}
          className={inputBase}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="lf-obra" className={labelBase}>{f.projectLabel}</label>
        <textarea
          id="lf-obra"
          name="obra"
          rows={3}
          value={obra}
          onChange={(e) => setObra(e.target.value)}
          placeholder={f.projectPlaceholder}
          className={`${inputBase} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group/btn relative flex w-full items-center justify-center gap-3 rounded-[3px] bg-negro px-8 py-4 font-display text-[15px] font-bold uppercase tracking-[0.15em] text-hueso transition-[background-color,color,scale] duration-200 ease-out hover:bg-cobre hover:text-negro active:scale-[0.98]"
      >
        {f.submit}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
      </button>

      {/* Alternativas para quien prefiere no llenar el form */}
      <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-negro/45">{f.altPrefix}</span>
        <div className="flex items-center gap-5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('contacto-directo')}
            className="text-[13px] font-bold uppercase tracking-[0.12em] text-grafito underline decoration-cobre underline-offset-4 transition-colors hover:text-negro"
          >
            WhatsApp
          </a>
          <a
            href={`tel:+${WHATSAPP_PHONE}`}
            onClick={() => trackWhatsAppClick('contacto-llamada')}
            className="inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.12em] text-grafito transition-colors hover:text-negro"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            Llamar
          </a>
        </div>
      </div>
    </form>
  );
};
