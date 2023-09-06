export function test(element) {
    const msg = element.querySelector('#msg').value

    const msgfield = element.querySelector('#msg')

    const send = element.querySelector('#send')

    send.addEventListener('click', (e) => {
        e.preventDefault
        messagehandler()
    })

    msgfield.addEventListener('keydown', (e) =>{
        if (e.key === "Enter"){
            e.preventDefault
            messagehandler()
        }
    })

    function messagehandler(){
        const msg = element.querySelector('#msg').value

        let spaceonly = true

        for(let i = 0; i < msg.length; i++){
            if(msg.charAt(i) != " "){
                spaceonly = false
            }
        }

        if (msg !== '' && spaceonly == false){
            const msglist = element.querySelector('#msglist')
            const li = document.createElement('li')

            li.textContent = msg
            msglist.appendChild(li)

            element.querySelector('#msg').value = ""
        }

        if(msglist.childElementCount > 10){
            msglist.removeChild(msglist.children[0])
        }
    }


}