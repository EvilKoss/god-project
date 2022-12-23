import {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { changeWord } from '../../redux/store/changeText';

const Temp = () => {
    const [tempState, setTempState] = useState("second");
    const testSending = () => {
        setTempState('update');
        const dispatch = useDispatch(changeWord());
    }
    const importantWord = useSelector(state => state.change.changeWord);

    return (
        <>
            <p>{tempState}</p>
            <button onClick={()=>testSending()}>add</button>
        </>
    );
}

export default Temp;