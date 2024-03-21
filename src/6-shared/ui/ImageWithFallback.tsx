'use client';

import Image, { ImageProps } from 'next/image';
import { memo } from 'react';

type Props = ImageProps & {
  alt: string;
  srcFallback: string;
};

const ImageWithFallback = ({ src, srcFallback, alt, ...props }: Props) => {
  return (
    <Image
      src={src ? src : srcFallback}
      alt={alt}
      onError={(event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = event.target as HTMLImageElement;
        target.id = srcFallback;
        target.srcset = srcFallback;
      }}
      {...props}
    />
  );
};

export default memo(ImageWithFallback);
