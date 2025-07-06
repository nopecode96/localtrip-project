import React from 'react'
import { motion } from 'framer-motion'
const ServiceCard = ({ service, onBook }) => {
  return (
    <motion.div
      className="border p-4 rounded-md bg-white shadow-md"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-lg font-bold">
          {service.title}
          {service.type === 'GUIDE' && <span className="ml-2 text-sm text-blue-500">🧭 Guide</span>}
          {service.type === 'PHOTOGRAPHER' && <span className="ml-2 text-sm text-pink-500">📸 Photographer</span>}
        </h4>
        <p className="text-blue-600 font-semibold">${service.price}/hr</p>
      </div>

      {/* Description */}
      <p className="text-sm mb-3 text-gray-700">{service.description}</p>

      {/* Conditional Details */}
      {service.type === 'GUIDE' && (
        <div className="text-sm text-gray-800 space-y-2">
          <p><strong>Meeting Point:</strong> {service.meetingPoint}</p>
          <div>
            <strong>Itinerary:</strong>
            <ul className="list-disc list-inside ml-2 mt-1">
              {service.itinerary?.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>
        </div>
      )}

      {service.type === 'PHOTOGRAPHER' && (
        <div className="text-sm text-gray-800 space-y-1">
          <p><strong>Device:</strong> {service.device}</p>
          <p><strong>Editing Style:</strong> {service.editingStyle}</p>
          <p><strong>Delivery Format:</strong> {service.deliveryFormat}</p>
        </div>
      )}

      {/* Book Button */}
        <button
            onClick={() => onBook && onBook()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full"
            >
            Book
        </button>
    </motion.div>
    
  )
}

export default ServiceCard
