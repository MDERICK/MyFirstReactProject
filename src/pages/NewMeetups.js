import {useNavigate} from "react-router-dom";
import NewmeetUpForm from "../component/layout/meetups/NewmeetUpForm";



function NewMeetupsPage()  {

const history = useNavigate();

function onAddMeetupHandler(meetupData) {
        fetch('https://react-getting-started-593ff-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers:{
                'content-Type' : 'application/json'
            }
        }
        ).then(() => {
            history('/');
        });

}

    return <section>
        <h1>New Meet Ups </h1>
        <NewmeetUpForm onAddMeetup={onAddMeetupHandler}/>
    </section>

};

export default NewMeetupsPage;
