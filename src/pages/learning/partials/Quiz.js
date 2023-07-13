import clsx from 'clsx';
import React, { useState } from 'react';
import { withLearning } from '../hoc';

const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        answer: 'Paris',
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Venus', 'Jupiter', 'Mercury'],
        answer: 'Mars',
    },
    {
        question: 'Who painted the Mona Lisa?',
        options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
        answer: 'Leonardo da Vinci',
    },
    {
        question: 'What is the largest ocean on Earth?',
        options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
        answer: 'Pacific Ocean',
    },
    {
        question: 'Which country is home to the tallest mountain, Mount Everest?',
        options: ['Nepal', 'China', 'India', 'Tibet'],
        answer: 'Nepal',
    },
    {
        question: 'What is the chemical symbol for gold?',
        options: ['Au', 'Ag', 'Fe', 'Cu'],
        answer: 'Au',
    },
    {
        question: 'Which animal is known as the "King of the Jungle"?',
        options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
        answer: 'Lion',
    },
    {
        question: 'What is the largest organ in the human body?',
        options: ['Skin', 'Heart', 'Brain', 'Liver'],
        answer: 'Skin',
    },
    {
        question: 'Which city hosted the 2016 Summer Olympics?',
        options: ['Rio de Janeiro', 'London', 'Tokyo', 'Paris'],
        answer: 'Rio de Janeiro',
    },
    {
        question: 'Which country is known as the Land of the Rising Sun?',
        options: ['Japan', 'China', 'Korea', 'Vietnam'],
        answer: 'Japan',
    },
    {
        question: 'What is the chemical symbol for oxygen?',
        options: ['O', 'H', 'C', 'N'],
        answer: 'O',
    },
    {
        question: 'Who wrote the novel "Pride and Prejudice"?',
        options: ['Jane Austen', 'William Shakespeare', 'Charles Dickens', 'Mark Twain'],
        answer: 'Jane Austen',
    },
    {
        question: 'Which country is famous for the Great Wall?',
        options: ['China', 'USA', 'Italy', 'Egypt'],
        answer: 'China',
    },
    {
        question: 'What is the largest land animal?',
        options: ['Elephant', 'Giraffe', 'Hippopotamus', 'Rhinoceros'],
        answer: 'Elephant',
    },
    {
        question: 'Who is the author of "To Kill a Mockingbird"?',
        options: ['Harper Lee', 'F. Scott Fitzgerald', 'J.D. Salinger', 'Mark Twain'],
        answer: 'Harper Lee',
    },
];

const QuestionList = ({ currentQuestion, setCurrentQuestion }) => {
    return (
        <div className="flex flex-wrap gap-5">
            {questions.map((_, index) => (
                <button
                    key={index}
                    className={clsx(`w-8 h-8 rounded flex items-center justify-center text-sm font-semibold`, currentQuestion === index ? 'bg-blue-500 text-white' : 'bg-gray-200')}
                    onClick={() => setCurrentQuestion(index)}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [quizFinished, setQuizFinished] = useState(false);

    const handleAnswer = (option) => {
        setSelectedOption(option);

        if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setQuizFinished(true);
        }
    };

    const handleSubmit = () => {
        console.log('hi', quizFinished)
        setQuizFinished(true);
    };

    return (
        <div className="mx-auto px-4 flex mt-10">
            <div className="flex-grow pr-10">
                <h1 className="text-2xl font-bold mb-4">Quiz</h1>
                {!quizFinished ? (
                    <>
                        <h2 className="text-lg mb-2">
                            Question {currentQuestion + 1}/{questions.length}
                        </h2>
                        <p className="mb-4">{questions[currentQuestion].question}</p>
                        <ul className="space-y-2">
                            {questions[currentQuestion].options.map((option, index) => (
                                <li
                                    key={index}
                                    className={`p-2 rounded-md ${selectedOption === option && currentQuestion === index
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200 hover:bg-gray-300 cursor-pointer'
                                        }`}
                                    onClick={() => handleAnswer(option)}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>

                    </>
                ) : (
                    <p>Quiz finished. Final score: {score}</p>
                )}
            </div>
            <div className="w-1/4 max-w-[300px] p-3 flex flex-col justify-between">
                <QuestionList
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                />
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default withLearning(Quiz);
