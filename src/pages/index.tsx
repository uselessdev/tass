import * as React from "react"
import { motion, AnimatePresence } from 'framer-motion'
// import { useSpring, a, config } from 'react-spring'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [flip, setFlip] = React.useState(false)

  const text = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -180, opacity: 0 },
  }

  // const main = useSpring({
  //   y: flip ? -180 : 0,
  //   opacity: flip ? 0 : 1,
  //   config: config.gentle
  // })

  // const form = useSpring({
  //   y: flip ? 0 : 180,
  //   opacity: flip ? 1 : 0,
  //   config: config.gentle,
  // })

  return (
    <Layout>
      <SEO title="Tech Lead As Service" description="Contrate uma pessoa tech lead para fazer suas reuniões" />

      <AnimatePresence>
        {!flip ? (
          <motion.div exit={text.hidden} className="space-y-6 w-full max-w-2xl mx-auto p-4 translate-y-0">
            <h1 className="text-6xl font-extrabold text-gray-700">Muitas reuniões durante o dia?</h1>
            <div>
              <p className="text-lg text-gray-700">Precisa de alguém para participar de suas reuniões?</p>
              <p className="text-lg text-gray-700">
                Nós disponibilizamos um <strong className="text-green-500 font-black">tech lead</strong> para você e sua empresa.
              </p>
            </div>

            <button onClick={() => setFlip(!flip)} className="w-full md:w-auto p-6 bg-green-500 rounded-xl font-bold focus:outline-none shadow-md transition-all hover:shadow-2xl focus:shadow-2xl">
              Quero um tech lead.
            </button>
          </motion.div>
        ) : null}

        {flip ? (
          <motion.form
            initial={{ y: 180, opacity: 0 }}
            animate={text.visible}
            name="contact"
            netlify-honeypot="bot-field"
            netlify
            className="w-screen max-w-xl px-4 space-y-4"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <div className="space-y-2">
              <label className="block text-lg text-gray-600">Qual o seu nome?</label>
              <input className="bg-white border-2 rounded-md w-full h-12 px-4 text-gray-700 focus:ring-2 focus:ring-green-300 focus:outline-none transition-all" required name="nome" type="text" />
            </div>

            <div className="space-y-2">
              <label className="block text-lg text-gray-600">Qual o nome da sua empresa?</label>
              <input className="bg-white border-2 rounded-md w-full h-12 px-4 text-gray-700 focus:ring-2 focus:ring-green-300 focus:outline-none transition-all" required name="empresa" type="text" />
            </div>

            <div className="space-y-2">
              <label className="block text-lg text-gray-600">Qual o seu e-mail?</label>
              <input className="bg-white border-2 rounded-md w-full h-12 px-4 text-gray-700 focus:ring-2 focus:ring-green-300 focus:outline-none transition-all" required name="email" type="email" />
            </div>

            <div className="space-y-2">
              <label className="block text-lg text-gray-600">Nos conte um pouco sobre sua necessidade.</label>
              <textarea className="bg-white resize-none border-2 rounded-md w-full h-32 p-4 text-gray-700 focus:ring-2 focus:ring-green-300 focus:outline-none transition-all" required name="historia" />
            </div>

            <button className="w-ull md:w-auto p-6 bg-green-500 rounded-xl font-bold focus:outline-none shadow-md transition-all hover:shadow-2xl focus:shadow-2xl" type="submit">Quero um tech lead</button>
          </motion.form>
        ) : null}
      </AnimatePresence>

    </Layout>
  )
}


export default IndexPage
