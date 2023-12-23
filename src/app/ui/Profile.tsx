'use client';

import Image from 'next/image';
import {images, icons} from '../lib/constants';
import {Badge, Button} from './components';

export const Profile = () => {
  return (
    <div className="bg-white w-full flex flex-col p-6 my-6 mt-3 rounded-3xl">
      <Image
        src={images.user}
        alt="logo"
        className="w-[100px] h-[100px] rounded-[24px] object-contain"
      />
      <h1 className="text-gray1 font-bold text-lg md:text-2xl pt-4 pb-[11px]">
        Hala Ahmed
      </h1>
      <p className="text-gray2 text-sm">
        I am Hala Ahmed, I am the owner of the local brand called Beauty which
        is for Mackeup and Skin Care.
      </p>
      <div className="py-6 flex gap-[7px] flex-wrap">
        <Badge icon={icons.user2} title="5" bold subtitle="Following" />
        <Badge icon={icons.profile} title="20" bold subtitle="Followers" />
        <Badge
          icon={icons.star}
          title="2.5"
          bold
          subtitle="Rate"
          miniLabel="(15)"
        />
      </div>
      <Button title="Follow" />
    </div>
  );
};
