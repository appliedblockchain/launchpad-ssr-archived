exports.seed = async knex => {

  await knex('users').del()

  // ---

  await knex('users').insert([
    { email: 'tgomes@appliedblockchain.com', name: 'tgomes', password: '*1337*' },
    { email: 'francesco@appliedblockchain.com', name: 'makevoid', password: 'qwerty' },
    { email: 'dricher@appliedblockchain.com', name: 'dricher', password: '<3<3<3' }
  ])

  await knex('companies').insert([
    { name: 'applied blockchain' },
    { name: 'ethdev' },
    { name: 'blockstream' },
    { name: 'paritytech' },
  ])

  await knex('newresource').insert([
    { name: 'resource entry 1' },
    { name: 'resource entry 2' },
    { name: 'resource entry 3' },
  ])

}
