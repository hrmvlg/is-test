import { fakerRU as faker } from '@faker-js/faker';
import fs from 'fs';

const generateUsers = (numUsers) => {
    const users = [];
    for (let i = 0; i < numUsers; i++) {
        users.push({
            id: faker.string.uuid(),
            name: `Пользователь ${i + 1}`,
            department: Math.random() > 0.2 ? faker.commerce.department() : '',
            company: Math.random() > 0.15 ? faker.company.name() : '',
            jobTitle: Math.random() > 0.25 ? faker.person.jobTitle() : '',
        });
    }
    return { users };
}

const users = generateUsers(1000000);

fs.writeFileSync('users.json', JSON.stringify(users, null, 2), 'utf8');
console.log('Данные успешно сгенерированы и сохранены в users.json');