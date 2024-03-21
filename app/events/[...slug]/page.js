import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import { getFilteredEvents } from "@/dummy-data";
import { Fragment } from "react";

export default function FilterEventsPage({ params }) {
  const slugs = params.slug;
  const year = +slugs[0];
  const month = +slugs[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return <p>Invalid Filter!</p>;
  }

  const events = getFilteredEvents({ year: year, month: month });

  if (!events || events.length === 0) {
    return <p>No events found for this chosen filter!</p>;
  }

  const date = new Date(year, month - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </Fragment>
  );
}
