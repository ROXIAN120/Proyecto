import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import { Wrench, ClipboardList, PlusCircle, ExternalLink } from 'lucide-react';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Gestión de Taller Automotriz" />
            <div className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-radial from-slate-50 via-zinc-100 to-zinc-200 dark:from-zinc-900 dark:via-zinc-950 dark:to-black p-6 text-zinc-800 dark:text-zinc-100 transition-colors duration-300">
                
                {/* Visual Premium Gradient Blob Effects */}
                <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 dark:bg-blue-600/5 blur-3xl" />
                <div className="absolute top-1/2 -right-40 h-[40rem] w-[40rem] rounded-full bg-amber-500/5 dark:bg-amber-600/5 blur-3xl" />
                <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-emerald-500/10 dark:bg-emerald-600/5 blur-3xl" />

                {/* Header Section */}
                <header className="z-10 flex w-full max-w-6xl items-center justify-between py-4 border-b border-zinc-200/50 dark:border-zinc-800/50">
                    <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 text-white shadow-md shadow-amber-500/20">
                            <Wrench className="h-5 w-5 animate-pulse" />
                        </div>
                        <span className="font-semibold text-lg tracking-tight bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
                            Taller Santa Cruz
                        </span>
                    </div>
                    <nav className="flex items-center gap-4">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="inline-flex items-center gap-2 rounded-xl bg-zinc-900/5 dark:bg-white/5 border border-zinc-200 dark:border-zinc-800 px-4 py-2 text-sm font-medium hover:bg-zinc-900/10 dark:hover:bg-white/10 transition-all"
                            >
                                Dashboard <ExternalLink className="h-3.5 w-3.5" />
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="text-sm font-medium hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={register()}
                                    className="rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 px-4 py-2 text-sm font-semibold text-white hover:opacity-90 shadow-md shadow-amber-500/10 hover:shadow-amber-500/20 transition-all"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                {/* Main Content Area */}
                <main className="z-10 flex flex-1 flex-col items-center justify-center text-center max-w-4xl py-12 px-4">
                    
                    {/* Main Headings */}
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-600 dark:from-white dark:via-zinc-200 dark:to-zinc-500 bg-clip-text text-transparent">
                        Gestión de Servicios Automotrices
                    </h1>
                    
                    <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                        Bienvenido a la plataforma web de control y seguimiento para talleres mecánicos de Santa Cruz de la Sierra. Optimiza tus clientes, vehículos y órdenes de trabajo en un solo lugar.
                    </p>

                    {/* Action Cards / Navigation Links */}
                    <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 max-w-3xl">
                        
                        {/* Option 1: View Work Orders */}
                        <Link
                            href="/ordenes"
                            className="group relative flex flex-col items-start rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/40 p-6 text-left shadow-lg backdrop-blur-md hover:border-amber-500/30 dark:hover:border-amber-500/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="absolute top-4 right-4 text-zinc-300 dark:text-zinc-800 group-hover:text-amber-500/50 transition-colors">
                                <ClipboardList className="h-16 w-16" />
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 dark:bg-amber-500/5 group-hover:bg-amber-500 group-hover:text-white transition-all shadow-inner">
                                <ClipboardList className="h-6 w-6" />
                            </div>
                            <h3 className="mt-4 font-bold text-xl text-zinc-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                                Órdenes de Trabajo
                            </h3>
                            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                Visualiza, busca y filtra el listado completo de servicios activos, mecánicos asignados y diagnósticos en curso.
                            </p>
                            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400 group-hover:underline">
                                Ver órdenes activas &rarr;
                            </div>
                        </Link>

                        {/* Option 2: New Work Order */}
                        <Link
                            href="/ordenes/nueva"
                            className="group relative flex flex-col items-start rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/40 p-6 text-left shadow-lg backdrop-blur-md hover:border-rose-500/30 dark:hover:border-rose-500/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="absolute top-4 right-4 text-zinc-300 dark:text-zinc-800 group-hover:text-rose-500/50 transition-colors">
                                <PlusCircle className="h-16 w-16" />
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10 text-rose-500 dark:bg-rose-500/5 group-hover:bg-rose-500 group-hover:text-white transition-all shadow-inner">
                                <PlusCircle className="h-6 w-6" />
                            </div>
                            <h3 className="mt-4 font-bold text-xl text-zinc-900 dark:text-white group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">
                                Nueva Orden de Trabajo
                            </h3>
                            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                Registra un nuevo servicio en base a una solicitud. Asigna vehículos, clientes y mecánicos de forma instantánea.
                            </p>
                            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-rose-600 dark:text-rose-400 group-hover:underline">
                                Iniciar registro de orden &rarr;
                            </div>
                        </Link>

                    </div>
                </main>

                {/* Footer */}
                <footer className="z-10 w-full max-w-6xl py-6 text-center text-xs text-zinc-400 dark:text-zinc-600 border-t border-zinc-200/50 dark:border-zinc-800/50 mt-12">
                    &copy; 2026 Taller Automotriz Santa Cruz. Programación Web II. Todos los derechos reservados.
                </footer>
            </div>
        </>
    );
}
