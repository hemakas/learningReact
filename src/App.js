import Header from "./components/Header"

function App() {
    const title = 'Hello World From App Component'
    const para = 'This is the paragraph content'
    const comments = [
        { id: 1, text: 'Comment one' },
        { id: 2, text: 'Comment two' },
        { id: 3, text: 'Comment three' },
    ]
    const showComments = true 
    
    return (
        <>
            <Header bgColor="red" textColor="blue"/>
        
            <div className="container">
                <h1>{ title }</h1>
                <p>{ para }</p>

                {/* { showComments ? (
                    <div className="coments">
                        <h3>Comments ({ comments.length })</h3>
                        <ul>
                            { comments.map((comment, index) => (
                                <li key={ comment.id }>{ comment.text }</li>
                            )) }
                        </ul>
                    </div>
                ) : ( 'no' 
                ) } */}

                { showComments && (
                    <div className="coments">
                        <h3>Comments ({ comments.length })</h3>
                        <ul>
                            { comments.map((comment, index) => (
                                <li key={ comment.id }>{ comment.text }</li>
                            )) }
                        </ul>
                    </div>
                ) }
            </div>
        </>
    )
}

export default App