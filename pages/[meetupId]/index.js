import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/dist/shared/lib/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name='description' content={props.meetupData.description} />
            </Head>
            <MeetupDetail {...props.meetupData} />
        </Fragment>
    );
}

export const getStaticPaths = async () => {
    const client = await MongoClient.connect('mongodb+srv://Shulizen:Dragnea061999.@cluster0.fimcu.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.find({}, { _id: 1 }).toArray();

    client.close();

    return {
        fallback: false,
        paths: result.map(meetup => ({ params: { meetupId: meetup._id.toString() } }))
    };
};

export const getStaticProps = async (context) => {
    const { meetupId } = context.params;
    //fetch data for a single meetup

    const client = await MongoClient.connect('mongodb+srv://Shulizen:Dragnea061999.@cluster0.fimcu.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

    client.close();


    return {
        props: {
            meetupData: {
                id: result._id.toString(),
                title: result.title,
                address: result.address,
                image: result.image,
                description: result.description
            }
        }
    }
};

export default MeetupDetails;