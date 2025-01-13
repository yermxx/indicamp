import Image, { StaticImageData } from 'next/image';

type Props = {
  src: string | StaticImageData;
  alt?: string;
  width: number;
  height: number;
};

export default function AvatarImage({ src, alt = '', width, height }: Props) {
  return (
    <Image
      className='rounded-full mr-2'
      src={src}
      alt={alt}
      width={width}
      height={height}
    ></Image>
  );
}
