import AnimatedDownArrow from '../icons/AnimatedDownArrow'; // Adjust the import path accordingly
import Icon from '../icons/icon';
type Props = {};

export default function HeroSection({}: Props) {
  return (
    <div 
      className="hero backdrop-brightness-200 relative" 
      style={{
        backgroundImage: 'url(https://cdn.midjourney.com/e2da2ad3-d5d3-4084-a485-04453b97071b/0_1.png)',
        height: 'calc(100vh - 85px)',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Task Automation Partners</h1>

          <p className="mb-5">
            We specialize in developing reliable and tailored software solutions that support companies in their everyday tasks. Our commitment to professionalism and excellence ensures that your software solution provides a solid foundation for the ongoing success of your business.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#about" className="btn btn-primary bg-black">Learn More</a>
            <a href="#contact" className="btn btn-secondary text-black bg-slate-100">Contact Us</a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <AnimatedDownArrow />
      </div>
    </div>
  );
}
