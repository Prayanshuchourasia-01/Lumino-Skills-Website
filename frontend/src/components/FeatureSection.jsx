    import {
        PiHeadphonesBold,
        PiChartBarBold,
        PiSidebarBold,
        PiNoteBold,
        PiHeartBold,
        PiTargetBold,
      } from "react-icons/pi";
      
      export default function FeatureSection() {
        return (
          <section className="bg-white py-16 px-4 max-w-6xl mx-auto">
            {/* Section Heading */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Make every step user–centric</h2>
              <p className="text-gray-500 mt-2 max-w-xl mx-auto">
                Find the right course at every step—guided by support, quality, and results
                designed for your success.
              </p>
            </div>
      
            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200">
      
              {/* 1. Support */}
              <div className="p-6 text-center border-b md:border-b-0 md:border-r border-gray-200">
                <PiHeadphonesBold size={28} className="mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Support</h3>
                <p className="text-sm text-gray-600">
                  We’re here for you at every step—guiding users to explore and select courses effortlessly.
                  Whether it’s technical assistance or help with filtering options, our platform ensures a smooth
                  journey for learners.
                </p>
              </div>
      
              {/* 2. Sales */}
              <div className="p-6 text-center border-b md:border-b-0 md:border-r border-gray-200">
                <PiChartBarBold size={28} className="mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Sales</h3>
                <p className="text-sm text-gray-600">
                  Empowering course providers by showcasing their offerings effectively.
                  We bridge the gap between providers and learners, creating opportunities for
                  skill development and outreach.
                </p>
              </div>
      
              {/* 3. Onboarding */}
              <div className="p-6 text-center border-b md:border-b-0 border-gray-200">
                <PiSidebarBold size={28} className="mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Onboarding</h3>
                <p className="text-sm text-gray-600">
                  A hassle-free process to get started. From discovering trending courses to
                  customizing your preferences with filters, we make sure every user can hit the ground running.
                </p>
              </div>
      
              {/* 4. Product */}
              <div className="p-6 text-center border-r border-gray-200">
                <PiNoteBold size={28} className="mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Product</h3>
                <p className="text-sm text-gray-600">
                  A thoughtfully curated library of courses spanning diverse topics and levels.
                  Each course is selected to ensure relevance, quality, and value for learners.
                </p>
              </div>
      
              {/* 5. Quality */}
              <div className="p-6 text-center border-r border-gray-200">
                <PiHeartBold size={28} className="mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Quality</h3>
                <p className="text-sm text-gray-600">
                  We prioritize excellence by featuring courses that meet strict quality standards.
                  Every course is vetted to align with learners’ goals and expectations.
                </p>
              </div>
      
              {/* 6. Result */}
              <div className="p-6 text-center">
                <PiTargetBold size={28} className="mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Result</h3>
                <p className="text-sm text-gray-600">
                  Your learning success is our ultimate goal. We focus on delivering a seamless,
                  engaging, and result-driven experience to help you achieve your educational and career aspirations.
                </p>
              </div>
            </div>
          </section>
        );
      }