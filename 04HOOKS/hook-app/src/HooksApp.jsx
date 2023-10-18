import { CounterApp } from "./01-useState/CounterApp"
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook"

export const HooksApp = () =>{
    return(
        <>
        <h1>Hooks App</h1>
        <hr />
        <CounterWithCustomHook/>
        <hr />
        <CounterApp/>
        </>
    )
}