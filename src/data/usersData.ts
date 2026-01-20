export interface User {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "User";
  joinedDate: string;
  reports?: UserReport[];
  banHistory?: BanHistoryEntry[];
}

export const usersData: User[] = [
  { id: 1, name: "Tinnapat Takananant", email: "tinnapat.takananant@gmail.com", role: "Admin", joinedDate: "2025-10-12" },
  { id: 2, name: "Yanisa Klongkleaw", email: "julia12a2005@gmail.com", role: "Admin", joinedDate: "2025-10-12" },
  { id: 3, name: "Piriyakorn Srisook", email: "opalpiriyakorn@gmail.com", role: "User", joinedDate: "2025-10-12" },
  { id: 4, name: "Keitipoom Tangsrithaweesuk", email: "pktsoa@gmail.com", role: "User", joinedDate: "2025-10-12" },
  { id: 5, name: "Chanachot Bungkri", email: "popeye@gmail.com", role: "User", joinedDate: "2025-10-12" },
];

export interface UserReport {
  reportId: string;
  offenderId: string;
  lastUpdate: string;
  reason: string;
}

export interface BanHistoryEntry {
  banId: number;
  banDate: string;
  unbanDate: string;
  reason: string;
}