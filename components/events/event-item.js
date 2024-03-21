import classes from "./event-item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/adress-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

export default function EventItem({ title, image, date, location, id }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedLocation = location.replace(", ", "\n");

  const exproleLink = `/event/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes["right-content"]}>
        <div className={classes.content}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedLocation}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exproleLink}>
            <span>Explore events</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
