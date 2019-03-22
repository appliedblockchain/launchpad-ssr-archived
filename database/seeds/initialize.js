exports.seed = async knex => {
  // allow the seed command to be run any number of times, but won't insert anything if the users are already present
  try {
    await knex('users').insert([
      { email: 'remi@appliedblockchain.com', name: 'remi', password: 'password' },
      { email: 'tgomes@appliedblockchain.com', name: 'tgomes', password: '*1337*' },
      { email: 'francesco@appliedblockchain.com', name: 'makevoid', password: 'qwerty' },
      { email: 'dricher@appliedblockchain.com', name: 'dricher', password: '<3<3<3' }
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
