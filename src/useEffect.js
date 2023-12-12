import axios from "axios";

import { useState, useEffect } from "react";

const effectApp=()=>{

const [notes,setNotes] = useState([])

const getnotes = ()=>{
    axios.get('http://localhost:3002/notes/')
    .then(response=> console.log('response data',response.data))
    .catch(error=> console.log('error',error))
};

useEffect(getnotes, []);

}

export default effectApp;