import "@/styles/navbar.scss";
import LogoIcon from "#/webdexLogo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <div className="navbar--logo">
        <img src={LogoIcon.src} alt="" />
        <h1>WebDex</h1>
      </div>
      <label htmlFor="sidemenu" className="hamburger--menu">
        <input
          type="checkbox"
          name="sidemenu"
          id="sidemenu"
          className="hamburger--input"
        />
      </label>
      <aside className="navbar--sidemenu">
        <Link href="/pokemon">Pokemon</Link>
        <Link href="/move">Move</Link>
        <Link href="/type">Type</Link>
        <Link href="/docs">API</Link>
      </aside>
    </header>
  );
}
