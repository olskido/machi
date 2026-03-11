import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Story from './components/Story/Story.jsx'
import DegenSaga from './components/DegenSaga/DegenSaga.jsx'
import Memes from './components/Memes/Memes.jsx'
import Council from './components/Council/Council.jsx'
import Anime from './components/Anime/Anime.jsx'
import Whitepaper from './components/Whitepaper/Whitepaper.jsx'
import ProfilePictures from './components/ProfilePictures/ProfilePictures.jsx'
import Community from './components/Community/Community.jsx'

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem('machi_currentPage') || 'home';
  });

  useEffect(() => {
    localStorage.setItem('machi_currentPage', currentPage);
  }, [currentPage]);

  // Ensure the user starts at the very top of the page on their first visit,
  // but let the browser handle natural scroll restoration on refresh.
  useEffect(() => {
    if (window.history.state === null) {
      window.scrollTo(0, 0)
    }
  }, [])

  useEffect(() => {
    const observe = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
            }
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      )
      const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
      targets.forEach((el) => observer.observe(el))
      return observer
    }

    let obs = observe()

    const mutObs = new MutationObserver(() => {
      obs.disconnect()
      obs = observe()
    })
    mutObs.observe(document.body, { childList: true, subtree: true })

    return () => { obs.disconnect(); mutObs.disconnect() }
  }, [])

  return (
    <div className="app">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Story />
            <DegenSaga />
            <Council />
            <Anime />
            <Whitepaper />
            <Community />
          </>
        ) : currentPage === 'profile-pictures' ? (
          <ProfilePictures setCurrentPage={setCurrentPage} />
        ) : currentPage === 'memes' ? (
          <Memes setCurrentPage={setCurrentPage} />
        ) : null}
      </main>
    </div>
  )
}
