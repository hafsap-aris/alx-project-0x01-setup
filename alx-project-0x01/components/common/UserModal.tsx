// components/common/UserModal.tsx

import React from "react";
import { UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ user, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">User Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500">&times;</button>
        </div>

        <div className="space-y-2 text-sm text-gray-700">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noreferrer" className="text-blue-600 underline">{user.website}</a></p>
          <p><strong>Company:</strong> {user.company.name}</p>
          <p><strong>Catchphrase:</strong> "{user.company.catchPhrase}"</p>
          <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
          <p><strong>Geo:</strong> Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</p>
        </div>

        <div className="mt-6 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Close</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;