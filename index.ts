type User = {
  id: number;
  name: string;
  age: number;
  salary?: number;
};
type Teacher = {
  id: number;
  name: string;
  sub: string;
  name_of_students: string;
};

const userArr: User[] = [
  { id: 1, age: 12, name: "Affan", salary: 40000 },
  { id: 2, age: 12, name: "Arshad", salary: 41000 },
  { id: 3, age: 12, name: "Naved", salary: 42000 },
  { id: 4, age: 12, name: "Haroon", salary: 43000 },
  { id: 5, age: 12, name: "Huzaifa", salary: 44000 },
  { id: 6, age: 12, name: "Bushra", salary: 45000 },
  { id: 7, age: 12, name: "Prathmesh", salary: 46000 },
  { id: 8, age: 12, name: "Saiyam", salary: 47000 },
  { id: 9, age: 12, name: "Mohit", salary: 40000 },
  { id: 10, age: 12, name: "Shakir", salary: 40000 },
];
