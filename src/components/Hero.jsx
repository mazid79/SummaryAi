
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex items-center">
          <img src='./mazidd.png' alt="logo" className="w-30 h-20 object-contain" />
          <span className="text-3xl font-bold font-dancing-script tracking-wide text-black ml-[-20px]">Mazid</span>
        </div>
        <div className="flex space-x-3">
          <button
            type="button"
            onClick={() => window.open('https://github.com/mazid79')}
            className="black_btn font-bold"
          >
            Github
          </button>
          <button
            type="button"
            onClick={() => window.open('https://www.linkedin.com/in/md-mazid-43816a177/')}
            className="black_btn font-bold"
          >
            Linkedin
          </button>
        </div>  
        </nav>
    
      <h1 className="head_text">
        Get Your Summary Done With <br className="max-md:hidden" />
        <span className="norse_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc font-serif text-center text-base md:text-lg lg:text-1xl mt-8 max-w-3xl">
        Step into a world of seamless brilliance! Our AI-powered wonderland transforms complexity into <span className="gradient_text">captivating simplicity</span>, empowering you to unravel the essence of any article effortlessly. Embrace the <span className="gradient_text">future of synthesized wisdom</span> and indulge in the art of <span className="gradient_text">concise enlightenment</span>!
      </h2>
    </header>
  )
}

export default Hero