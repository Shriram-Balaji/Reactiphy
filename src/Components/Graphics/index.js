import React,{Component} from 'react'
import GraphicItem from '../GraphicItem/'
import './styles.css'
class Graphics extends Component {
    render() {
      let graphicItems;
      if (this.props.graphics) {
        graphicItems = this.props.graphics.map(gif=> {
          return(
            //passing attributes as key value pairs to the next corresponnding component. Data Flows through from top Level to Each Individual Component
              <GraphicItem key={gif.id} gif={gif} images={gif.images.fixed_height}/>
          );
        })
      }
        return(
            <div className="Graphics">
              {graphicItems}
            </div>
        );
    }
}

export default Graphics;
/* named export but since only a single module is exported,
it is easier with "default" keyword to be invoked */
