

export const SpaceDisplayQuestions: React.FunctionComponent = () => {
    const questionsList = [
        'Who are you / what are you working on?',
        'How has our product / service helped you?',
        'What is the best thing about our product / service?'
    ];
    return (
        <div className="w-full px-4 py-4 text-left mx-auto">
            <h3 className="text-lg leading-6 font-semibold text-gray-600 uppercase mb-2">QUESTIONS</h3>
            <div className="w-10 mb-4 border-b-4" style={{ borderColor: "rgb(93, 93, 255)" }}></div>
            <ul className="mt-2 max-w-xl text-base list-disc pl-4 text-gray-500">
                {questionsList.map((question : string, index:number) => (
                    <li key={index}>{question}</li>
                ))}
            </ul>
        </div>
    )
}