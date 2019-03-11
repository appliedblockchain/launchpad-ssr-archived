exports.seed = async knex => {
  const adminEmail = 'admin@appliedblockchain.com'
  const adminRole = 'admin'
  const companyName = 'Applied Blockchain Ltd.'

  await knex('company_name').where('name', companyName).del()
  await knex('user_role').where('name', adminRole).del()
  await knex('users').where('email', adminEmail).del()

  const [ { id: role } ] = await knex('user_role').insert([ { name: adminRole } ], [ 'id' ])
  const [ { id: company } ] = await knex('company_name').insert([ { name: companyName } ], [ 'id' ])

  await knex('users').insert([{
    company,
    email: adminEmail,
    location: 'Everywhere',
    name: 'admin',
    password: 'admin pass',
    phone: '01234567890',
    role
  }]);
};
