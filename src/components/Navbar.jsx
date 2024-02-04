import React, {useState, useEffect} from 'react'
import style from './navbar.module.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      setScrolled(scrollPosition >= 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className={`${style.discount_header} ${scrolled ? 'scrolled' : ''}`}>
      //Your discount bar content
      <div className={`${style.discount_bar}`} style={{ height: scrolled ? '0' : '50px' }}>
        <h1>hiiiiii</h1>
      </div>
      //Your header content
      <div className="header" style={{ height: scrolled ? '100px' : '50px' }}>
        <h2>hellloooooo</h2>
      </div>
    </div>
      <div className='bg-success'>
          <h1>Manek</h1>
          <h1>Manek</h1>
          <h1>Manek</h1>
          <h1>Manek</h1>
          <h1>Manek</h1>
          <h1>Manek</h1>
          <h1>Manek</h1>
          <h1>Manek</h1>
          <h1>Manek</h1>
          <h1>Manek</h1>
          <h1>Manek</h1>
          <h1>Manek</h1>
          <h1>Manek</h1>
          <h1>Manek</h1>
          <h1>Manek</h1>
          <h1>Manek</h1>
          <h1>Manek</h1>
          <h1>Manek</h1>
          <h1>Manek</h1>
          <h1>Manek</h1>
      </div>
    </>
  );
}

export default Navbar
