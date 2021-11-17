import { useRouter } from "next/dist/client/router";
import Head from "next/dist/shared/lib/head";
import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
    const router = useRouter();

    const addNewMeetupHandler = async (newData) => {
        const respose = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(newData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await respose.json();
        console.log(data);

        router.push('/');
    }

    return (
        <Fragment>
            <Head>
                <title>Add a New Meetup</title>
                <meta name='description' content='Add your own meepup' />
            </Head>
            <NewMeetupForm onAddMeetup={addNewMeetupHandler} />
        </Fragment>
    );
}

export default NewMeetup;