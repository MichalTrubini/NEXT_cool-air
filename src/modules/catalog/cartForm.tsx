import Button from '../common/button';
import styles from './cartForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, CartState } from '../../store/Slices/cartSlice';
import React, {useRef} from 'react';

const CartForm = () => {

    const dispatch = useDispatch();
    const enteredNumber = useSelector((state: CartState) => state.qty);
    const inputRef = useRef<HTMLInputElement>(null);

    const cartSubmitHandler = (e:any) => {
        e.preventDefault();

        dispatch(addToCart(Number(inputRef?.current?.value)))

    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.form}>
                <label htmlFor='cartInput' className={styles.label}>Množstvo:</label>
                <input type='number' id='cartInput' className={styles.input} min='1' step='1' defaultValue='1' ref={inputRef}/>
                <Button className={styles.button} onClick={cartSubmitHandler} >pridať do košíka</Button>
            </form>
        </div>
    )
}

export default CartForm;