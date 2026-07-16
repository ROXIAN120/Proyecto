<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class WorkOrderController extends Controller
{
    private $mockData = [
        [
            'idOrden' => 101,
            'clienteNombre' => 'Carlos Gomez',
            'vehiculoNombre' => 'Toyota Corolla',
            'placa' => '3847-ABC',
            'anio' => 2020,
            'mecanicoNombre' => 'Ing. Rodrigo Ledezma Sanchez',
            'prioridad' => 'Alta',
            'estadoNombre' => 'En reparación',
            'descripcionProblema' => 'Ruido persistente en la suspensión delantera al pasar por baches.',
            'diagnosticoDetallado' => 'Amortiguadores delanteros con fuga de aceite y bujes de bandeja desgastados. Se requiere reemplazo de ambos amortiguadores.',
            'requiereOutsourcing' => false,
            'fechaCreacion' => '2026-07-10',
        ],
        [
            'idOrden' => 102,
            'clienteNombre' => 'Maria Suarez',
            'vehiculoNombre' => 'Nissan Frontier',
            'placa' => '4921-XYZ',
            'anio' => 2018,
            'mecanicoNombre' => 'Luis Fernandez',
            'prioridad' => 'Media',
            'estadoNombre' => 'Finalizado',
            'descripcionProblema' => 'Mantenimiento preventivo de los 10,000 km y revisión de frenos.',
            'diagnosticoDetallado' => 'Cambio de aceite de motor (10W-30), cambio de filtro de aceite y aire. Las pastillas de freno delanteras tienen 70% de vida útil restante.',
            'requiereOutsourcing' => false,
            'fechaCreacion' => '2026-07-12',
        ],
        [
            'idOrden' => 103,
            'clienteNombre' => 'Juan Perez',
            'vehiculoNombre' => 'Suzuki Grand Vitara',
            'placa' => '5821-LMN',
            'anio' => 2022,
            'mecanicoNombre' => 'Carlos Rojas',
            'prioridad' => 'Baja',
            'estadoNombre' => 'Diagnóstico',
            'descripcionProblema' => 'Pérdida ocasional de potencia y testigo de "Check Engine" encendido.',
            'diagnosticoDetallado' => 'Código OBD-II indica falla en cilindro 3. Se sospecha de bobina de encendido defectuosa o bujía desgastada.',
            'requiereOutsourcing' => true,
            'fechaCreacion' => '2026-07-14',
        ]
    ];

    /**
     * Display the list of work orders page.
     */
    public function index(): Response
    {
        return Inertia::render('WorkOrders/Index', [
            'initialOrders' => $this->mockData,
        ]);
    }

    /**
     * Display the new work order form page.
     */
    public function create(): Response
    {
        return Inertia::render('WorkOrders/Create');
    }
}
