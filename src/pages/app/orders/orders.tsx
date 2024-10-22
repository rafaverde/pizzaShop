import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { GetOrders } from "@/api/get-orders";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pagination } from "@/components/pagination";

import { OrderTableRow } from "./order-table-row";
import { OrderTableFilter } from "./order-table-filter";

export function Orders() {
  const { data: result } = useQuery({
    queryKey: ["orders"],
    queryFn: GetOrders,
  });

  return (
    <div>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

        <div className="space-y-3">
          <OrderTableFilter />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead className="w-[180px]">Realizado</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-[140px]">Total do pedido</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {result &&
                  result.orders.map((order) => (
                    <OrderTableRow key={order.orderId} order={order} />
                  ))}
              </TableBody>
            </Table>
          </div>
          <Pagination pageIndex={0} perPage={10} totalCount={40} />
        </div>
      </div>
    </div>
  );
}
