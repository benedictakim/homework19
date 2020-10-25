import React from "react";
// import TableHeader from "./TableHeader";
// import TableBody from "./TableBody";

function Table(props) {
    // Store key names of first row of data, to be used as column headers for table
    // const fields = Object.keys({ ...props.rows[0] });

    return (
        <table className="w-100">
            {/* <TableHeader fields={fields} /> */}
            {/* <TableBody rows={props.rows} /> */}
        </table>
    )
}

export default Table;