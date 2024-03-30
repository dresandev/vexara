import Link from 'next/link'
import { db } from '~/lib/db'
import { auth } from '~/auth'
import { formatDate } from '~/helpers/format-datet'
import { NoOrders } from '../_components/no-orders'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table'
import styles from './page.module.css'

export default async function UserOrdersPage() {
  const session = await auth()
  const orders = await db.order.findMany({
    where: { userId: session?.user?.id },
    select: { id: true, createdAt: true }
  })

  if (!orders.length) return (
    <NoOrders />
  )

  return (
    <>
      <h1 className={styles.title}>Mis compras</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Opciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map(({ id, createdAt }) => (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell className={styles.textNoWrap}>
                {formatDate(createdAt)}
              </TableCell>
              <TableCell className={styles.textNoWrap}>
                <Link
                  className={styles.orderDetailsLink}
                  href={`/user-orders/${id}`}
                >
                  Ver detalles
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
