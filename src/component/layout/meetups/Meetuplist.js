import MeetupItem from './Meetupitem';
import classes from './Meetuplist.module.css'



function MeetupList(props)  {
    return (<ul className={classes.list}>
          {props.meetups.map((meetup) => (<MeetupItem key = {meetup.id} 
          id={meetup.id} 
          image={meetup.image} 
          tital={meetup.tital} 
          address={meetup.address} 
          description={meetup.description}/>))};
    </ul>
    )
}
export default MeetupList;