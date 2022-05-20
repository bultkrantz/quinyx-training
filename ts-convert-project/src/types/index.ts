// Create interfaces for each object here, look at the response you get in the browser.

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

// Posts
export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}
