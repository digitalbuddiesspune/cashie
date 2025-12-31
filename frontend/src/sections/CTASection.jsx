import { Link } from 'react-router-dom';
import Button from '../components/Button';

const CTASection = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-4">
            Join thousands of businesses already using Cashie
          </p>
          <p className="text-lg text-slate-400 mb-10">
            Because payments should be fast, simple, and secure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button variant="secondary" className="px-8 py-4 text-lg font-semibold bg-white text-slate-900 hover:bg-slate-100">
                Create Account
              </Button>
            </Link>
            <Link to="/partner-register">
              <Button variant="outline" className="px-8 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-slate-900">
                Join as Partner
              </Button>
            </Link>
          </div>
          <p className="text-sm text-slate-400 mt-8">
            No credit card required • Setup in minutes • 24/7 support
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;


