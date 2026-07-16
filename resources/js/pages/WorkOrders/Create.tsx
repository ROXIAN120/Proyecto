import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { toast } from 'sonner';
import { 
    PlusCircle, 
    ArrowLeft,
    Car,
    AlertCircle,
    User,
    UserCheck,
    Save
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function Create() {
    const [formData, setFormData] = useState({
        clienteNombre: 'Carlos Gomez',
        vehiculoNombre: 'Toyota Corolla',
        placa: '',
        anio: 2020,
        mecanicoNombre: 'Ing. Rodrigo Ledezma Sanchez',
        prioridad: 'Media' as 'Alta' | 'Media' | 'Baja',
        descripcionProblema: '',
        diagnosticoDetallado: '',
        requiereOutsourcing: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (name: string, checked: boolean) => {
        setFormData(prev => ({
            ...prev,
            [name]: checked
        }));
    };

    const handleClientChange = (clientName: string) => {
        let vehicle = 'Toyota Corolla';
        let anio = 2020;
        if (clientName === 'Maria Suarez') {
            vehicle = 'Nissan Frontier';
            anio = 2018;
        } else if (clientName === 'Juan Perez') {
            vehicle = 'Suzuki Grand Vitara';
            anio = 2022;
        }
        setFormData(prev => ({
            ...prev,
            clienteNombre: clientName,
            vehiculoNombre: vehicle,
            anio: anio
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.placa.trim()) {
            toast.error('Por favor, introduce la placa del vehículo.');
            return;
        }
        if (!formData.descripcionProblema.trim()) {
            toast.error('Por favor, describe el problema reportado.');
            return;
        }

        setIsSubmitting(true);

        // Simulate network request
        setTimeout(() => {
            setIsSubmitting(false);
            toast.success('Orden de Trabajo registrada con éxito (Mock).');
            // Navigate back to the list using window location for now as mock
            window.location.href = '/ordenes';
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 p-6 flex flex-col items-center">
            <Head title="Nueva Orden de Trabajo" />
            
            <div className="w-full max-w-4xl">
                {/* Header Nav */}
                <div className="flex items-center gap-4 mb-8">
                    <Link href="/" className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                        <ArrowLeft className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <PlusCircle className="h-6 w-6 text-rose-500" />
                            Registrar Orden de Trabajo
                        </h1>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            Crea un nuevo registro de servicio en el taller.
                        </p>
                    </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm p-6 sm:p-10">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        
                        {/* Section 1: Parties */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="clienteNombre" className="text-sm font-bold flex items-center gap-2">
                                    <User className="h-4 w-4 text-zinc-500" /> Cliente
                                </Label>
                                <select
                                    name="clienteNombre"
                                    id="clienteNombre"
                                    value={formData.clienteNombre}
                                    onChange={(e) => handleClientChange(e.target.value)}
                                    className="w-full text-sm rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-3 text-zinc-900 dark:text-zinc-50 focus:border-rose-500 focus:outline-none"
                                >
                                    <option value="Carlos Gomez">Carlos Gomez</option>
                                    <option value="Maria Suarez">Maria Suarez</option>
                                    <option value="Juan Perez">Juan Perez</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="mecanicoNombre" className="text-sm font-bold flex items-center gap-2">
                                    <UserCheck className="h-4 w-4 text-zinc-500" /> Mecánico Asignado
                                </Label>
                                <select
                                    name="mecanicoNombre"
                                    id="mecanicoNombre"
                                    value={formData.mecanicoNombre}
                                    onChange={handleInputChange}
                                    className="w-full text-sm rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-3 text-zinc-900 dark:text-zinc-50 focus:border-rose-500 focus:outline-none"
                                >
                                    <option value="Ing. Rodrigo Ledezma Sanchez">Ing. Rodrigo Ledezma Sanchez</option>
                                    <option value="Luis Fernandez">Luis Fernandez</option>
                                    <option value="Carlos Rojas">Carlos Rojas</option>
                                </select>
                            </div>
                        </div>

                        {/* Section 2: Vehicle Info */}
                        <div className="p-5 bg-zinc-50/50 dark:bg-zinc-950/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-4">
                            <h4 className="text-sm font-bold flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-3 mb-4">
                                <Car className="h-5 w-5 text-blue-500" />
                                Detalle del Vehículo
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                                <div>
                                    <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider block mb-1">Modelo Automóvil</span>
                                    <span className="text-base font-semibold text-zinc-800 dark:text-zinc-200">{formData.vehiculoNombre}</span>
                                </div>
                                <div>
                                    <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider block mb-1">Año Fabricación</span>
                                    <span className="text-base font-semibold text-zinc-800 dark:text-zinc-200">{formData.anio}</span>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="placa" className="text-xs text-zinc-500 font-bold uppercase tracking-wider block">
                                        Matrícula / Placa
                                    </Label>
                                    <Input
                                        type="text"
                                        name="placa"
                                        id="placa"
                                        value={formData.placa}
                                        onChange={handleInputChange}
                                        placeholder="Ej: 3847-ABC"
                                        className="h-11 font-mono uppercase bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:ring-rose-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Service Specifications */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                            <div className="space-y-2">
                                <Label htmlFor="prioridad" className="text-sm font-bold">
                                    Nivel de Urgencia / Prioridad
                                </Label>
                                <select
                                    name="prioridad"
                                    id="prioridad"
                                    value={formData.prioridad}
                                    onChange={handleInputChange}
                                    className="w-full text-sm rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-3 text-zinc-900 dark:text-zinc-50 focus:border-rose-500 focus:outline-none"
                                >
                                    <option value="Alta">Alta (Urgente)</option>
                                    <option value="Media">Media (Estándar)</option>
                                    <option value="Baja">Baja (Mantenimiento)</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="requiereOutsourcing" className="text-sm font-bold">
                                        ¿Requiere Taller Externo?
                                    </Label>
                                    <span className="text-xs text-zinc-400">Outsourcing</span>
                                </div>
                                <div className="flex items-center gap-3 h-[46px] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 rounded-xl px-4 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
                                    <input
                                        type="checkbox"
                                        name="requiereOutsourcing"
                                        id="requiereOutsourcing"
                                        checked={formData.requiereOutsourcing}
                                        onChange={(e) => handleCheckboxChange('requiereOutsourcing', e.target.checked)}
                                        className="h-4 w-4 rounded text-rose-500 focus:ring-rose-500"
                                    />
                                    <label htmlFor="requiereOutsourcing" className="text-sm text-zinc-600 dark:text-zinc-400 flex-1 cursor-pointer">
                                        Esta reparación requiere apoyo externo
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Section 4: Text Areas */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="descripcionProblema" className="text-sm font-bold flex items-center gap-2">
                                    <AlertCircle className="h-4 w-4 text-zinc-500" /> Descripción del Problema
                                </Label>
                                <textarea
                                    name="descripcionProblema"
                                    id="descripcionProblema"
                                    rows={3}
                                    value={formData.descripcionProblema}
                                    onChange={handleInputChange}
                                    placeholder="Describe brevemente los fallos o ruidos reportados por el cliente..."
                                    className="w-full text-sm rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-4 text-zinc-900 dark:text-zinc-50 focus:border-rose-500 focus:outline-none resize-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="diagnosticoDetallado" className="text-sm font-bold">
                                        Diagnóstico Técnico Inicial
                                    </Label>
                                    <span className="text-xs text-zinc-400">Opcional</span>
                                </div>
                                <textarea
                                    name="diagnosticoDetallado"
                                    id="diagnosticoDetallado"
                                    rows={4}
                                    value={formData.diagnosticoDetallado}
                                    onChange={handleInputChange}
                                    placeholder="Ingrese observaciones iniciales del mecánico si están disponibles..."
                                    className="w-full text-sm rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-4 text-zinc-900 dark:text-zinc-50 focus:border-rose-500 focus:outline-none resize-none"
                                />
                            </div>
                        </div>

                        {/* Submit Actions */}
                        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-end gap-4">
                            <Link href="/">
                                <Button type="button" variant="ghost" className="rounded-xl px-6">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="bg-gradient-to-r from-rose-500 to-amber-500 hover:opacity-90 text-white rounded-xl px-8 h-11"
                            >
                                {isSubmitting ? (
                                    <>Guardando...</>
                                ) : (
                                    <><Save className="w-4 h-4 mr-2" /> Guardar Orden</>
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
