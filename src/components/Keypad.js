// Code Keypad Component Here

function Keypad (){
    function handlekeypad(){
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChange={handlekeypad} />
        </div>
    )
}

export default Keypad;