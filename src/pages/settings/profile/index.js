import React from 'react';
import TabsHorizontal from '../../../components/common/TabsHorizontal';
import GeneralSettings from './GeneralSettings';
import NotificationSettings from './NotificationSettings';

const UserProfileEditor = () => {

  return (
    <>
      <div className='flex flex-col items-center m-4'>
        <div className='max-w-5xl w-full '>
          <h1 className='mt-3 font-bold text-3xl'>Hi, Anand Bhatnagar</h1>
          <p>dct.mbd@gmail.com</p>
        </div>
        <div className="w-full max-w-5xl px-0 py-16 sm:px-0">
          <TabsHorizontal categories={
            {
              "General Settings": {
                id: 1,
                tabComponent:<GeneralSettings/>
              },
              "Notification Settings": {
                id: 1,
                tabComponent:<NotificationSettings/>,
              },
              "Language & Time": {
                id: 2,
                tabComponent: <>hei</>
              },
              "Language & Time 2": {
                id: 2,
                tabComponent: <>hei</>
              }
            }
          } />
        </div>
      </div>
    </>
  );
};

export default UserProfileEditor;
