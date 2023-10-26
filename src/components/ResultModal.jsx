import { forwardRef,useRef,useImperativeHandle } from "react"

const ResultModal = forwardRef(function({targetTime,remainingTime,onReset},ref){
    
    const dialog = useRef();
    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current?.showModal();
            }
        }
    })
    const userLost = remainingTime <=0;
    const formattedTimeRemaining = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1- remainingTime / targetTime * 1000) * 100); 
    return (
        <dialog className="result-modal" ref={dialog} open>
        {userLost && <h2>You lost</h2>}
        {!userLost && <h2>You score {score}</h2>}
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>formattedTimeRemaining</strong> seconds left.</p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>
    )
});

export default ResultModal