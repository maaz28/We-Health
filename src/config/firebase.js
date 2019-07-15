import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDdBNby1cOF5eEi1C4mjtnWjh3jmM1kQ84",
    authDomain: "dramaticallyengage-2ad59.firebaseapp.com",
    databaseURL: "https://dramaticallyengage-2ad59.firebaseio.com",
    projectId: "dramaticallyengage-2ad59",
    storageBucket: "dramaticallyengage-2ad59.appspot.com",
    messagingSenderId: "60973984367",
    appId: "1:60973984367:web:4a98273c8268c94b"
  };

  firebase.initializeApp(firebaseConfig);

  const signup = (name,email,password) => {
    return new Promise((resolve,reject)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((user)=>{
          console.log('Signup successfull')
          let obj = {
            name,
            email,
            uid: user.user.uid
          }
          firebase.database().ref('users').child(user.user.uid).set(obj)
          .then(()=>{
            resolve(user)
          })
            .catch((e) => {
              const mess = e.message
              reject({ message: mess })
            })
        })
        .catch((e)=>{
          const mess=e.message
          reject({message:mess})
        })
    })  
}

const login = (email,password,ev) => {
  return new Promise((resolve,reject)=>{
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((user)=>{
      console.log('logged in--->',user)
      sessionStorage.setItem('uid',user.user.uid)
      resolve(user)
      console.log(user.user.uid)
      ev()
    })
    .catch((e)=>{
      const mess=e.message
      reject({message:mess})
    })
  })
}

const logout = (ev) => {
    firebase.auth().signOut()
    .then(()=>{
      ev()
    })
    .catch((e)=>{
      console.log(e.message)
    })
}

const sendRequest = (uid,data,count,address) => {
  let obj = {
    data,
    uid,
    count,
    address
  }
  firebase.database().ref('requests').child(uid).push(obj)
}

const getRequests = (uid) => {
  return new Promise ((resolve,reject)=>{
    firebase.database().ref('requests')
    .on('value',(data)=>{
      let userData = data.val()
      resolve(userData)
    })
    // .catch((e)=>{
    //   const mess=e.message
    //   reject({message:mess})
    // })
  })
}

// submitFile = () => {
//   firebase.storage().ref('files/' + img.name).put(img)
//     .then(async (success) => {
//       await firebase.storage().ref('files/' + img.name).getDownloadURL()
//         .then(async (url) => {
// }

// const currentUser = () => {
//   const data = firebase.auth().currentUser.uid
//   console.log(data)
//   // console.log(uid)
// }

  export {
    signup,
    login,
    // currentUser,
    getRequests,
    sendRequest,
    logout
  }