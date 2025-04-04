import UserIcon from "../assets/imgs/icon-user.svg?react";
import Button from "./Button";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeInput } from "../app/store/actions/userActions";

export default function UserCard() {

    const dispatch = useDispatch();
    const { inputName, inputJobTitle, inputDepartment, inputCompany } = useSelector((state) => state.users);

    const handleChange = (e) => {
        const elementName = e.target.name;
        const elementValue = e.target.value;

        dispatch(changeInput(elementName, elementValue));
    };

    const inputRef = useRef(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className="user-card">
            <div className="user-card__name">
                <input
                    value={`${inputName}`}
                    placeholder="Не указано"
                    type="text"
                    name="inputName"
                    onChange={handleChange}
                    ref={inputRef}
                />
            </div>
            <div className="user-card__content">
                <div className="user-card__icon" width="100" height="100">
                    <UserIcon />
                </div>
                <div className="user-card__info">
                    <table>
                        <tbody>
                            <tr>
                                <th>Должность</th>
                                <td>
                                    <input type="text"
                                        value={`${inputJobTitle}`}
                                        placeholder="Не указано"
                                        name="inputJobTitle"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>Отдел</th>
                                <td>
                                    <input type="text"
                                        value={`${inputDepartment}`}
                                        placeholder="Не указано"
                                        name="inputDepartment"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>Компания</th>
                                <td>
                                    <input type="text"
                                        value={`${inputCompany}`}
                                        placeholder="Не указано"
                                        name="inputCompany"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Button />
        </div>
    )
}