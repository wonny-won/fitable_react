import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid" 

/**********************************************************************
 * firebase commons
 **********************************************************************/
const firebaseConfig = {
    apiKey: "AIzaSyAX6918sg9w4zRW8aYrPF3axBZC550zsKY",
    authDomain: "fitable-react.firebaseapp.com",
    projectId: "fitable-react",
    storageBucket: "fitable-react.appspot.com",
    messagingSenderId: "275248268175",
    appId: "1:275248268175:web:b624e3231c0bf5d621c1fa",
    measurementId: "G-PGEWVD8NQP"
  };
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

/**********************************************************************
 * insert [ Create ] 
 * 문서 생성
 **********************************************************************/
interface insertParam {
    collectionName : string;
    req:any;
}

export const creatProgramApplication = (param:insertParam)=>{
    try{
        createDocs(param)
        return console.log('success to apply')
    }catch(error){
        console.log(error)
    }
}

async function createDocs (param:insertParam){
    const {collectionName,req} =  param;
    await setDoc(doc(db,collectionName,uuidv4()),req);
}
