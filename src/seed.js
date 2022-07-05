export function seedDatabase(firebase) {
  const users = [
    {
      userId: "gD7fAfqexDYlfToyqL99ozQYjCp2",
      username: "anson",
      fullName: "Anson Lau",
      emailAddress: "ansonlau39@gmail.com",
      sessions: [],
      dateCreated: Date.now(),
    },

    {
        userId: "2",
        username: "kiki",
        fullName: "Kiki",
        emailAddress: "ansonlau39@gmail.com",
        sessions: [],
        dateCreated: Date.now(),
      },

    
  ];

  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection('users').add(users[k]);
  }
}
