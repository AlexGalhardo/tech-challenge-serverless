import { Timestamps } from "./timestamps";

export interface UserKey {
    id: string;
}

export interface UserBody {
    name: string;
    email: string;
    password: string;
}

export interface User extends UserKey, UserBody, Timestamps {}
