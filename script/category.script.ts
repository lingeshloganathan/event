import { Prisma, PrismaClient } from '@prisma/client';
import { categoryData } from './data/category.data';

export async function categories() {
  const prisma = new PrismaClient();
  const dbTransaction: any[] = [];
  for (const category of categoryData) {
    let { name, parentId, subcategories } = category;
    let data: Prisma.CategoryCreateInput = {
      name,
      id: parentId,
      subcategories: {
        connectOrCreate: subcategories.map((subcategory) => ({
          where: { name: subcategory.name },
          create: { name: subcategory.name },
        })),
      },
    };
    dbTransaction.push(
      prisma.category.upsert({
        where: { id: parentId },
        create: data,
        update: data,
      }),
    );
  }
  const result = await prisma.$transaction(dbTransaction);
  console.log(`Categories created successfully: ${result.length}`);
}
categories();
