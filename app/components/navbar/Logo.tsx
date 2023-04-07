'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <Image 
      alt="logo"
      className="md:block cursor-pointer"
      height="100"
      width="100"
      src="/image/logo.png"
      unoptimized
    />
  )
}

export default Logo;