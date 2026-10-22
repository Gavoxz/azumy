import { restaurant } from "@/lib/restaurant";

export function Footer() {
  return (
    <footer className="footer">
      <span>{restaurant.name} · {restaurant.address.city}, {restaurant.address.region}</span>
      <span>{restaurant.address.street}</span>
    </footer>
  );
}
