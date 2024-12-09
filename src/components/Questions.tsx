import React, { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableQuestion from './DraggableQuestion';
import { useDispatch, useSelector } from 'react-redux';
import { updateSpaceInfo, moveQuestion, updateQuestionText } from '../features/createModalSpaceSlice';
import { RootState } from '../app/store';

const QuestionsContainer: React.FC = () => {
    const questions = useSelector((state: RootState) => state.createSpaceModal.spaceInfo.questions);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateSpaceInfo({ questions }))
    }, [questions, dispatch])

    const handleMoveQuestion = (dragIndex: number, hoverIndex: number) => {
        dispatch(moveQuestion({ dragIndex, hoverIndex }));
    };

    const handleUpdateQuestionText = (id: number, newText: string) => {
        dispatch(updateQuestionText({ id, newText }));
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <label className='flex flex-row text-gray-700 text-sm font-medium mb-1'>Questions</label>
            <div className="flex flex-col pt-1">
                {questions.map((question, index) => (
                    <DraggableQuestion
                        key={question.id}
                        id={question.id}
                        index={index}
                        initialText={question.text}
                        moveQuestion={handleMoveQuestion}
                        maxLength={100}
                        updateQuestionText={handleUpdateQuestionText}
                    />
                ))}
            </div>
        </DndProvider>
    );
};

export default QuestionsContainer;
