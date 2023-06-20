
import { useRef } from 'react';
import classes from './NewmeetUpForm.module.css'
import Card from '../../UI/Card';

function NewmeetUpForm(props) {
    const titalInPutRef=useRef();
    const imageInPutRef=useRef();
    const addressInPutRef=useRef();
    const descriptionInPutRef=useRef();

    function submitHandle(event) {
        event.preventDefault();

        const enteredTitle= titalInPutRef.current.value;
        const enteredImage = imageInPutRef.current.value;
        const enteredAddress = addressInPutRef.current.value;
        const enteredDescription = descriptionInPutRef.current.value;

        const meetupData={
            tital: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        }

        props.onAddMeetup(meetupData);    
    };
    return <Card>
        <form className={classes.form} onSubmit={submitHandle}>
        <div className={classes.control}>
            <label htmlFor='tital'>Meetup Tital</label>
            <input type='text reqired' required id='tital' ref={titalInPutRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor='titimageal'>Meetup Image</label>
            <input type='url' required id='image' ref={imageInPutRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor='address'>Adress</label>
            <input type='text' required id='address' ref={addressInPutRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor='description'>Description</label>
            <textarea id='description' required rows='5' ref={descriptionInPutRef}></textarea>
        </div>
        <div className={classes.actions}>
            <button>Add Meetup</button>
        </div>
        </form>
    </Card>
};

export default NewmeetUpForm;
