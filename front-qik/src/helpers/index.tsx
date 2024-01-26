export const formatToMoneyBr = (value: number) => {
    try {
      return `R$${value.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+,)/g, '$1.')}`
    } catch (error) {
      return value
    }
  }