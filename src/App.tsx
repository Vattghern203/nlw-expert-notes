import logo from './assets/logo.svg'
import { NoteCard } from './components/note-card'

function App() {

  return (

    <main className='max-w-6xl mx-auto my-12 space-y-6'>
      <img src={logo} alt="Logo NLW expert" />

      <form className='w-full'>
        <input type="text" placeholder='Busque suas notas' className='w-full text-3xl font-semibold bg-transparent tracking-tight placeholder:text-slate-500 outline-none' />
      </form>

      <span className='block h-px bg-slate-700'></span>

      <section className='grid grid-cols-3 auto-rows-[250px] gap-6'>

        <article role="button" tabIndex={0} className="rounded-md bg-slate-700 p-5 space-y-3 outline-none focus-visible:outline-lime-500">
          <span className='text-sm font-medium text-slate-200'>Adicionar uma nota</span>

          <p className='text-sm leading-6 text-slate-400'>Grave uma nota em aúdio que será convertida para texto automaticamente.</p>
        </article>

        <NoteCard />

        <NoteCard />

        <NoteCard />

      </section>
    </main>


  )
}

export default App
