import React, { useEffect } from "react"
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import { ProblemStatement } from "../types/problem";
import { GetProblemStatement } from "../api/probleme";
import { Spinner, SpinnerSize } from "@blueprintjs/core";

interface ProblemaStatementQueryParams {
    numeProblema: string,
    [key: string]: string | undefined; // Index signature
}

export const Problema = () => {
    const { numeProblema } = useParams<ProblemaStatementQueryParams>();
    const  [problemStatement, setProblemStatement] = React.useState<ProblemStatement | undefined>(undefined);

    useEffect(() => {
        // Fetch the problem statement here
        GetProblemStatement(numeProblema || "").then((problemStatement) => {
            setProblemStatement(problemStatement);
        })
    }, [numeProblema]);


    if (problemStatement === undefined) {
        return <div style={{
            height: "100%",
            width: "100%",
            padding: "10px",
        }}>
            <Spinner size={SpinnerSize.LARGE} intent="primary" style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}/>
        </div>
    }

    return <div style={{
        height: "100%",
        width: "100%",
        padding: "10px",
    }}>
        <Markdown>{problemStatement.statement}</Markdown>
    </div>
}