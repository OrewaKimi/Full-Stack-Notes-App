import React from 'react';
import { getInitials } from '../../utils/helper';

const ProfileInfo = () => {
  const onLogout = () => {
    console.log("User  logged out");
  };

  return (
    <div className="flex-item-center gap-3"> 
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100"> 
     {getInitials( "Kimi Maulana")}
      </div>
      <div>
        <p className="text-sm font-medium">Kimi Maulana</p>
        <button className="text-sm text-slate-700 underline" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;