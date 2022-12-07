import { FC } from 'react';
import "./Button.scss";
import { ButtonProps } from '../../types/types';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Button: FC<ButtonProps> = ({ color, text, func }) => {
    const { cardToCartId } = useTypedSelector((state) => state.modal);
        
    return (
        <a data-id={cardToCartId} className="button" onClick={func} style={{ backgroundColor: color }}>{text}</a>
    )
    
}


export default Button;