import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { Headings, ParentLink } from '../api';
import { cn } from '../lib';

import { SectionHeader } from './SectionHeader';
import { Skeleton } from './Skeleton';

const sectionVariants = cva(
  'relative h-full grid-cols-1 py-12 lg:py-24 grid grid-rows-[minmax(6rem,auto)_minmax(22rem,auto)]',
  {
    variants: {
      background: {
        light: 'text-foreground',
        dark: 'text-background ',
      },
      height: {
        fixed: '[&>div]:align-center',
        default: '',
      },
    },
    defaultVariants: {
      background: 'light',
      height: 'default',
    },
  },
);

type Props = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof sectionVariants> & {
    headings: Headings;
    href?: string;
    parentLink?: ParentLink;
    type?: 'main' | 'additional';
  };

export function Section({
  headings,
  href,
  parentLink,
  background,
  height,
  type,
  className,
  children,
  ...props
}: Props) {
  const headerSide = background === 'dark' ? 'left' : 'right';

  // TODO Add fallback to ErrorBoundary

  return (
    <ErrorBoundary fallback={null}>
      <Suspense
        fallback={<Skeleton className="mx-36 mb-16 mt-36 flex min-h-16" />}
      >
        <section
          className={cn(sectionVariants({ background, className }))}
          {...props}
        >
          {type === 'main' ? (
            <div>
              {parentLink && (
                <Link href={parentLink.href}>
                  <SectionHeader
                    headings={parentLink.headings}
                    level="subTitle"
                    side="right"
                  />
                </Link>
              )}
              <SectionHeader headings={headings} level="pageTitle" />
            </div>
          ) : href ? (
            <Link href={href}>
              <SectionHeader headings={headings} side={headerSide} />
            </Link>
          ) : (
            <SectionHeader headings={headings} side={headerSide} />
          )}

          <div className="flex flex-col justify-center">{children}</div>
        </section>
      </Suspense>
    </ErrorBoundary>
  );
}
