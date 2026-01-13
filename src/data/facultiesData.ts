export interface Faculty {
  id: number;
  name: string;       // Name (English)
  thaiName: string;   // Thai Name
  color: string;
}

export const facultiesData: Faculty[] = [
{ id: 1, name: "Engineering", thaiName: "วิศวกรรมศาสตร์", color: "blue" },
{ id: 2, name: "Science", thaiName: "วิทยาศาสตร์", color: "green" },
{ id: 3, name: "Information Technology", thaiName: "เทคโนโลยีสารสนเทศ", color: "indigo" },
{ id: 4, name: "Business Administration", thaiName: "บริหารธุรกิจ", color: "purple" },
{ id: 5, name: "Arts & Humanities", thaiName: "ศิลปศาสตร์", color: "pink" },

];