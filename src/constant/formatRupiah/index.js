export const formarRupiah = (data) => {
  return new Intl.NumberFormat("id-ID", {
    currency: "IDR",
    style: "currency",
    maximumFractionDigits: 0,
  }).format(data)
}
