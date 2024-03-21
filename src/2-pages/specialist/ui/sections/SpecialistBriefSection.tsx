import Link from 'next/link';

import { useGetSpecialistBriefControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

type Props = {
  alias: string;
};

export function SpecialistBriefSection({ alias }: Props) {
  const { headings, data: dimensions } =
    useGetSpecialistBriefControllerExecuteSuspense({
      alias,
    });

  return (
    <Section headings={headings} background="dark">
      <div className="flex h-full w-full max-w-224 flex-col justify-between md:h-[22rem] md:flex-wrap md:items-center md:gap-y-8 md:self-center">
        {dimensions.map((dimension) => (
          <div
            key={dimension.title}
            className="line-clamp-2 md:line-clamp-none md:w-72 md:text-center md:first:mt-12 md:last:mb-12"
          >
            <Link href={dimension.href}>
              <h3 className="inline text-base after:content-[':_'] md:block md:text-lg md:after:content-none">
                {dimension.title}
              </h3>
            </Link>
            <span className="opacity-90">{dimension.value}</span>
          </div>
        ))}
      </div>

      {/* <div className="flex h-full flex-col justify-between md:grid md:grid-flow-col md:grid-cols-2 md:grid-rows-3 md:items-center md:justify-center md:text-center">
        {dimensions.map((dimension) => (
          <div
            key={dimension.title}
            className="line-clamp-2 gap-2 md:line-clamp-none md:flex md:w-72 md:flex-col md:place-self-center md:first:translate-y-8 md:[&:nth-child(2)]:translate-y-8 md:[&:nth-child(3)]:translate-y-8"
          >
            <Link href={dimension.href}>
              <h3 className="inline text-base after:content-[':_'] md:block md:text-lg md:after:content-none">
                {dimension.title}
              </h3>
            </Link>
            <span className=" opacity-90">{dimension.value}</span>
          </div>
        ))}
      </div> */}
    </Section>
  );
}
