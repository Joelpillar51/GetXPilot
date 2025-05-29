
export const SocialProof = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <p className="text-lg text-gray-600 mb-8">Join 2,500+ creators growing on X</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">340+</div>
              <p className="text-gray-600">Average followers gained in first month</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">4.2x</div>
              <p className="text-gray-600">Engagement rate improvement</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
              <p className="text-gray-600">Time saved on content creation</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl max-w-3xl mx-auto">
          <blockquote className="text-lg text-gray-700 mb-4">
            "XCommand turned my random thoughts into viral tweets. I gained 1,200 followers in 3 weeks just by speaking my ideas!"
          </blockquote>
          <div className="flex items-center justify-center">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
              S
            </div>
            <div>
              <div className="font-semibold text-gray-900">Sarah Chen</div>
              <div className="text-gray-600 text-sm">@sarahbuilds • Tech Creator</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
