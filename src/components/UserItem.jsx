import UserIcon from "../assets/imgs/icon-user.svg?react";
import { useDispatch } from 'react-redux';
import { getUser } from '../app/store/actions/userActions';

const UserItem = ({ id, name, style }) => {
    const dispatch = useDispatch();
    const handleClickOnItem = (id) => {
        dispatch(getUser(id));
    }

    return (
        <div
            className="users__item"
            onClick={() => handleClickOnItem(id)}
            style={style}
        >
            <div className="users__item-icon">
                <UserIcon />
            </div>
            <div className="users__item-name">
                {name}
            </div>
        </div>
    )
};

export default UserItem;