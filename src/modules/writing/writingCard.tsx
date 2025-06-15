import { Text } from '@radix-ui/themes';

export function WritingCard({ title, subtitle, url }): React.ReactElement {
  return (
    <div
      className="group rounded-xl p-6 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
      style={{
        backgroundColor: 'var(--colors-surface-elevated)',
        borderColor: 'var(--colors-border)'
      }}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <Text
              as="h3"
              weight="bold"
              size="4"
              className="group-hover:text-teal-600 transition-colors duration-200"
              style={{ color: 'var(--colors-text)' }}
            >
              {title}
            </Text>
          </div>
          <div className="ml-4 opacity-50 group-hover:opacity-100 transition-opacity duration-200">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ color: 'var(--colors-accent)' }}
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </div>
        </div>
        <Text
          as="p"
          size="2"
          className="leading-relaxed"
          style={{ color: 'var(--colors-text-secondary)' }}
        >
          {subtitle}
        </Text>
        <div className="mt-4 flex items-center text-sm">
          <span
            className="text-xs font-medium px-2 py-1 rounded-full"
            style={{
              backgroundColor: 'rgba(90, 130, 126, 0.1)',
              color: 'var(--colors-accent)'
            }}
          >
            Medium Article
          </span>
        </div>
      </a>
    </div>
  );
}
