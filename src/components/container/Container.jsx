import { useState } from "react"
import { USERS } from "../../constants/users"
import CardUser from "../card-user/CardUser"
import Filter from "../filter/Filter"
import Title from "../title/Title"

const Container=()=>{
    const[filterActive,setFilterActive]= useState(false)
    let filteredUsers = filterUsersByActive(USERS, filterActive)
    const [findName, setFindName] = useState('');
    filteredUsers=filterFindName(filteredUsers ,findName)
    const [sortByName, setSortByName] = useState(0);
    filteredUsers=filterSortName(filteredUsers ,sortByName)
    return (<>
        <div>
            <Title/>
            <Filter setFilterActive={setFilterActive} setFindName={setFindName} setSortByName={setSortByName}/>
            <CardUser users={filteredUsers}/>
        </div>
    
    </>)
}

const filterSortName=(users, sortByName)=>{
    if(sortByName==='0' || sortByName=== 0){
        return [...users]
    }else{
        return users.sort((a,b)=>a.name.localeCompare(b.name))
    }

}

const filterFindName = (users, findName)=>{

    console.log(users)
    const normalizedFindName = findName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    if(normalizedFindName === ''){
        console.log('estan todos')
        return [...users]
    }
    else{
        return users.filter(user=>{
            const normalizedUserName = user.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            
            return normalizedUserName.toLowerCase().includes(normalizedFindName.toLowerCase());
        })
    }



}
const filterUsersByActive = (users,filterActive)=>{
    console.log(users)
    
    if(!filterActive){
        return [...users]
    }
        const filteredUsersByActive = users.filter(user=>user.active)
        console.log(filteredUsersByActive)
        return filteredUsersByActive
   
}

export default Container