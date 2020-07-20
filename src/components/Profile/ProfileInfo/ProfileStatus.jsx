import React, {useState, useEffect} from 'react';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    },[props, props.status]);

    const activateEditMode = () => setEditMode(true);

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || `Введите статус`}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    autoFocus={true}
                    type="text"
                    value={status}
                    onBlur={deactivateEditMode}
                    onChange={onStatusChange}
                />
            </div>
            }
        </div>
    )
};

export default ProfileStatus;