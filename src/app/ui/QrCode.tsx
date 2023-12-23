'use client';

import Image from 'next/image';
import {classes, icons, images} from '../lib/constants';
import {Badge} from './components';
import {useState} from 'react';

export const QrCode = () => {
  const [showDetails, setShowDetails] = useState(true);
  return (
    <div className="bg-white w-full flex flex-col p-6 mt-6 rounded-3xl">
      <div className="flex justify-between items-center">
        <h1 className="text-gray1 font-bold text-lg md:text-2xl">QR Code</h1>
        <div className="flex items-center gap-6">
          <Image src={icons.eye} alt="eye" className={classes.icon} />
          <Image src={icons.share} alt="share" className={classes.icon} />
          <Image src={icons.download} alt="download" className={classes.icon} />
          <Image
            src={showDetails ? icons.arrowDown : icons.arrowUp}
            alt="toggle"
            className={classes.icon + ' cursor-pointer block md:hidden'}
            onClick={() => setShowDetails(prev => !prev)}
          />
        </div>
      </div>
      {showDetails && (
        <div className="mt-4 self-start">
          <Badge
            icon={icons.downloadColored}
            title="Download the QR code or share it with your friends."
          />
          <div className="red-orange-gradient rounded-[20px] p-1 mt-4">
            <div className="bg-white m-5 flex-col p-5 rounded-[18px]">
              <div className="flex justify-center">
                <Image
                  src={icons.logo}
                  alt="logo"
                  className="w-[108px] h-[43px] object-contain"
                />
              </div>
              <h1 className="text-gray1 font-bold text-2xl pt-4 pb-[11px] text-center">
                Hala Ahmed
              </h1>
              <div className="flex justify-center">
                <Image
                  src={images.qr}
                  alt="qr-code"
                  className="w-32 h-32 object-contain self-center"
                />
              </div>
              <p className="text-gray2 text-sm text-center">
                Follow us on Mazaady
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
