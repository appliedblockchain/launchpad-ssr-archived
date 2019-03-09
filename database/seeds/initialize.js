exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
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
}
