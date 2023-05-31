import Link from 'next/link';
import React from 'react';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2>About us</h2>
      <ul>
        <li>
          <Link href='/about/contacts'>Contacts</Link>
        </li>
        <li>
          <Link href='about/team'>Our team</Link>
        </li>
      </ul>
      {children}
    </>
  );
}
