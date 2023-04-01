import { decrement, increaseByAmount, increment, reset } from "@/features/counter/countrSlice";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Welcome to redux Toolkit</h1>
            <h2>Counter App</h2>
            <h3>Count: {count}</h3>
            <button
                onClick={() => dispatch(increment())}
            >Increase</button>
            <button
                onClick={() => dispatch(decrement())}
            >Decrease</button>
            <button
                onClick={() => dispatch(reset())}
            >Reset</button>
            <button
                onClick={() => dispatch(increaseByAmount(5))}
            >Increase By Amount 5 </button>
        </div>
    );
};

export default Index;