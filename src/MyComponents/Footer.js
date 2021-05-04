import React from 'react'

export const Footer = () => {
    let footerStyle = {
        top: "100vh",
        position: "absolute",
        width: "100%",
    }
    return (
        <footer className="bg-dark text-light" style = {footerStyle}>
            <p className="text-center">Copyright &copy; Ankush</p>
        </footer>
    )
}
