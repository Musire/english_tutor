import { useState } from 'react';
import { Image } from "@/components"

const IMAGES = [
  {
    id: 1,
    category: 'Nature',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop',
    title: 'Mountain Valley',
  },
  {
    id: 2,
    category: 'Architecture',
    url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&auto=format&fit=crop',
    title: 'Skyscraper',
  },
  {
    id: 3,
    category: 'Nature',
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop',
    title: 'Green Forest',
  },
  {
    id: 4,
    category: 'Architecture',
    url: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&auto=format&fit=crop',
    title: 'Suspension Bridge',
  },
];

export default function InteractiveGallery() {
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All' 
    ? IMAGES 
    : IMAGES.filter(img => img.category === filter);

  return (
    <div className="space-y-6">
      {/* Category Tabs */}
      <div className="flex gap-2 border-b border-gray-200 pb-3">
        {['All', 'Nature', 'Architecture'].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              filter === category
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredImages.map((img) => (
          <div key={img.id} className="group relative overflow-hidden rounded-lg bg-gray-100 shadow-sm border border-gray-200">
            <Image 
              src={img.url} 
              alt={img.title} 
              className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-white font-medium text-sm">{img.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
