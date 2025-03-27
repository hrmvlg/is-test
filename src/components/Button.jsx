import { useDispatch } from "react-redux";
import { saveUser } from "../app/store/actions/userActions";

export default function Button() {

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(saveUser());
    }

    return (
        <button
            className="button"
            type="submit"
            onClick={handleClick}
        >
            Сохранить изменения
        </button>
    )
}