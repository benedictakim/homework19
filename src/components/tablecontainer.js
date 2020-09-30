import React, {Component} from "react";
import searchform from "./searchform";
import API from "../utils/api";

class TableContainer extends Component {
    state = {
        employees: [{}],
        filteredemployees: [{}],
        order: "descend"
    }
    
    handlesearchchange = (e) => {
        const searchvalue = e.target.value 
    }

    componentDidMount () {
        API.getUsers ()
        .then(response=>{
            this.setState({
                employees: response.data.results,
                filteredemployees: response.data.results,
            })
        })
    }

}

export default TableContainer