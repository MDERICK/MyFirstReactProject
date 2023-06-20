import { useState, useEffect } from 'react';
import Meetuplist from '../component/layout/meetups/Meetuplist';
// const DUMMY_DATA = [
//     {
//       id: 'm1',
//       title: 'This is a first meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//       id: 'm2',
//       title: 'This is a second meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//   ];

function AllMeetupsPage() {
const [isLoading, setLoading]= useState(true);
const [loadedMeetups, setLoadedMeetup] = useState([])

useEffect(() => {
  setLoading(true);

  fetch('https://react-getting-started-593ff-default-rtdb.firebaseio.com/meetups.json'
  ).then(response => {
   return response.json()
  }).then(data => {
    const meetups = [];
console.log(data);

    for (const key in data) {
      const meetup = {
        id: key,
        ...data[key]
      };

      meetups.push(meetup)
    }


    setLoading (false);
    setLoadedMeetup(meetups);

  });
},[]);

  if (isLoading) {
    return (
      <section>
      <p>Loading......</p>
    </section>
    )
    
  }
    
    return <section>
        <h1>All Meetup</h1>
        <Meetuplist meetups={loadedMeetups}/>
    </section>
};

export default AllMeetupsPage;