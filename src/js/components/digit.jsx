import React from "react"

const Digit = ({digitValue}) => {
    return (
        <div className="d-flex justify-content-center align-items-center bg-dark text-white m-5 py-3">
            <p className="display-1 fw-bold">{digitValue}</p>
        </div>
    )
}

export default Digit