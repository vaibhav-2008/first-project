import { Injectable } from '@angular/core';

// interface
export interface IContact{
    id: number;
    name: string;
    email: string;
    phone: string;
}
// class that implemets interface
// Model --

export class Contact implements IContact {
    id: number;
    name: string;
    email: string;
    phone: string;
}
