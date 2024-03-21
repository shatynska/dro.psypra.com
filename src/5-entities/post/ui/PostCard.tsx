import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

import { type Post } from '~/shared/api';
import {
  Card,
  CardContent,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from '~/shared/ui/Card';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  post: Post;
  href: string;
};

export function PostCard({ post, href, className, ...props }: Props) {
  return (
    <Link href={href} className="relative flex justify-center" {...props}>
      <Card className="md:max-w-80">
        <CardHeader>
          <CardSubTitle>{post.headings.secondary}</CardSubTitle>
          <CardTitle>{post.headings.primary}</CardTitle>
        </CardHeader>
        <CardContent className="line-clamp-12 text-justify md:line-clamp-10 md:hyphens-none md:text-left">
          {post.content && parse(DOMPurify.sanitize(post.content))}
        </CardContent>
      </Card>
    </Link>
  );
}
