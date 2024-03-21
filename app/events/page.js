"use client";

import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/event-search";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/navigation";

export default function EventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <div>
      <EventsSearch onSave={findEventHandler} />
      <EventList items={events} />
    </div>
  );
}
