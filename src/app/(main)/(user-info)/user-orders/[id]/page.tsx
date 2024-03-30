import Link from 'next/link'
import { notFound } from 'next/navigation'
import { auth } from '~/auth'
import { db } from '~/lib/db'
import { formatPrice } from '~/helpers/format-price'
import { getPriceWithDiscount } from '~/helpers/get-price-with-discount'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table'
import { ChevronArrow } from '~/components/svg'
import styles from './page.module.css'

interface Props {
  params: { id: string }
}

export default async function UserOrdersPage({
  params: { id }
}: Props) {
  const session = await auth()
  const order = await db.order.findUnique({
    where: {
      userId: session?.user?.id,
      id
    },
    select: {
      orderItems: {
        select: {
          size: true,
          quantity: true,
          product: {
            select: {
              id: true,
              name: true,
              images: { select: { url: true } },
              price: true,
              discount: true
            }
          },
        }
      }
    }
  })

  if (!order) notFound()

  return (
    <>
      <div className={styles.header}>
        <Link
          className={styles.backLink}
          href='/user-orders/'
        >
          <ChevronArrow direction='left' />
        </Link>
        <h1 className={styles.title}>#{id}</h1>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Producto</TableHead>
            <TableHead>Cantidad</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>ID</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {order?.orderItems.map(({ product, quantity, size }) => {
            const price = getPriceWithDiscount(
              product.price,
              product.discount,
            )

            return (
              <TableRow key={product.id}>
                <TableCell>
                  <div className={styles.productCard}>
                    <img
                      className={styles.image}
                      src={product.images[2].url}
                      alt=''
                      width={80}
                      height={100} />
                    <div className={styles.info}>
                      <Link
                        className={styles.productLink}
                        href={`/product/${product.id}`}
                      >
                        {product.name}
                      </Link>
                      <span className={styles.size}>
                        Talla: {size.name}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{quantity}</TableCell>
                <TableCell className={styles.textNoWrap}>
                  {formatPrice(price)}
                </TableCell>
                <TableCell>{product.id}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </>
  )
}
