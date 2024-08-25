import React from "react"
import { HTMLTable, Spinner, SpinnerSize } from "@blueprintjs/core"
import { ProblemOverview } from "../types/problem";
import { GetProblemList } from "../api/probleme";
import { useNavigate } from "react-router-dom";

export const ArhivaEducationala = () => {
    const [problems, setProblems] = React.useState<ProblemOverview[] | undefined>(undefined);

    React.useEffect(() => {
        GetProblemList().then((problems) => {
            setProblems(problems);
        })
    }, []);

    return <div style={{
        height: "100%",
        width: "100%",
        padding: "10px",
    }}>
        {/* Nu avem inca problemele */}
        { problems === undefined && <Spinner size={SpinnerSize.LARGE} intent="primary" style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        }}/>}
        {/* Avem problemele */}
        { problems !== undefined && <ProblemTable problems={problems} />}
    </div>
}

const ProblemTable = ({ problems }: { problems: ProblemOverview[] }) => {
    return <HTMLTable style={{width: "100%", height: "100%"}}
        bordered={true}
        interactive={true}
        striped={true}
        compact={true}
    >
        <thead>
            <tr>
                <th>Problem ID</th>
                <th>Problem Name</th>
                <th>Problem Difficulty</th>
            </tr>
        </thead>
        <tbody style={{
            overflow: "scroll",
        }}>
            { problems.map((problem) => <ProblemRow key={problem.id} problem={problem} />) }
        </tbody>
    </HTMLTable>
}

const ProblemRow = ({ problem }: { problem: ProblemOverview }) => {
    const navigate = useNavigate();

    return (
        <tr onClick={() => navigate(`/problema/${problem.name}`)}>
            <td>{problem.id}</td>
            <td>{problem.name}</td>
            <td>{problem.difficulty}</td>
        </tr>
    );
}