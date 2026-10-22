import { mapsUrl, restaurant } from "@/lib/restaurant";
import { Reveal } from "./Reveal";

export function Visit() {
  const { address: a, instagram, phone, hours } = restaurant;
  return (
    <section id="visita" className="visit">
      <Reveal>
        <h2 className="visit__title">{a.street}</h2>
        <address className="visit__addr">{a.district}, {a.city} – {a.region} · CEP {a.postalCode}</address>
      </Reveal>
      <Reveal className="visit__actions">
        <a className="btn btn--paper" href={mapsUrl} target="_blank" rel="noopener noreferrer">
          Abrir no Google Maps<span className="sr"> (abre em nova aba)</span>
        </a>
        {phone && <a className="visit__link" href={`tel:${phone.e164}`}>Ligar {phone.display}</a>}
        <a className="visit__link" href={instagram.url} target="_blank" rel="noopener noreferrer">
          {instagram.handle} no Instagram<span className="sr"> (abre em nova aba)</span>
        </a>
        {hours && (
          <ul className="visit__hours">{hours.map((h) => <li key={h}>{h}</li>)}</ul>
        )}
      </Reveal>
    </section>
  );
}
