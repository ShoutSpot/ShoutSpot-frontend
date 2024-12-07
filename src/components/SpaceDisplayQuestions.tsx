import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Question } from "../models/models";


export const SpaceDisplayQuestions: React.FunctionComponent = () => {
    const questionsList: Question[] = useSelector((state: RootState) => state.createSpaceModal.spaceInfo.questions);
    const questionLabel = useSelector((state: RootState) => { return state.createSpaceModal.spaceInfo.questionLabel});

    return (
        <div className="w-full px-4 py-4 text-left mx-auto">
            <h3 className="text-lg leading-6 font-semibold text-gray-600 uppercase mb-2">{questionLabel ? questionLabel : 'QUESTIONS'}</h3>
            <div className="w-10 mb-4 border-b-4" style={{ borderColor: "rgb(93, 93, 255)" }}></div>
            <ul className="mt-2 max-w-xl text-base list-disc pl-4 text-gray-500">
                {questionsList?.map(({id, text}) => (
                    <li key={id}>{text}</li>
                ))}
            </ul>
        </div>
    )
}