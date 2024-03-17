const Button = ({ text, color, setColor }) => {

    return (
        <button onClick={() => setColor(` ${color}`)} className={` h-9 rounded-lg w-16 mt-2 bg-${color}-500 `} >
            {text}
        </button >
    )
}

export default Button
