import pic from "./blob.jpg"
export default function Tracker(){
    return (
        <div className="container-fluid outerTracker my-5">
            <img src={pic} alt="...pic" className="my-3 img-fluid"/>
            <h3 className="my-3 mx-3">You Have No Transactions Currently</h3>
        </div>
    )
}