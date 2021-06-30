import React from 'react'
import AuthTop from "../components/AuthTop";
import AuthForm from "../components/AuthForm";

function AuthPage() {
    return(
        <div style={{backgroundColor: "#F3F2EF", height: "100vh"}}>
            <div>
                <AuthTop />
                <AuthForm />
            </div>
        </div>
    )
}

export default AuthPage