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

export const EventSelect: Prisma.EventSelect = {
  id: true,
  name: true,
  description: true,
  eventType: true,
  registrationType: true,
  date: true,
  venue: {
    select: {
      id: true,
      name: true,
      address: true,
      capacity: true,
    },
  },
  category: {
    select: {
      name: true,
      subcategories: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  },
};
