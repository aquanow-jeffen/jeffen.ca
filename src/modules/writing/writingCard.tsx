type WritingCardProps = {
  index: number;
  title: string;
  subtitle: string;
  url: string;
};

export function WritingCard({ index, title, subtitle, url }: WritingCardProps): React.ReactElement {
  return (
    <a className="writing-card" href={url} target="_blank" rel="noreferrer">
      <span className="writing-index">{String(index).padStart(2, '0')}</span>
      <span>
        <span className="writing-title">{title}</span>
        <span className="writing-subtitle block">{subtitle}</span>
      </span>
      <span className="writing-arrow" aria-hidden="true">↗</span>
    </a>
  );
}
