import React from 'react';

const DestinationCard = ({ name, hosts, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
          <h3 className="text-white text-xl font-semibold">{name}</h3>
          <p className="text-sm text-gray-200">{hosts}+ Hosts Available</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;