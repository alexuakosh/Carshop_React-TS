import React, { FC } from 'react';
import "./Modal.scss";
import { ModalProps } from "../../types/types"

const Modal: FC<ModalProps> = (props: ModalProps) => {
    const { header, text, color, actions } = props;
    return (
        <div className="modal" style={{ backgroundColor: color }}>
            <div className="modal-header">
                <h2 className="title">{header}</h2>
            </div>
            <p className="text">{text}</p>
            {actions}
        </div>
    )
    
}

export default Modal;