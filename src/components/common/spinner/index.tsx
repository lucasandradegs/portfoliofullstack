import { Spinner } from "reactstrap";

const PageSpinner = function () {
    return <>
    <div className="vh-100 bd-dark d-flex justify-content-center align-items-center">
        <Spinner animation="border" color="light"/>
    </div>
    </>;
};

export default PageSpinner;
