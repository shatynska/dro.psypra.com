import Image from 'next/image';

import logo from '/public/logo.svg';

export function HeaderLogo() {
  return (
    <div className="flex h-16 w-40 flex-row items-center">
      <Image src={logo} alt="Логотип" className="h-16 w-12 object-contain" />
      <ul className="ml-2 text-xs">
        <li>психологи</li>
        <li>психотерапевти</li>
        <li>психіатри</li>
      </ul>
    </div>
  );
}
