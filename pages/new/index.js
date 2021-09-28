import { useSelector, useDispatch } from "react-redux"
import {increment, decrement, selectCount} from '../../stores/reducers/counter'
import store from '../../stores/configureStore'
export default function New() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    return ( 
        <>
            <h1>shop new</h1>
            <div>
                <span>count: {count}</span>
            </div>
        </>
    )
}