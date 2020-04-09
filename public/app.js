/*The first is an event listener that initialize our firebase app. This initialization holds many 
services that will be useful to us at a later point.*/
document.addEventListener("DOMContentLoaded",event => {
    const app = firebase.app()
 })
 /*function allows us to do something with our google authentication provider. signInWithPopup returns a
  promise that we can then utilize to perform an asynchronous operation such as displaying a username.*/
 const googleLogin = () => {
 const provider = new firebase.auth.GoogleAuthProvider()
 firebase.auth().signInWithPopup(provider)
 .then(result => {
        const user = result.user
        document.write(`Hello ${user.displayName}`)
        console.log(user) 
 })
 .catch(console.log)
  
 }

 const myfunc = () => {

   console.log("hello")

 }
 