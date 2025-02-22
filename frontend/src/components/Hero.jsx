const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-5 bg-gray-100 text-gray-900">
      
      <h2 className="text-6xl md:text-8xl font-extrabold text-blue-600 mb-8">
        Debate. Challenge. Win.
      </h2>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-5">
        Join the Debate. Prove Your Points.
      </h1>
      <p className="text-lg md:text-2xl max-w-2xl mb-10">
        Hotseat lets you enter live debates, challenge others, and vote for the strongest arguments. Can you hold the Hotseat?
      </p>

      {/* Large Title added before About section */}
     

      <button className="mt-6 bg-blue-500 px-8 py-4 text-xl rounded-lg hover:bg-green-600 transition">
        Sign Up & Debate
      </button>
    </section>
  );
};

export default Hero;