import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{user.name}</div>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Username:</span> {user.username}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Phone:</span> {user.phone}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Website:</span> {user.website}
        </p>
      </div>
      <div className="px-6 py-4 bg-gray-100">
        <h3 className="font-semibold text-lg mb-2">Address</h3>
        <p className="text-gray-700 text-sm">
          {user.address.street}, {user.address.suite}<br />
          {user.address.city}, {user.address.zipcode}
        </p>
        <h3 className="font-semibold text-lg mt-3 mb-2">Company</h3>
        <p className="text-gray-700 text-sm">
          {user.company.name}<br />
          {user.company.catchPhrase}<br />
          {user.company.bs}
        </p>
      </div>
    </div>
  );
};

export default UserCard;