import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function Input({ setData, data, messageList }) {
    const { text, author } = data
    const inputRef = React.useRef(null)
    React.useEffect(() => {
        inputRef.current?.focus()
    }, [messageList])

    return (
        <>
            <TextField inputRef={inputRef} autoFocus={true} className="user-box" id="standard-basic" label="Имя пользователя" variant="standard" value={author} onChange={(el) =>
                setData(pervstate => ({ ...pervstate, author: el.target.value }))
            } />
            <TextField className="user-box" id="standard-basic" label="Текст" variant="standard" value={text} onChange={(el) =>
                setData(pervstate => ({ ...pervstate, text: el.target.value }))
            } />
        </>
    );
}