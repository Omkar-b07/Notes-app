import { useState } from "react";
function Signup() {
    const [name, setName] = useState("");
    const [email,setEmail]=useState("");

    return (
        <>
            <h1>Signup page</h1>
            <input
                type="text"
                placeholder="enter name"
                onChange={(e)=>setName(e.target.value)}
            ></input>

        </>

    );
}
export default Signup;