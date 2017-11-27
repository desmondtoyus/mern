import React from 'react'
import Welcome from '../components/Welcome';
import ResourcesArea from '../components/ResourcesArea';
import Container from '../components/Container';
import Row from '../components/Row';
import MapCard from '../components/MapCard';
import {FormBtn} from '../components/Form/FormBtn';
import API from "../utils/API";
class Resources extends React.Component{
    handleAPISearch = () => {
        
        API.saveArticle()
        }

    // }
    render(){
    return (
        <div>
            <Welcome/>
          <ResourcesArea> 
          <Container>
                   <Row> 
 <MapCard/>
                      
                      </Row>
                    <Row>
                        <FormBtn
                            
                            onClick={() => this.handleAPISearch()} >
                            Submit
                            </FormBtn>
                    </Row>
            </Container>
            </ResourcesArea>
           

        </div>
    )
}
}
export default Resources;