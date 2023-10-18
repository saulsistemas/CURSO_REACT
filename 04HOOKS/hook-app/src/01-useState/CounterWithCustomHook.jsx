import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
    //va depender de lo que enviamos objeto u arreglo
    const {counter, increment,decrement,reset} = useCounter();
    return (
      <>
          <h1>Counter With Custom Hook: { counter } </h1>
          <button className="btn btn-primary" onClick={()=>increment(2)}>+1</button>
          <button className="btn btn-warning" onClick={()=>reset()}>reset</button>
          <button className="btn btn-danger" onClick={()=>decrement()}>-1</button>
      </>
    )
}
