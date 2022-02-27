import React, { Component } from "react";

class TryClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            materiLinkKey: [
                {
                    nama: "rizki",
                    semester: 4
                },
                {
                    nama: "fikri",
                    semester: 4
                },
                {
                    nama: "zulfa",
                    semester: 4
                },
                {
                    nama: "dita",
                    semester: 2
                },
                {
                    nama: "balqis",
                    semester: 4
                }
            ]
        }
    }
    render() {
        return (
            <div>
                {this.state.materiLinkKey.map((value, index) => {
                    return (
                        <div key={index}>
                            <p>No : {index + 1}</p>
                            <p>Nama : {value.nama}</p>
                            <p>Semester : {value.semester}</p>
                        </div>
                    )
                })};
                {this.props.menuMakanan.map((value, index) => {
                    return (
                        <div key={index}>
                            <p>No : {index}</p>
                            <p>Nama : {value.nama}</p>
                            <p>Semester : {value.semester}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default TryClass;