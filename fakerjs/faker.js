import { faker } from '@faker-js/faker';
import fs from 'fs';

function generateAccount() {

  let account = []

  for (let i=1; i <= 500000; i++) {

    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let nickName = faker.name.middleName();
    let gender = faker.name.gender(true);
    let birthday = faker.date.birthdate({ min: 18, max: 65, mode: 'age' });
    let profilpic = faker.datatype.uuid() + ".jpeg";
    let email = faker.internet.email();

    account.push({
        "i": i,
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
        "nickname": nickName,
        "gender": gender,
        "birthday": birthday,
        "profilpic": profilpic,

    });
  }

  return { "data": account }
}

let dataObj = generateAccount();

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));