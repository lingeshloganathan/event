import { Prisma } from '@prisma/client';

export const VenueSelect: Prisma.VenueSelect = {
  id: true,
  name: true,
  address: true,
  capacity: true,
};

export const USerSelect: Prisma.UserSelect = {
  id: true,
  phoneNumber: true,
  role: {
    select: {
      name: true,
    },
  },
};

export const CategorySelect: Prisma.CategorySelect = {
  id: true,
  name: true,
  parentId: true,
};
