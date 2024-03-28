
export type PeopleModel = {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

// export interface Root2 {
//     id: number
//     name: string
//     username: string
//     email: string
//     address: Address
//     phone: string
//     website: string
//     company: Company
//   }
  
//   export interface Address {
//     street: string
//     suite: string
//     city: string
//     zipcode: string
//     geo: Geo
//   }
  
//   export interface Geo {
//     lat: string
//     lng: string
//   }
  
//   export interface Company {
//     name: string
//     catchPhrase: string
//     bs: string
//   }
