import { Video, Palette, Share2, Target, Lightbulb, Globe, Code, Music, TrendingUp } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing for Reels, Ads, and YouTube content. We create engaging videos that capture attention and drive results.',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Beautiful graphic designs for social posts, banners, and thumbnails. Stand out with visuals that make an impact.',
      gradient: 'from-teal-500 to-green-400',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing & Management',
      description: 'Complete social media management including strategy, content creation, and community engagement to grow your online presence.',
      gradient: 'from-orange-500 to-amber-400',
    },
    {
      icon: Target,
      title: 'Paid Ads',
      description: 'Data-driven paid advertising campaigns on Instagram, Facebook, Google, and YouTube. Maximize your ROI with targeted campaigns.',
      gradient: 'from-rose-500 to-pink-400',
    },
    {
      icon: Lightbulb,
      title: 'Ad Storyline & Creative Strategy',
      description: 'Compelling narratives and creative strategies that resonate with your audience and drive conversions.',
      gradient: 'from-emerald-500 to-teal-400',
    },
    {
      icon: Globe,
      title: 'Website Design & Development',
      description: 'Modern, responsive, and high-performing websites designed to convert visitors into customers.',
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      icon: Code,
      title: 'WordPress Website Development',
      description: 'Custom WordPress solutions that are easy to manage and built for scalability and performance.',
      gradient: 'from-slate-600 to-gray-500',
    },
    {
      icon: Music,
      title: 'Song & Music Promotion',
      description: 'Strategic music promotion campaigns to help artists reach their target audience and grow their fanbase.',
      gradient: 'from-fuchsia-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      title: 'Branding & Digital Growth Strategy',
      description: 'Comprehensive branding and growth strategies to establish your brand identity and scale your digital presence.',
      gradient: 'from-blue-500 to-teal-500',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand and drive growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
