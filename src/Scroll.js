import React from "react";

const Scroll1 = (props) => {
    return (
        <div style={{ 
        overflowY: "scroll",
        border: "4px solid white",
        height: "500px",
        width: "350px",
        borderTopLeftRadius: "15px",
        borderBottomLeftRadius: "15px",
        }}> 
        {props.children}
        </div> //Тут можно использовать для CSS двойные {{}}
               //Или можно добавить сам className для отдельного
               //Файла CSS
    );
};

export default Scroll1;