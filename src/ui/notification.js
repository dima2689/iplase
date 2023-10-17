import ReactDom from 'react-dom';

const Notification = (props) =>
    ReactDom.createPortal(
        <section
        // className={`${
        //     props.status === 'pending'
        //         ? 'notification'
        //         : props.status === 'success'
        //         ? 'success'
        //         : 'error'
        // } notification`}
        >
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </section>,
        document.getElementById('notification-root')
    );

export default Notification;
