type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeader({ eyebrow, title, description, align = 'center' }: SectionHeaderProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-leaf">{eyebrow}</p> : null}
      <h2 className="cafe-font text-4xl font-bold tracking-tight text-espresso sm:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-espresso/70 sm:text-lg">{description}</p> : null}
    </div>
  );
}
