import React, {useState, useEffect} from 'react';

export default function Hook({ color }) {
    const [backgroundColor, setBackgroundColor] = useState(null)
    const [text, setText] = useState("")

    /**
     * Alternative 01 : getDerivedStateFromProps
     */
    if (color !== backgroundColor) {
        setBackgroundColor(color)
    }

    /**
     * Afer Rendering
     * class component(componentDidUpdate, componentDidMount)
     * 
     */
    useEffect(() => {
        console.log('After Rendering both');
    })

    /**
     * After Rendering
     * 어떤 특정 삳ㅇ태의 변화에 반응하는 함수
     */
    useEffect(() => {
        console.log('After Rendering color');
    }, [text /*, backgroundColor */])

    /**
     * 4. Alternative02: componentDidMount & componentWillUnmount
     * 
     */
    useEffect(() => {
        console.log("After Mount(componentDidMount)");
        return () => {
            console.log("After Unmount(componentWillUnmount)");
        }
    }, [])



    return (
        <>
            <h3
                style={ {
                    width: 300,
                    height: 50,
                    backgroundColor: backgroundColor
                } } />
            <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
        </>
    );
}