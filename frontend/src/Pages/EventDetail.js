import { useParams } from "react-router-dom";

function EventDetailPage() {
    const  params = useParams();

    return(
        <>
        <h1>Event Details</h1>
        <p>event id: {params.id}</p>
        </>
    );
}

export default EventDetailPage;