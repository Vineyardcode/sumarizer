import {logo} from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="prej_logo" className='w-20 object-contain' />

        <button
        type='button'
        onClick={() => window.open('https://github.com/Vineyardcode/sumarizer')}
        className='black_btn'
        >
          Github
        </button>
      </nav>
      <h1 className='head_text'>
        Sumarizujte články pomocí <br 
        className='max-md:hidden'/>
        <span className='main_gradient'>OpenAI GPT-4</span>
      </h1>

    </header >
  )
}

export default Hero