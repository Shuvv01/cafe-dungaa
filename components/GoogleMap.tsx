export default function GoogleMap() {
  return (
    <div className="surface overflow-hidden">
      <iframe
        title="Cafe Dungaa location map"
        src="https://www.google.com/maps?q=Jwagal%20Lalitpur%20Nepal&output=embed"
        className="h-[420px] w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
