export interface User {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "User";
  joinedDate: string;
  isBanned: boolean;
}

export const usersData: User[] = [
  {
    id: 1,
    name: "Tin Ny",
    email: "tinnapat.takananant@gmail.com",
    role: "Admin",
    joinedDate: "07/01/2569",
    isBanned: false,
  },
  {
    id: 2,
    name: "Ju Lia",
    email: "julia12a2005@gmail.com",
    role: "Admin",
    joinedDate: "07/01/2569",
    isBanned: false,
  },
  {
    id: 3,
    name: "O Pal",
    email: "opalpiriyakorn@gmail.com",
    role: "User",
    joinedDate: "09/01/2569",
    isBanned: true,
  },
  {
    id: 4,
    name: "Po Om",
    email: "pktsoa@gmail.com",
    role: "User",
    joinedDate: "10/01/2569",
    isBanned: true,
  },
  {
    id: 5,
    name: "Pop Eye",
    email: "popeye@gmail.com",
    role: "User",
    joinedDate: "11/01/2569",
    isBanned: true,
  },
];
