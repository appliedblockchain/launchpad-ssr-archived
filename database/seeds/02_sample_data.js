const faker = require('faker')

const companyCount = 10
const vesselCount = 10

const userCount = 100
const eventCount = 50
const documentCount = 200

const docStatusList = [ 'incoming', 'sent' ]
const roleList = [ 'guest', 'user' ]
const vesselStatusList = [ 'incoming', 'delayed' ]

exports.seed = async knex => {
  let insertList

  faker.seed(1337)

  // insert user roles and retrieve ids
  const roleIdList = (await knex('user_role').insert(roleList.map(name => ({ name })), [ 'id' ]))
    .map(({ id }) => id)

  // insert company names and retrieve ids
  insertList = []
  for (let i = companyCount; i > 0; --i) {
    insertList.push({ name: faker.company.companyName() })
  }
  const companyIdList = (await knex('company_name').insert(insertList, [ 'id' ]))
    .map(({ id }) => id)

  insertList = []
  for (let i = vesselCount; i > 0; --i) {
    insertList.push({
      name: faker.name.firstName(),
      eta: faker.date.future(),
      block: faker.lorem.word(),
      comm: faker.lorem.word(),
      so: faker.lorem.word(),
      description: faker.lorem.sentence(),
      status: faker.random.arrayElement(vesselStatusList)
    })
  }
  await knex('vessels').insert(insertList)

  insertList = []
  for (let i = userCount; i > 0; --i) {
    insertList.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      password: faker.internet.password(),
      location: faker.address.zipCode(),
      company: faker.random.arrayElement(companyIdList),
      role: faker.random.arrayElement(roleIdList)
    })
  }
  //insert users and retrieve ids
  const userIdList = (await knex('users').insert(insertList, [ 'id' ]))
    .map(({ id }) => id)

  insertList = []
  for (let i = eventCount; i > 0; --i) {
    insertList.push({
      title: faker.random.words(),
      description: faker.lorem.sentence(),
      location: faker.address.zipCode(),
      start: faker.date.past(),
      ends: faker.date.future(),
      notes: faker.lorem.sentence(),
      private: faker.random.boolean(),
      guest: faker.random.arrayElement(userIdList),
      created_by: faker.random.arrayElement(userIdList)
    })
  }
  await knex('events').insert(insertList)

  insertList = []
  for (let i = documentCount; i > 0; --i) {
    insertList.push({
      filename: faker.system.fileName(),
      type: faker.system.fileType(),
      origin: faker.internet.domainName(),
      eta: faker.date.future(),
      description: faker.lorem.sentence(),
      status: faker.random.arrayElement(docStatusList),
      receiver: faker.random.arrayElement(userIdList),
      created_by: faker.random.arrayElement(userIdList)
    })
  }
  await knex('documents').insert(insertList)
};
