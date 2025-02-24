import { Prisma } from '@prisma/client';

export const VenueSelect: Prisma.VenueSelect = {
  id: true,
  name: true,
  address: true,
  capacity: true,
};

export const UserSelect: Prisma.UserSelect = {
  id: true,
  phoneNumber: true,
  name: true,
  role: {
    select: {
      id: true,
      name: true,
      permissions: {
        select: {
          name: true,
        },
      },
    },
  },
};

export const CategorySelect: Prisma.CategorySelect = {
  id: true,
  name: true,
  parentId: true,
  subcategories: {
    select: {
      id: true,
      name: true,
    },
  },
};

export const GuestSelect: Prisma.GuestSelect = {
  id: true,
  name: true,
};

export const StallSelect: Prisma.StallSelect = {
  id: true,
  name: true,
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
  recurringDates: true,
};

export const TicketSelect: Prisma.TicketSelect = {
  id: true,
  qrCode: true,
  status: true,
};

export const ParticipantSelect: Prisma.ParticipantSelect = {
  id: true,
  name: true,
  status: true,
  ticket: {
    select: {
      id: true,
      qrCode: true,
      status: true,
    },
  },
};
