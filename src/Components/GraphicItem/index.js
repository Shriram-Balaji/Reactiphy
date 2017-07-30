import React,{Component} from 'react'
import './styles.css'
class GraphicItem extends Component {
    render() {
        return(
            <div className="GraphicItems">
              <img src={`${this.props.images.url}`}  />
            </div>

        );
    }
}

export default GraphicItem;
/* named export but since only a single module is exported,
it is easier with "default" keyword to be invoked */
