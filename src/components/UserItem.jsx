import UserIcon from "../assets/imgs/icon-user.svg?react";
import { useDispatch } from 'react-redux';
import { getUser } from '../app/store/actions';
import { forwardRef } from "react";

const UserItem = forwardRef(({ id, name }, ref) => {
    const dispatch = useDispatch();

    const handleClickOnItem = (id) => {
        dispatch(getUser(id));
    }

    return (
        <li className="users__item" onClick={() => handleClickOnItem(id)} ref={ref}>
            <div className="users__item-icon">
                <UserIcon />
            </div>
            <div className="users__item-name">
                {name}
            </div>
        </li>
    )
});

export default UserItem;