import React, {Component} from "react";
import Searchform from "./Searchform";
import Table from "./Table";
import API from "../utils/api";

class TableContainer extends Component {
    state = {
        employees: [{}],
        filteredemployees: [{}],
        order: "descend"
    }

    headings = [
        {name: "image", width: "10%"},
        {name: "name", width: "10%"},
        {name: "phone", width: "10%"},
        {name: "email", width: "10%"},
        {name: "dob", width: "10%"},
    ]

    handleemployee = headings => {
        if (this.state.order === "descend"){
            this.setState({order: "ascend"})
        }else{
            this.setState({order: "descend"})
        }
        const compare = (a,b) => {
            if (this.state.order === "ascend"){
                if (a[headings]===undefined){
                    return 1
                }else if(b[headings]===undefined){
                    return -1
                }else if(headings==="name"){
                    return a[headings].first.localeCompare(b[headings].first)
                }else{
                    return a[headings]-b[headings]
                }
            }else{
                if (a[headings]===undefined){
                    return 1
                }else if(b[headings]===undefined){
                    return -1
                }else if(headings==="name"){
                    return b[headings].first.localeCompare(a[headings].first)
                }else{
                    return b[headings]-a[headings]   
                }
            }
        }
        const sortedemployees = this.state.filteredemployees.sort(compare)
        this.setState({filteredemployees: sortedemployees})
    }
    
    handlesearchchange = (e) => {
        const searchvalue = e.target.value 
        const employeelist = this.state.employees.filter(employee => {
            let values = Object.values(employee).join("").toLowerCase()
            return values.indexOf(searchvalue.toLowerCase()) !== -1
        })
        this.setState({filteredemployees: employeelist})
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

    render() {
        return (
            <div>
                <Searchform
                    searchString={this.state.searchString}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    handleSort={this.handleSort}
                    handleFormReset={this.handleFormReset}
                />
                <Table rows={this.state.displayRows} />
            </div>
        )
    }
}

export default TableContainer;