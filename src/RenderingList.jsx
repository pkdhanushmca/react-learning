const employee = [
    {
        id: 1,
        name: "Dhanush",
        designation: "Java Full Stack Developer",
        salary: 100000,
        address: "Kallakurichi"
    },
    {
        id: 2,
        name: "Karthik",
        designation: "Python Full Stack Developer",
        salary: 80000,
        address: "Perambalur"
    },
    {
        id: 3,
        name: "Kamalesh",
        designation: "Python Full Stack Developer",
        salary: 740000,
        address: "Thanjavur"
    },
    {
        id: 4,
        name: "Saravanan",
        designation: "Frontend Stack Developer",
        salary: 90000,
        address: "Purasaivakkam"
    },
    {
        id: 5,
        name: "Vigneshwaran",
        designation: "Java Full Stack Developer",
        salary: 120000,
        address: "Thanjavur"
    }
];

export default function EmployeeData() {

    const tableDatas = employee.map(emp => (
        <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.designation}</td>
            <td>{emp.salary}</td>
            <td>{emp.address}</td>
        </tr>
    ))

    return (
        <>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Employee Name</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>Address</th>
                    </tr>
                </thead>

                <tbody>
                    {tableDatas}
                </tbody>
            </table>
        </>
    )
}