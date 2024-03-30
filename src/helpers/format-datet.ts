export const formatDate = (date: Date) => {
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ]

  const mes = months[date.getMonth()]
  const dia = date.getDate()
  const año = date.getFullYear()

  return `${mes} ${dia}, ${año}`
}
