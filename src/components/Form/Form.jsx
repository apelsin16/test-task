import css from './Form.module.css';
import Button from "../Button/Button.jsx";
import toast, {Toaster} from "react-hot-toast";

function Form() {
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const { name, email, date, comment } = form.elements;

        console.log(name.value, email.value, date.value, comment.value);

        toast.success('Successfully!');

        form.reset();
    }
    return (
        <div className={css.form}>
            <h4 className={css.title}>Book your campervan now</h4>
            <p className={css.text}>Stay connected! We are always ready to help you.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' className={css.input} placeholder='Name*' required/>
                <input type="text" name='email' className={css.input} placeholder='Email*' required/>
                <input type="text" name='date' className={css.input} placeholder='Booking date*' required/>
                <textarea type="text" name='comment' className={css.textarea} placeholder='Comment'/>
                <div className={css.buttonWrapper}>
                    <Button label='Send' type='submit' />
                </div>
            </form>
            <Toaster />
        </div>
    );
}

export default Form;