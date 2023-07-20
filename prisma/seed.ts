import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const history = await prisma.history.create({
        data: {
            title: '测试标题',
            protocol: 'http:',
            hostname: 'localhost',
            port: '80',
            pathname: '/',
            search: '?page=1&size=10',
            hash: '#/toolbox/hash',
            href: 'http://localhost:4000/?page=1&size=10',
        },
    });

    console.log({ history });
}

main()
    .catch(e => {
        console.log(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
