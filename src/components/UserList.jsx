import { FixedSizeList as List } from 'react-window';
import { useDispatch, useSelector } from "react-redux";
import { fetchMoreUsers } from '../app/store/actions/fetchAction';
import { setHeights } from '../app/store/actions/uiActions';
import { useRef, useEffect } from 'react';
import UserItem from './UserItem';

const UserListReactWindow = () => {
    const dispatch = useDispatch();

    const { users, usersCount } = useSelector((state) => state.users);
    const { listHeight, loading } = useSelector((state) => state.ui);
    let lastItemIndex = users.length;
    const listRef = useRef(null);

    useEffect(() => {
        const checkRefs = () => {
            if (listRef.current) {
                const listHeight = listRef.current.getBoundingClientRect().height;
                dispatch(setHeights(listHeight));
            } else {
                requestAnimationFrame(checkRefs);
            }
        };
        checkRefs();
    }, [dispatch]);

    const onItemsRendered = ({ visibleStopIndex }) => {
        if (visibleStopIndex === lastItemIndex - 1 && !loading) {
            dispatch(fetchMoreUsers());
        }
    };

    const Row = ({ index, style, data }) => {
        const item = data[index];
        if (!item) return null;

        return (
            <UserItem
                style={style}
                key={index}
                id={item.id}
                name={item.name}
            />
        )
    };

    return (
        <div className="users" ref={listRef} >
            <List
                height={listHeight}
                itemCount={usersCount}
                itemSize={45}
                width={450}
                itemData={users}
                onItemsRendered={onItemsRendered}
            >
                {Row}
            </List>
        </div>
    )
};

export default UserListReactWindow;