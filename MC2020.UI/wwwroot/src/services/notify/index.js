import React, { useState, useContext, useEffect } from "react";
import './__.scss';
import { Times } from "icons";

const NotifyContext = React.createContext();

const useNotify = () => {
    const _context = useContext(NotifyContext);
    return _context;
}

const NotifyContextProvider = props => {
    const [notifications, setNotifications] = useState([]);

    const notify = (note, type) => {
        let _notifications = [...notifications, { note, type }]
        setNotifications(_notifications);

        console.log(`Notified: ${note}`)
    };

    return (
        <NotifyContext.Provider value={{ notifications, notify }}>
            {props.children}
        </NotifyContext.Provider>
    )
}


const Notify = props => {
    const { notifications } = useNotify();
    return (
        <div className="notify">
            {
                notifications?.map((item, key) =>
                    <Note note={item} key={key} speed={300} time={50000} />
                )
            }
        </div>
    )
}

const Note = props => {
    const { speed, time, note } = props;

    const showCountdown = true;

    const [visible, setVisible] = useState(true);
    const [animate, setAnimate] = useState();
    const [animating, setAnimating] = useState();
    const [animated, setAnimated] = useState();
    const [count, setCount] = useState(time / 1000);

    useEffect(() => {
        setTimeout(() => { setCount(count === 1 ? "bye" : count - 1) }, 1000)

        setTimeout(() => { setAnimate(true) }, 100)

        setTimeout(() => { setAnimating(true) }, time)

        setTimeout(() => { setAnimated(true) }, time + speed);

        setTimeout(() => {
            setVisible(false);
        }, time + speed + 100);
    });

    const close = () => {
        setAnimating(true)
        setTimeout(() => { setAnimated(true) }, speed);
        setTimeout(() => { setVisible(false) }, speed + 100);
    };

    return (
        visible &&
        <div className={`note flex space-between align-center${animate ? " animate" : ""}${animating ? " animating" : ""}${animated ? " animated" : ""} ${speed}`} onClick={close}>
            <span className="message max-width-tablet">{note.note}
                {showCountdown && <span className="countdown flex align-center justify-center">{count}</span>}
                <span className="close-icon flex align-center justify-center"><Times /></span>
            </span>
        </div>
    )
}

export { NotifyContextProvider, useNotify, Notify };