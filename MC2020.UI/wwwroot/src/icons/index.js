import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faUser, faSync, faLanguage, faArrowLeft, faEdit, faEllipsisV, faCheck, faTimes, faDownload } from '@fortawesome/free-solid-svg-icons'
import './icons.scss';

const Logout = () => <FontAwesomeIcon className="logout-icon" icon={faSignOutAlt} />;
const User = () => <FontAwesomeIcon className="user-icon" icon={faUser} />;
const Sync = () => <FontAwesomeIcon className="sync-icon" icon={faSync} />;
const ArrowLeft = () => <FontAwesomeIcon className="arrow-left-icon" icon={faArrowLeft} />;
const Edit = () => <FontAwesomeIcon className="edit-icon" icon={faEdit} />;
const Language = () => <FontAwesomeIcon className="language-icon" icon={faLanguage} />;
const EllipsisV = () => <FontAwesomeIcon className="ellipsisV-icon" icon={faEllipsisV} />;
const Checkmark = () => <FontAwesomeIcon className="checkmark-icon" icon={faCheck} />;
const Times = () => <FontAwesomeIcon className="times-icon" icon={faTimes} />
const Download = () => <FontAwesomeIcon className="download-icon" icon={faDownload} />

const Plus = () => <span className="plus-icon"></span>

export {
    Logout,
    User,
    Sync,
    ArrowLeft,
    Edit,
    Language,
    EllipsisV,
    Checkmark,
    Times,
    Download,

    Plus,
};