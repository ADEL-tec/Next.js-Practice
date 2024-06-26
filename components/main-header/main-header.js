import Link from "next/link";

import classes from "./main-header.module.css";

export default function MainHeader(params) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvent</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Broxse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
