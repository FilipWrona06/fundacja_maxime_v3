// src/app/events/[slug]/components/EventDetails.tsx

type EventDetailsProps = {
  htmlContent: string;
};

const EventDetails = ({ htmlContent }: EventDetailsProps) => (
  <article
    className="prose prose-lg max-w-none"
    dangerouslySetInnerHTML={{ __html: htmlContent }}
  />
);

export default EventDetails;