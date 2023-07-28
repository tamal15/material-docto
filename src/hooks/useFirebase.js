import { useState ,useEffect} from "react"
import { getAuth, createUserWithEmailAndPassword,signOut , onAuthStateChanged ,signInWithEmailAndPassword ,GoogleAuthProvider ,signInWithPopup ,updateProfile, getIdToken} from "firebase/auth";
import initializeAuthentication from "../Pages/Home/Login/Firebase/firebase.init"

initializeAuthentication()
const useFirebase=()=>{
    const[user,setUser]=useState({})
    const [isLoading,setIsLoading]=useState(true)
    const [authError,setAuthError]=useState('')
    const [admin,setAdmin]=useState(false)
    const [doctor,setDoctor]=useState(false)
    const [hospital,setHospital]=useState(false)
    // const [user,setHospital]=useState(false)
    const [token,setToken]=useState('')
    const [toggle,setToggle]=useState(false)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleClick=()=>{
      setToggle(false)
  }

    const registerUser=(email,password,name,role,history)=>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const newUser={email,displayName:name,role}
    setUser(newUser)
    // save user to databse 
    saveUserDatabase(email,name,role,'POST')
    // send name to firebase after creation 
    updateProfile(auth.currentUser, {
      displayName:name
    }).then(() => {
      
    }).catch((error) => {
    
    });

   setAuthError('')
   history.replace('/login')
  })
  .catch((error) => {
    // const errorCode = error.code;
    setAuthError(error.message) 
    // ..
  })
      .finally(()=> setIsLoading(false));
    }

    // login 
    const loginUser=(email,password,location,history)=>{
       setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const destination=location?.state?.from || '/'
    history.push(destination)
    setAuthError('')
  })
  .catch((error) => {
    // const errorCode = error.code;
    setAuthError(error.message) 
  })
  .finally(()=> setIsLoading(false));
    }

    const signInGoogle=(location,history)=>{
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUserDatabase(user.email, user.displayName,'PUT')
      
        setAuthError('');
        const destination=location?.state?.from || '/'
        history.push(destination)
        console.log(destination)
       
        // ...
      }).catch((error) => {
        setAuthError(error.message) 
      }).finally(()=> setIsLoading(false));
    }

    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth, (user) => {
            if (user) {
            setUser(user)
            getIdToken(user)
            .then(idToken =>{
              setToken(idToken)
            })
            } else {
             setUser({})
            }
            setIsLoading(false)
          });
          return ()=>unsubscribe;
    },[])

    // databse admin value check 
    useEffect(()=>{
     fetch(`http://localhost:5000/register/${user.email}`)
     .then(res=>res.json())
     .then(data=>setAdmin(data.admin))
    },[user.email])


    useEffect(()=>{
     fetch(`http://localhost:5000/registers/${user.email}`)
     .then(res=>res.json())
     .then(data=>setDoctor(data.doctor))
    },[user.email])

    useEffect(()=>{
     fetch(`http://localhost:5000/registerss/${user.email}`)
     .then(res=>res.json())
     .then(data=>setHospital(data.hospital))
    },[user.email])
    

    const logout=()=>{
        setIsLoading(true)
        setToggle(false)
        signOut(auth).then(() => {
            // Sign-out successful.
            
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=> setIsLoading(false));
    }

    //  user registration information (store to the database )
    const saveUserDatabase =(email,displayName,role,method) => {
      const user={email,displayName,role}
      fetch('http://localhost:5000/register', {
        method:method,
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(user)
      })
      .then()

    }

    return{
        user,
        admin,
        doctor,
        hospital,
        token,
        logout,
        registerUser,
        loginUser,
        toggle,
        authError,
        signInGoogle,
        handleClick,
        setToggle,
        isLoading
    }
}

export default useFirebase;