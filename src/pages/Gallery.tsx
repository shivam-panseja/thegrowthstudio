import { useState } from 'react';
import { Globe, Share2, Target, Palette } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work', icon: Palette },
    { id: 'websites', label: 'Websites', icon: Globe },
    { id: 'social', label: 'Social Media', icon: Share2 },
    { id: 'ads', label: 'Ads', icon: Target },
    { id: 'branding', label: 'Branding', icon: Palette },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Website',
      category: 'websites',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      id: 2,
      title: 'Instagram Carousel Design',
      category: 'social',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-rose-500 to-pink-400',
    },
    {
      id: 3,
      title: 'Facebook Ad Campaign',
      category: 'ads',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-orange-500 to-amber-400',
    },
    {
      id: 4,
      title: 'Brand Identity Design',
      category: 'branding',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-teal-500 to-green-400',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'websites',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      id: 6,
      title: 'Social Media Reels',
      category: 'social',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-fuchsia-500 to-pink-500',
    },
    {
      id: 7,
      title: 'Google Ads Creative',
      category: 'ads',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-emerald-500 to-teal-400',
    },
    {
      id: 8,
      title: 'Corporate Branding',
      category: 'branding',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-slate-600 to-gray-500',
    },
    {
      id: 9,
      title: 'Landing Page Design',
      category: 'websites',
      image: 'https://images.pexels.com/photos/1779488/pexels-photo-1779488.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-500 to-teal-500',
    },
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our creative work across websites, social media, ads, and branding
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`group px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-400 hover:shadow-md'
              }`}
            >
              <category.icon size={18} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}>
                <div className="text-center text-white p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm capitalize">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
