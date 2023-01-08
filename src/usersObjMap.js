const users=[
    {name:"Sourabh" , Edu:"BE", age:25},
    {name:"Apurva" , Edu:"MS", age:24},
    {name:"Rutuja" , Edu:"puc", age:17}
]

const UsersObjMap=()=>{

    return(
        <div>
            {users.map((user,key)=>{
                return <div key={key}>{user.name} {user.age}</div>
            })}
        </div>
    );


}

export default UsersObjMap;