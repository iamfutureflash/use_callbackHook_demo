import { memo } from 'react'

function TodoB(props) {
    const { todo, addTodo } = props;
    console.log("child render");
    return (
        <>
            <div>
                {
                    todo?.map((data, index) => {
                        return <p key={index}>{data + " " + index}</p>
                    })
                }
                <button onClick={addTodo}>add todo</button>
            </div>
        </>
    )
}

// export default TodoB;
export default memo(TodoB);