import { apiClient } from '~/shared/api';
import ImageWithFallback from '~/shared/ui/ImageWithFallback';
import { Section } from '~/shared/ui/Section';

type Props = {
  alias: string;
};

export async function SpecialistOverviewSection({ alias }: Props) {
  const { data, error } = await apiClient.GET(
    '/api/pages/specialists/{specialist}/main',
    {
      params: {
        path: { specialist: alias },
      },
    },
  );

  if (error) return;

  const { content, header } = data;

  return (
    <Section
      headings={header.headings}
      parentLink={header.parentLink}
      type="main"
    >
      <div className="relative flex h-full w-full flex-col justify-center gap-8 md:flex-row md:gap-16 [&_h3]:pb-2 [&_h3]:pl-6 [&_h3]:opacity-95 md:[&_h3]:pl-12">
        <div>
          <ImageWithFallback
            key={alias}
            width={448}
            height={448}
            srcFallback="/images/specialists/default.jpg"
            src={`/images/specialists/${alias}.jpg`}
            alt={alias}
            className="rounded-3xl object-contain"
            priority
          />
        </div>
        <div className="min-w-72 md:mt-8 [&_li]:mb-2 [&_li]:last:mb-0 [&_ul]:mb-4 [&_ul]:last:mb-0">
          <ul>
            {content.phones.map((phone) => (
              <li key={phone} className="pb-2 text-2xl font-bold last:pb-2">
                <a href={`tel:${phone}`}>{phone}</a>
              </li>
            ))}
          </ul>

          <ul>
            {content.emails.map((email) => (
              <li key={email}>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
            ))}
          </ul>

          <ul>
            {content.websites.map((website) => (
              <li key={website}>
                <a href={website}>{website}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
