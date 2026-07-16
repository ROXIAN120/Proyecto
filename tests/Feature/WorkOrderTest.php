<?php

namespace Tests\Feature;

use Tests\TestCase;

class WorkOrderTest extends TestCase
{
    /**
     * Test that the work orders index page is accessible.
     */
    public function test_work_orders_index_page_is_displayed(): void
    {
        $response = $this->get('/ordenes');

        $response->assertOk();
    }

    /**
     * Test that the work orders create page is accessible.
     */
    public function test_work_orders_create_page_is_displayed(): void
    {
        $response = $this->get('/ordenes/nueva');

        $response->assertOk();
    }
}
