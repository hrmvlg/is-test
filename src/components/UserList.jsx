import { FixedSizeList as List } from 'react-window';
import { useDispatch, useSelector } from "react-redux";
import { fetchMoreUsers } from '../app/store/actions/fetchAction';
import { setHeights, setWidth } from '../app/store/actions/uiActions';
import { setItemsPerPage } from '../app/store/actions/paginationActions';
import { useRef, useEffect, useCallback } from 'react';
import UserItem from './UserItem';

const UserListReactWindow = () => {
    const dispatch = useDispatch();

    const { users, usersCount } = useSelector((state) => state.users);
    const { listHeight, listWidth, loading } = useSelector((state) => state.ui);
    let lastItemIndex = users.length;
    const listRef = useRef(null);

    const checkRefs = useCallback(() => {
        if (listRef.current) {
            const listHeight = listRef.current.getBoundingClientRect().height;
            const listWidth = listRef.current.getBoundingClientRect().width;
            dispatch(setHeights(listHeight));
            dispatch(setWidth(listWidth));
            dispatch(setItemsPerPage(listHeight));
        }
    }, [dispatch]);

    useEffect(() => {
        checkRefs();

        window.addEventListener("resize", checkRefs);

        return () => window.removeEventListener("resize", checkRefs);
    }, [checkRefs]);


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
                width={listWidth}
                itemData={users}
                onItemsRendered={onItemsRendered}
            >
                {Row}
            </List>
        </div>
    )
};

export default UserListReactWindow;