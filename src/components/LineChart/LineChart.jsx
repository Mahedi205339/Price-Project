import { LineChart as LChart, Line ,XAxis ,YAxis } from "recharts";

const LineChart = () => {

    const studentData = [
        { id: "001", name: "John Doe", mathMarks: 85, physicsMarks: 76, chemistryMarks: 88 },
        { id: "002", name: "Jane Smith", mathMarks: 78, physicsMarks: 82, chemistryMarks: 90 },
        { id: "003", name: "Alex Brown", mathMarks: 92, physicsMarks: 88, chemistryMarks: 94 },
        { id: "004", name: "Emily Clark", mathMarks: 67, physicsMarks: 72, chemistryMarks: 80 },
        { id: "005", name: "David Lee", mathMarks: 89, physicsMarks: 81, chemistryMarks: 92 },
        { id: "006", name: "Sarah Wang", mathMarks: 72, physicsMarks: 68, chemistryMarks: 78 },
        { id: "007", name: "James Kim", mathMarks: 95, physicsMarks: 90, chemistryMarks: 96 },
        { id: "008", name: "Emma Davis", mathMarks: 81, physicsMarks: 75, chemistryMarks: 85 },
        { id: "009", name: "Michael Chen", mathMarks: 74, physicsMarks: 70, chemistryMarks: 82 },
        { id: "010", name: "Olivia Li", mathMarks: 90, physicsMarks: 85, chemistryMarks: 91 }
    ];

    return (
        <div>
            <LChart width={500} height={400} data={studentData}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Line dataKey="mathMarks"></Line>
                <Line dataKey="chemistryMarks" stroke="red"></Line>
                <Line dataKey="physicsMarks" stroke="green"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;