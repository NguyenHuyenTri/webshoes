import React, { useRef} from "react";
import NotificationAlert from "react-notification-alert";



 function Alert (status,message){

    const notificationAlert =useRef(null);

    if (status!==null&&message!==null){
        let options = {};
        options = {
            place: 'tr',
            message: (
                <div>
                    <div>
                        {status} <b>{message}</b>
                    </div>
                </div>
            ),
            type: 'primary',
            icon: "now-ui-icons ui-1_bell-53",
            autoDismiss: 3,
            zIndex:9999,
        };
        notificationAlert.current.notificationAlert(options);
    }
        return(
                <>
                <NotificationAlert ref={notificationAlert} style={{'zIndex':'9999'}} />
                </>
        )
}
export  {Alert}