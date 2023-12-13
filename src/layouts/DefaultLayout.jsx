import { Card } from "react-bootstrap/";
import MiNavBar from "./../components/navbar.jsx";

const DefaultLayout = (props) => {
  // eslint-disable-next-line react/prop-types
  const children = props.children

  return (
    <>
        <MiNavBar />
        <div style={{padding: 20}}>
        <Card>
            { children }    
        </Card>
        </div>
    </>
  );
}

export default DefaultLayout;
