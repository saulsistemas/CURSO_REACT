import { getGif } from "../helpers/getGif"

export const GifGrid = ({category})=>{

    getGif(category)
    return (
        <>
            <h1>{ category }</h1>
        </>
    )
}