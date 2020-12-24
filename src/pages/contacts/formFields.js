const inputs = [
 { 
    id: 'name',
    value: 'André Correia',
    validations: [
      { 
        id: 'required',
        message: 'This field is required.' 
      },
    ], 
  },
  { 
    id: 'email',
    value: 'andrefbcorreia@gmail.com',
    validations: [
      { 
        id: 'required',
        message: 'This field is required.'
      },
      {
        id: 'emailFormat',
        message: 'Wrong email format.'
      },
    ],
  },
  {
    id: 'message',
    value: 'Hello world',
    validations: [
      { 
        id: 'required',
        message: 'This field is required'
      },
      { id: 'minLength',
        value: 1,
        message: 'Minimum number of characters: 20'
      },
    ], 
  },
];

export default inputs;