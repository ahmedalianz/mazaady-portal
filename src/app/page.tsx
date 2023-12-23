'use client';

import {icons} from './lib/constants';
import {Navbar, Profile, QrCode, Products} from './ui';
import {Button} from './ui/components';

export default function Home() {
  return (
    <main className="relative bg-offWhite ">
      <div className="fixed top-36 right-14 sm:right-24">
        <Button title="Add Review" icon={icons.add} />
      </div>

      <Navbar />
      <div className="flex xl:flex-row flex-col">
        <div className="flex-2 mx-6 sm:mx-16 xl:me-6">
          <Profile />
          <QrCode />
        </div>
        <div className="flex-5 mx-6 sm:mx-16 xl:ms-6">
          <Products />
        </div>
      </div>
    </main>
  );
}
