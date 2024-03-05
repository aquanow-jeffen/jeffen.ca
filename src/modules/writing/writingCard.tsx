import { Card, Text } from '@radix-ui/themes';

export function WritingCard({ title, subtitle, url }): React.ReactElement {
  return (
    <Card size="2" className="bg-slate-700 mb-3 bg-opacity-20">
      <a href={url} target="_blank">
        <Text as="div" weight="bold" size="3">
          {title}
        </Text>
        <Text as="div" color="gray" size="2">
          {subtitle}
        </Text>
      </a>
    </Card>
  );
}
