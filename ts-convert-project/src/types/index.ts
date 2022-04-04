// GEO
interface Geo {
  lat: string;
  lng: string;
}

// Adress
interface Adress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

// Company
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

// User
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Adress;
  phone: string;
  website: string;
  company: Company;
}

// Todo
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
