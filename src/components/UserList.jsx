import UserItem from "./UserItem";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMoreUsers, setHeights } from "../app/store/actions";

export default function UserList() {

    const dispatch = useDispatch();

    const users = useSelector((state) => state.users);
    const loading = useSelector((state) => state.loading);

    const observerRef = useRef(null);
    const listRef = useRef(null);
    const itemRef = useRef(null);

    useEffect(() => {
        const checkRefs = () => {
            if (listRef.current && itemRef.current) {
                const listHeight = listRef.current.getBoundingClientRect().height;
                const itemHeight = itemRef.current.getBoundingClientRect().height;
                dispatch(setHeights(listHeight, itemHeight));
            } else {
                requestAnimationFrame(checkRefs);
            }
        };

        checkRefs();
    }, [dispatch]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading) {
                    dispatch(fetchMoreUsers());
                }
            },
            { threshold: 1.0 }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => observer.disconnect();
    },
        [dispatch, loading]
    );

    return (
        <div className="users" ref={listRef}>
            <ul className="users__list" >
                {users.map((user) => (
                    <UserItem
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        ref={itemRef}
                    />
                ))}
            </ul>
            <div ref={observerRef} style={{ height: '20px' }} />
            {loading && <div className="users-loader">Загрузка...</div>}
        </div>
    );
}