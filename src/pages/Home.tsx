import { ArrowRight, Video, Palette, Share2, Target, Megaphone, Globe } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const keyServices = [
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing for reels, ads, and YouTube content',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Eye-catching designs for posts, banners, and thumbnails',
      gradient: 'from-teal-500 to-green-400',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Strategic social media management and content creation',
      gradient: 'from-orange-500 to-amber-400',
    },
    {
      icon: Target,
      title: 'Paid Advertising',
      description: 'Performance-driven ads across Instagram, Facebook, Google & YouTube',
      gradient: 'from-rose-500 to-pink-400',
    },
    {
      icon: Megaphone,
      title: 'Creative Strategy',
      description: 'Compelling ad storylines and creative concepts that convert',
      gradient: 'from-emerald-500 to-teal-400',
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Modern, responsive websites built for growth',
      gradient: 'from-blue-600 to-cyan-500',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50 -z-10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              We Create, Market & Scale
            </span>
            <br />
            <span className="text-gray-900">Digital Brands.</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The Growth Studio is your creative partner in building, marketing, and scaling digital brands.
            From stunning visuals to data-driven campaigns, we bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate('contact')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button
              onClick={() => onNavigate('gallery')}
              className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gray-200"
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our Key Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions to help your brand stand out and grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
