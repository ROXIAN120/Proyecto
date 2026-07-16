import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { 
    ClipboardList, 
    Search, 
    Car, 
    User, 
    AlertCircle, 
    UserCheck, 
    FileText, 
    HelpCircle,
    ArrowLeft
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface WorkOrder {
    idOrden: number;
    clienteNombre: string;
    vehiculoNombre: string;
    placa: string;
    anio: number;
    mecanicoNombre: string;
    prioridad: 'Alta' | 'Media' | 'Baja';
    estadoNombre: string;
    descripcionProblema: string;
    diagnosticoDetallado: string;
    requiereOutsourcing: boolean;
    fechaCreacion: string;
}

export default function Index({ initialOrders = [] }: { initialOrders?: WorkOrder[] }) {
    const [orders] = useState<WorkOrder[]>(initialOrders);
    const [selectedOrder, setSelectedOrder] = useState<WorkOrder | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('Todos');

    const filteredOrders = orders.filter(order => {
        const matchesSearch = 
            order.clienteNombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.vehiculoNombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.placa.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.idOrden.toString().includes(searchQuery);

        const matchesStatus = statusFilter === 'Todos' || order.estadoNombre === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Finalizado':
                return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
            case 'En reparación':
                return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
            case 'Diagnóstico':
                return 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20';
            default:
                return 'bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20';
        }
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'Alta':
                return 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20';
            case 'Media':
                return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
            default:
                return 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20';
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 p-6 flex flex-col items-center">
            <Head title="Órdenes de Trabajo Activas" />
            
            <div className="w-full max-w-6xl">
                {/* Header Nav */}
                <div className="flex items-center gap-4 mb-8">
                    <Link href="/" className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                        <ArrowLeft className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <ClipboardList className="h-6 w-6 text-amber-500" />
                            Órdenes de Trabajo Activas
                        </h1>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            Monitorea los servicios que se están realizando en el taller.
                        </p>
                    </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm p-6 flex flex-col h-[80vh]">
                    {/* Search and Filters */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
                            <Input
                                type="text"
                                placeholder="Buscar por placa, cliente, modelo u orden..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-9 bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 focus:ring-amber-500"
                            />
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {['Todos', 'Pendiente', 'En reparación', 'Finalizado', 'Diagnóstico'].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setStatusFilter(filter)}
                                    className={`px-4 py-2 text-sm font-semibold rounded-lg border transition-all ${
                                        statusFilter === filter
                                            ? 'bg-amber-500 text-white border-amber-500 shadow-md shadow-amber-500/10'
                                            : 'bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                                    }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Two Columns: Orders list & Selected Order Detail */}
                    <div className="flex-1 flex flex-col md:flex-row gap-6 overflow-hidden">
                        
                        {/* Table/List Area */}
                        <div className="flex-1 overflow-y-auto pr-2 border border-zinc-200/60 dark:border-zinc-800/60 rounded-xl p-2 bg-zinc-50/50 dark:bg-zinc-950/30">
                            {filteredOrders.length === 0 ? (
                                <div className="flex flex-col items-center justify-center py-20 text-center text-zinc-400">
                                    <AlertCircle className="h-12 w-12 mb-3 stroke-1 text-zinc-300 dark:text-zinc-700" />
                                    <p className="text-base font-medium">No se encontraron órdenes de trabajo</p>
                                    <p className="text-sm mt-1">Prueba refinando la búsqueda o el filtro.</p>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {filteredOrders.map((order) => (
                                        <div
                                            key={order.idOrden}
                                            onClick={() => setSelectedOrder(order)}
                                            className={`flex items-center justify-between p-4 rounded-xl border text-left cursor-pointer transition-all ${
                                                selectedOrder?.idOrden === order.idOrden
                                                    ? 'bg-amber-500/10 border-amber-500 shadow-sm'
                                                    : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/80'
                                            }`}
                                        >
                                            <div className="flex flex-col gap-2">
                                                <div className="flex items-center gap-3">
                                                    <span className="font-bold text-base text-zinc-900 dark:text-white">
                                                        OT #{order.idOrden}
                                                    </span>
                                                    <Badge variant="outline" className={`text-xs py-0.5 px-2 ${getPriorityColor(order.prioridad)}`}>
                                                        {order.prioridad}
                                                    </Badge>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                                                    <Car className="h-4 w-4 text-zinc-400" />
                                                    <span>{order.vehiculoNombre} ({order.placa})</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-zinc-500">
                                                    <User className="h-4 w-4 text-zinc-400" />
                                                    <span>Cliente: {order.clienteNombre}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end gap-2">
                                                <Badge variant="outline" className={`text-xs py-0.5 px-2 font-semibold ${getStatusColor(order.estadoNombre)}`}>
                                                    {order.estadoNombre}
                                                </Badge>
                                                <span className="text-xs text-zinc-400 font-mono">
                                                    {order.fechaCreacion}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Details Area */}
                        <div className="w-full md:w-[400px] border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 flex flex-col justify-between bg-zinc-50/20 dark:bg-zinc-950/20 overflow-y-auto">
                            {selectedOrder ? (
                                <div className="flex flex-col gap-5">
                                    <div>
                                        <div className="flex items-center justify-between mb-1">
                                            <h3 className="font-bold text-xl text-zinc-900 dark:text-white">
                                                Detalles de OT #{selectedOrder.idOrden}
                                            </h3>
                                            <Badge className={`text-xs ${getStatusColor(selectedOrder.estadoNombre)}`}>
                                                {selectedOrder.estadoNombre}
                                            </Badge>
                                        </div>
                                        <span className="text-sm text-zinc-500">Fecha de Registro: {selectedOrder.fechaCreacion}</span>
                                    </div>

                                    <Separator className="bg-zinc-200 dark:bg-zinc-800" />

                                    {/* Vehicles / Client specs */}
                                    <div className="space-y-4 text-sm">
                                        <div className="flex items-start gap-3">
                                            <User className="h-5 w-5 text-amber-500 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-zinc-900 dark:text-zinc-300">Cliente</p>
                                                <p className="text-zinc-600 dark:text-zinc-400">{selectedOrder.clienteNombre}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Car className="h-5 w-5 text-blue-500 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-zinc-900 dark:text-zinc-300">Vehículo</p>
                                                <p className="text-zinc-600 dark:text-zinc-400">
                                                    {selectedOrder.vehiculoNombre} - Mod. {selectedOrder.anio}<br/>
                                                    Placa: <span className="font-semibold text-zinc-900 dark:text-zinc-300">{selectedOrder.placa}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <UserCheck className="h-5 w-5 text-emerald-500 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-zinc-900 dark:text-zinc-300">Mecánico Asignado</p>
                                                <p className="text-zinc-600 dark:text-zinc-400">{selectedOrder.mecanicoNombre}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Separator className="bg-zinc-200 dark:bg-zinc-800" />

                                    {/* Problem / Diagnosis */}
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-300 flex items-center gap-2">
                                                <AlertCircle className="h-4 w-4 text-rose-500" />
                                                Problema Reportado
                                            </h4>
                                            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 italic shadow-sm">
                                                "{selectedOrder.descripcionProblema}"
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-300 flex items-center gap-2">
                                                <FileText className="h-4 w-4 text-zinc-500" />
                                                Diagnóstico Técnico
                                            </h4>
                                            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm leading-relaxed">
                                                {selectedOrder.diagnosticoDetallado}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between text-sm p-3 rounded-xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                                            <span className="font-medium text-zinc-700 dark:text-zinc-300">¿Taller Externo (Outsourcing)?</span>
                                            <Badge variant={selectedOrder.requiereOutsourcing ? 'destructive' : 'secondary'} className="text-xs">
                                                {selectedOrder.requiereOutsourcing ? 'Sí' : 'No'}
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center text-center h-full text-zinc-400 dark:text-zinc-500 py-10">
                                    <HelpCircle className="h-16 w-16 mb-4 stroke-1 text-zinc-300 dark:text-zinc-700" />
                                    <p className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">Detalles del Servicio</p>
                                    <p className="text-sm mt-2 max-w-[250px]">Selecciona una orden de trabajo de la lista para ver su diagnóstico completo.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
