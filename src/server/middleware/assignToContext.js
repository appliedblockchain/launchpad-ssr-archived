
const assignToContext = ({ contracts, web3 }) => {
  const env = process['env']
  const sendParams = {
    from: env.FROM || '0x1F2e5282481C07BC8B7b07E53Bc3EF6A8012D6b7',
    gas: env.gas || '500000',
    gasPrice: env.gasPrice || '0'
  }

  return async function (ctx, next) {
    Object.assign(ctx, { contracts, web3, sendParams })
    await next()
  }
}

export default assignToContext
