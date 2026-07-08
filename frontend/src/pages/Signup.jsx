import { useState } from "react";
import axios from "axios";
function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSignup() {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/signUp",
                { name, email, password }
            );
        } catch (err) {

        }

    }

    return (
        <>
            <h1>Signup page</h1>
            <input
                type="text"
                value={name}
                placeholder="enter name"
                onChange={(e) => setName(e.target.value)}
            ></input>
            <input
                type="email"
                value={email}
                placeholder="enter email"
                onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
                type="password"
                value={password}
                placeholder="enter password"
                onChange={(e) => setPassword(e.target.value)}
            >
            </input>
            <button onClick={handleSignup}>
                Signup
            </button>
        </>
    );
}
export default Signup;