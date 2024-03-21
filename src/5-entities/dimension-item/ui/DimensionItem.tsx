import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';
import { HTMLAttributes } from 'react';

import { Article } from '~/shared/ui/Article';

type Props = HTMLAttributes<HTMLDivElement> & {
  content?: string;
};

export function DimensionItem({ content, ...props }: Props) {
  return (
    <Article {...props}>
      {content && parse(DOMPurify.sanitize(content))}
    </Article>
  );
}
