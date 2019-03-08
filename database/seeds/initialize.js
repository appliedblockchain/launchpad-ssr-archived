exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
  await knex('users').insert([
    { email: 'tgomes@appliedblockchain.com', name: 'tgomes', password: '*1337*' },
    { email: 'fcanessa@appliedblockchain.com', name: 'fcanessa', password: 'qwerty' },
    { email: 'dricher@appliedblockchain.com', name: 'dricher', password: '<3<3<3' }
  ]);
};
