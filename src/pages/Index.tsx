
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MicrophoneButton } from "@/components/MicrophoneButton";
import { AudioVisualizer } from "@/components/AudioVisualizer";
import { Feature } from "@/components/Feature";
import { PricingCard } from "@/components/PricingCard";
import { Link } from "react-router-dom";
import { Code, Layers, Lock, MessageCircle, Share2, Zap } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [micActive, setMicActive] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 hero-pattern">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Add <span className="gradient-text">Voice AI</span> to Your Website in Minutes
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Integrate powerful voice assistants into your website with a simple script. Powered by OpenAI's Realtime API.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-brand-purple hover:bg-brand-purple/90">
                  Get Started For Free
                </Button>
              </Link>
              <Link to="/docs">
                <Button variant="outline" size="lg">
                  View Documentation
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Demo Widget */}
          <div className="mt-16 max-w-md mx-auto bg-white p-4 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-4">
              <div className="flex items-center gap-2">
                <AudioVisualizer isActive={micActive} />
                <div className="text-sm font-medium">
                  {micActive ? "Listening..." : "Click the mic to start"}
                </div>
              </div>
              <MicrophoneButton onMicToggle={(active) => setMicActive(active)} />
            </div>
            <div className="p-4 bg-gray-50 rounded-lg min-h-[80px] flex items-center justify-center text-gray-500 text-sm">
              {micActive ? "Voice response will appear here..." : "Ask me anything..."}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Features for Voice AI Integration</h2>
            <p className="text-gray-600">
              Everything you need to add conversational voice AI to your website or application.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature 
              icon={<Code className="h-6 w-6" />} 
              title="Simple Integration" 
              description="Add our voice AI to your website with a single line of JavaScript code."
            />
            <Feature 
              icon={<MessageCircle className="h-6 w-6" />} 
              title="Custom Prompts" 
              description="Customize the AI's behavior and personality to match your brand and needs."
            />
            <Feature 
              icon={<Lock className="h-6 w-6" />} 
              title="Bring Your Own API Key" 
              description="Use your own OpenAI API key for complete control and transparency."
            />
            <Feature 
              icon={<Layers className="h-6 w-6" />} 
              title="Google Sheets Integration" 
              description="Save conversation transcripts directly to your Google Sheets."
            />
            <Feature 
              icon={<Share2 className="h-6 w-6" />} 
              title="Real-time Data" 
              description="Low latency voice processing using WebSocket technology."
            />
            <Feature 
              icon={<Zap className="h-6 w-6" />} 
              title="Advanced Analytics" 
              description="Track usage, conversations, and user engagement with detailed analytics."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600">
              Three simple steps to add voice AI to your website
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-brand-purple text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up & Configure</h3>
              <p className="text-gray-600">
                Create an account, add your OpenAI API key, and customize your AI assistant's behavior.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-brand-purple text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Copy Your Code</h3>
              <p className="text-gray-600">
                Get your unique integration code that connects to our WebSocket server.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-brand-purple text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Add to Your Website</h3>
              <p className="text-gray-600">
                Paste the code snippet to your website and start engaging your visitors with voice AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600">
              No hidden fees. Choose the plan that works best for your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Starter"
              price="Free"
              description="Perfect for trying out the service."
              features={[
                { text: "1 AI Assistant", included: true },
                { text: "100 minutes/month", included: true },
                { text: "Basic customization", included: true },
                { text: "Standard voices", included: true },
                { text: "Google Sheets integration", included: false },
                { text: "Analytics dashboard", included: false },
              ]}
              ctaText="Get Started"
            />
            
            <PricingCard
              title="Professional"
              price="$29"
              description="For growing businesses and websites."
              features={[
                { text: "5 AI Assistants", included: true },
                { text: "500 minutes/month", included: true },
                { text: "Advanced customization", included: true },
                { text: "Premium voices", included: true },
                { text: "Google Sheets integration", included: true },
                { text: "Analytics dashboard", included: true },
              ]}
              highlighted={true}
              ctaText="Start Free Trial"
            />
            
            <PricingCard
              title="Enterprise"
              price="$99"
              description="For large websites and applications."
              features={[
                { text: "Unlimited AI Assistants", included: true },
                { text: "2000 minutes/month", included: true },
                { text: "Advanced customization", included: true },
                { text: "Premium voices", included: true },
                { text: "Google Sheets integration", included: true },
                { text: "Analytics dashboard", included: true },
              ]}
              ctaText="Contact Sales"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-purple to-brand-blue text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to add voice AI to your website?</h2>
            <p className="text-lg mb-8 text-white/90">
              Get started for free today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-brand-purple hover:bg-white/90">
                  Sign Up Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
