import { createContext, useState } from 'react';

export const ContextSelect = createContext();

const initialValue = {
  select: {
    car: [
      {
        name:'brand',
        label: 'Aston Martin',
        value: 'Aston Martin',
        models: [
          {name:'model',label:'DB2', value: 'DB2'},
          {name:'model',label:'DB6', value: 'DB6'},
          {name:'model',label:'Lagonda', value: 'Lagonda'},
        ]
      },
      {
        name:'brand',
        label: 'Austin',
        value: 'Austin',
        models: [
          {name:'model',label:'Frogeye Sprite', value: 'Frogeye Sprite'},
          {name:'model',label:'Healey 3000 MK3', value: 'Healey 3000 MK3'},
          {name:'model',label:'Ten Cabrio', value: 'Ten Cabrio'},
        ]
      },
      {
        name:'brand',
        label: 'Bentley',
        value: 'Bentley',
        models: [
          {name:'model',label:'Continental', value: 'Continental'},
          {name:'model',label:'Mark VI', value: 'Mark VI'},
          {name:'model',label:'S1', value: 'S1'},
          {name:'model',label:'Special Old', value: 'Special Old'},
        ]
      },
      {
        name:'brand',
        label: 'Buick',
        value: 'Buick',
        models: [
          {name:'model',label:'Model 24', value: 'Model 24'},
          {name:'model',label:'Riviera', value: 'Riviera'},
          {name:'model',label:'Roadmaster', value: 'Roadmaster'},
          {name:'model',label:'Super Sedan', value: 'Super Sedan'},
        ]
      },
      {
        name:'brand',
        label: 'Chevrolet',
        value: 'Chevrolet',
        models: [
          {name:'model',label:'Camaro', value: 'Camaro'},
          {name:'model',label:'Corvette', value: 'Corvette'},
          {name:'model',label:'Double Phantom', value: 'Double Phantom'},
        ]
      },
      {
        name:'brand',
        label: 'Citroen',
        value: 'Citroen',
        models: [
          {name:'model',label:'2CV', value: '2CV'},
          {name:'model',label:'DS Cabrio', value: 'DS Cabrio'},
          {name:'model',label:'Traction', value: 'Traction'},
        ]
      },
      {
        name:'brand',
        label: 'De Tomaso',
        value: 'De Tomaso',
        models: [
          {name:'model',label:'Pantera', value: 'Pantera'},
          {name:'model',label:'Deauville', value: 'Deauville'},
        ]
      },
      {
        name:'brand',
        label: 'Fiat',
        value: 'Fiat',
        models: [
          {name:'model',label:'500', value: '500'},
          {name:'model',label:'Balilla', value: 'Balilla'},
          {name:'model',label:'Spider', value: 'Spider'},
          {name:'model',label:'Torpedo', value: 'Torpedo'},
        ]
      },
      {
        name:'brand',
        label: 'Ford',
        value: 'Ford',
        models: [
          {name:'model',label:'F-100', value: 'F-100'},
          {name:'model',label:'T', value: 'T'},
          {name:'model',label:'Roadster', value: 'Roadster'},
          {name:'model',label:'Thunderbird', value: 'Thunderbird'},
        ]
      },
      {
        name:'brand',
        label: 'Jaguar',
        value: 'Jaguar',
        models: [
          {name:'model',label:'E-Type', value: 'E-Type'},
          {name:'model',label:'MKII', value: 'MKII'},
          {name:'model',label:'XK120', value: 'XK120'},
        ]
      },
      {
        name:'brand',
        label: 'OldTimer',
        value: 'OldTimer',
        models: [
          {name:'model',label:'Almicar',value: 'Almicar'},
          {name:'model',label:'Chevrolet', value: 'Chevrolet'},
          {name:'model',label:'Overige', value: 'Overige'},
          {name:'model',label:'Tourer', value: 'Tourer'},
        ]
      },
      {
        name:'brand',
        label: 'Pontiac',
        value: 'Pontiac',
        models: [
          {name:'model',label:'6-27 Coupe', value: '6-27 Coupe'},
          {name:'model',label:'Catalina', value: 'Catalina'},
          {name:'model',label:'Firebird', value: 'Firebird'},
          {name:'model',label:'GTO', value: 'GTO'},
        ]
      },
      {
        name:'brand',
        label: 'Rolls-Royce',
        value: 'Rolls-Royce',
        models: [
          {name:'model',label:'Freestone', value: 'Freestone'},
          {name:'model',label:'Phantom II', value: 'Phantom II'},
          {name:'model',label:'Silver', value: 'Silver'},
        ]
      }
    ],
    seller: [
      {name:'seller', label:'Particular', value: 'Particular'},
      {name:'seller', label:'Concesionario', value: 'Concesionario'}
    ],
  },
}

const ContextProvider = (props) => {
  const [data, setData] = useState(initialValue);
  // console.log(data.userLoginData);

  // return (
    // <Context.Provider value={{data, setData}}>
    //   {props.children}
    // </Context.Provider>
  // )
}

export { ContextProvider }

