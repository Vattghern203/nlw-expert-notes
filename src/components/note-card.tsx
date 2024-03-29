export function NoteCard() {

    return (

        <article role="button" tabIndex={0} className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 transition-shadow outline-none focus-visible:outline-lime-500">
            <span className='text-sm font-medium text-slate-300'>Há 2 dias</span>

            <p className='text-sm leading-6 text-slate-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quisquam dolorum non ratione ipsam, ut unde vitae pariatur autem repellendus, quia consectetur eaque sed facilis deleniti? Blanditiis, accusantium nulla. Rem.</p>

            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"></div>
        </article>
    )
}