import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableQuestion from './DraggableQuestion';
import { useDispatch } from 'react-redux';
import { updateSpaceInfo } from '../features/createModalSpaceSlice';
import { Question } from '../models/models';



const QuestionsContainer: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>([
        { id: 1, text: 'Who are you / what are you working on?' },
        { id: 2, text: 'How has our product / service helped you?' },
        { id: 3, text: 'What is the best thing about our product / service?' },
    ]);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(updateSpaceInfo({questions}))
    }, [questions, dispatch])

    const moveQuestion = (dragIndex: number, hoverIndex: number) => {
        const newQuestions = [...questions];
        const [draggedQuestion] = newQuestions.splice(dragIndex, 1);
        newQuestions.splice(hoverIndex, 0, draggedQuestion);
        setQuestions(newQuestions);
    };

    const updateQuestionText = (id: number, newText: string) => {
        const questionIndex = questions.findIndex(q => q.id === id);
        if (questionIndex !== -1) {
            const updatedQuestions = [...questions];
            updatedQuestions[questionIndex] = {
                ...updatedQuestions[questionIndex],
                text: newText,
            };
            setQuestions(updatedQuestions);
        }
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
                        moveQuestion={moveQuestion}
                        maxLength={100}
                        updateQuestionText={updateQuestionText}
                    />
                ))}
            </div>
        </DndProvider>
    );
};

export default QuestionsContainer;
