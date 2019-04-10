const { hash } = require('@appliedblockchain/mantle-auth/auth/scrypt')

exports.seed = async knex => {

  const password = await hash('password')

  // allow the seed command to be run any number of times, but won't insert anything if the users are already present
  try {
    await knex('users').insert([
      { email: 'remi@appliedblockchain.com', name: 'remi', password },
      { email: 'tgomes@appliedblockchain.com', name: 'tgomes', password },
      { email: 'francesco@appliedblockchain.com', name: 'makevoid', password },
      { email: 'dricher@appliedblockchain.com', name: 'dricher', password }
    ])

    await knex('companies').insert([
      { name: 'applied blockchain' },
      { name: 'ethdev' },
      { name: 'blockstream' },
      { name: 'paritytech' }
    ])

    await knex('myresource').insert([
      { name: 'resource entry 1', description: 'resource description' },
      { name: 'resource entry 2', description: 'resource description' },
      { name: 'resource entry 3', description: 'resource description' }
    ])
  } catch (err) {
    console.error(err)
  }
}
