import Image from 'next/image';

type Props = {
  techName:
    | 'aws'
    | 'c'
    | 'django'
    | 'docker'
    | 'figma'
    | 'firebase'
    | 'flutter'
    | 'go'
    | 'java'
    | 'javascript'
    | 'jest'
    | 'kotlin'
    | 'kubernetes'
    | 'mongodb'
    | 'mysql'
    | 'nestjs'
    | 'nextjs'
    | 'nodejs'
    | 'php'
    | 'python'
    | 'react'
    | 'spring'
    | 'svelte'
    | 'swift'
    | 'typescript'
    | 'unity'
    | 'vue'
    | 'zeplin';
  width?: number;
  height?: number;
};

const BASE_URL = '/images/tech/';
const SUFFIX = '.svg';

const getImageUrl = (techName: string) => `${BASE_URL}${techName}${SUFFIX}`;

export default function TechStack({
  techName,
  width = 30,
  height = 30,
}: Props) {
  return (
    <Image
      src={getImageUrl(techName)}
      alt={techName}
      width={width}
      height={height}
    />
  );
}
