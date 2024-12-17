import React, { useRef, useState } from 'react';
import { useDrag, useDrop, DragSourceMonitor, XYCoord } from 'react-dnd';
import { DraggableQuestionProps, DragItem } from '../models/models';



const DraggableQuestion: React.FC<DraggableQuestionProps> = ({ id, initialText, index, moveQuestion, maxLength, updateQuestionText }) => {
    const [text, setText] = useState(initialText);
    const ref = useRef<HTMLDivElement>(null);

    const [{ isDragging }, drag] = useDrag({
        type: "question",
        item: () => ({ type: "question", id, index }),
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, drop] = useDrop<DragItem, void, { handlerId: string | null }>({
        accept: "question",
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();

            if (!clientOffset) return;

            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

            if ((dragIndex < hoverIndex && hoverClientY < hoverMiddleY) ||
                (dragIndex > hoverIndex && hoverClientY > hoverMiddleY)) {
                return;
            }

            moveQuestion(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    drag(drop(ref));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newText = e.target.value;
        setText(newText);
        updateQuestionText(id, newText);
    };

    return (
        <div
            ref={ref}
            className={`flex items-center bg-transparent justify-between pb-2 pt-2 mb-2 rounded-lg cursor-pointer ${isDragging ? 'opacity-50' : 'opacity-100'} transition duration-150 ease-in-out`}
        >
            <div className="flex flex-grow items-center bg-transparent">
                <div
                    style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-600 hover:text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path        
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
                        </path>
                    </svg>
                </div>

                <input
                    type="text"
                    value={text}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-700 pr-20"
                    maxLength={maxLength}
                />

                <div className="inset-y-0 right-0 ml-3 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">
                        {`${text.length}/${maxLength}`}
                    </span>
                </div>

            </div>
        </div>
    );
};

export default DraggableQuestion;
