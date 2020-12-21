const inputs = [
 { 
    id: 'name',
    validations: [
      { 
        id: 'required',
        message: 'This field is required.' 
      },
    ], 
  },
  { 
    id: 'email',
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
    validations: [
      { 
        id: 'required',
        message: 'This field is required'
      },
      { id: 'minLength',
        value: 20,
        message: 'Minimum number of characters: 20'
      },
    ], 
  },
];

export default inputs;