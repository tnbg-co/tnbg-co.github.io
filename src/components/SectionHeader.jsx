function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'reveal-on-scroll mx-auto max-w-3xl text-center' : 'reveal-on-scroll max-w-3xl'}>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700/90">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>}
    </div>
  );
}

export default SectionHeader;
