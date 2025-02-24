"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roles = roles;
const client_1 = require("@prisma/client");
const role_const_1 = require("./const/role.const");
async function roles() {
    const prisma = new client_1.PrismaClient();
    const dbTransaction = [];
    console.log(`Roles found : ${role_const_1.rolesData.length}`);
    for (const data of role_const_1.rolesData) {
        dbTransaction.push(prisma.role.upsert({
            where: { name: data.name },
            create: {
                name: data.name,
                permissions: {
                    connect: data.permissions,
                },
            },
            update: {
                name: data.name,
                permissions: {
                    set: data.permissions,
                },
            },
        }));
    }
    const result = await prisma.$transaction(dbTransaction);
    console.log(`Roles loaded successfully : ${result.length}`);
}
roles();
//# sourceMappingURL=role.script.js.map