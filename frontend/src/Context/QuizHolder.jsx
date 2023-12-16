import React, { useState, createContext, useContext } from 'react';

const QuizContext = createContext();

const quizzes ={ 
  english :  [
 {
     "question": "What is the scientific name of a butterfly?",
     "a": "Apis",
     "b": "Coleoptera",
     "c": "Formicidae",
     "d": "Rhopalocera",
     "correct": "d"
 },
 {
     "question": "How hot is the surface of the sun?",
     "a": "1,233 K",
     "b": "5,778 K",
     "c": "12,130 K",
     "d": "101,300 K",
     "correct": "b"
 },
 {
     "question": "Who are the actors in The Internship?",
     "a": "Ben Stiller, Jonah Hill",
     "b": "Courteney Cox, Matt LeBlanc",
     "c": "Kaley Cuoco, Jim Parsons",
     "d": "Vince Vaughn, Owen Wilson",
     "correct": "d"
 },
 {
     "question": "What is the capital of Spain?",
     "a": "Berlin",
     "b": "Buenos Aires",
     "c": "Madrid",
     "d": "San Juan",
     "correct": "c"
 },
 {
     "question": "What are the school colors of the University of Texas at Austin?",
     "a": "Black, Red",
     "b": "Blue, Orange",
     "c": "White, Burnt Orange",
     "d": "White, Old gold, Gold",
     "correct": "c"
 },
 {
     "question": "What is 70 degrees Fahrenheit in Celsius?",
     "a": "18.8889",
     "b": "20",
     "c": "21.1111",
     "d": "158",
     "correct": "c"
 },
 {
     "question": "When was Mahatma Gandhi born?",
     "a": "October 2, 1869",
     "b": "December 15, 1872",
     "c": "July 18, 1918",
     "d": "January 15, 1929",
     "correct": "a"
 },
 {
     "question": "How far is the moon from Earth?",
     "a": "7,918 miles (12,742 km)",
     "b": "86,881 miles (139,822 km)",
     "c": "238,400 miles (384,400 km)",
     "d": "35,980,000 miles (57,910,000 km)",
     "correct": "c"
 },
 {
     "question": "What is 65 times 52?",
     "a": "117",
     "b": "3120",
     "c": "3380",
     "d": "3520",
     "correct": "c"
 },
 {
     "question": "How tall is Mount Everest?",
     "a": "6,683 ft (2,037 m)",
     "b": "7,918 ft (2,413 m)",
     "c": "19,341 ft (5,895 m)",
     "d": "29,029 ft (8,847 m)",
     "correct": "d"
 },
 {
     "question": "When did The Avengers come out?",
     "a": "May 2, 2008",
     "b": "May 4, 2012",
     "c": "May 3, 2013",
     "d": "April 4, 2014",
     "correct": "b"
 },
 {
     "question": "What is 48,879 in hexidecimal?",
     "a": "0x18C1",
     "b": "0xBEEF",
     "c": "0xDEAD",
     "d": "0x12D591",
     "correct": "b"
 }
],

hindi : [
 {
     "question": "एक तितली का वैज्ञानिक नाम क्या है?",
     "a": "एपिस",
     "b": "कोलेओप्टेरा",
     "c": "फॉर्मिसिडे",
     "d": "रोपालोसेरा",
     "correct": "d"
   },
   {
     "question": "सूरज की सतह कितनी गरम है?",
     "a": "1,233 K",
     "b": "5,778 K",
     "c": "12,130 K",
     "d": "101,300 K",
     "correct": "b"
   },
   {
     "question": "कौन सा तारा सौरमंडल का सबसे बड़ा है?",
     "a": "सूर्य",
     "b": "बृहस्पति",
     "c": "शुक्र",
     "d": "शनि",
     "correct": "a"
   },
   {
     "question": "भारत की सबसे ऊंची चोटी कौन सी है?",
     "a": "कांचेंजंगा",
     "b": "नंदादेवी",
     "c": "धौलागिरी",
     "d": "कैलास",
     "correct": "a"
   },
   {
     "question": "रामायण में कौन सा चरित्र अयोध्या के राजा थे?",
     "a": "दशरथ",
     "b": "भरत",
     "c": "शत्रुघ्न",
     "d": "लक्ष्मण",
     "correct": "a"
   }
   
] ,

kannada: [
 {
   "question": "ಹಕ್ಕಿಯ ವೈಜ್ಞಾನಿಕ ಹೆಸರು ಯಾವುದು?",
   "a": "ಏಪಿಸ್",
   "b": "ಕೊಲಿಯೊಪ್ಟೇರಾ",
   "c": "ಫಾರ್ಮಿಸಿಡೇ",
   "d": "ರೊಪಲೊಸೆರಾ",
   "correct": "d"
 },
 {
   "question": "ಸೂರ್ಯನ ತ್ವರಣ ಕ್ರಮ ಗೊತ್ತಿದೆಯೇ?",
   "a": "1,233 K",
   "b": "5,778 K",
   "c": "12,130 K",
   "d": "101,300 K",
   "correct": "b"
 },
 {
   "question": "ನಮ್ಮ ಸೌರ ಮಂಡಲದ ಯಾವ ತಾರೆ ಗಳಲ್ಲಿ ಅಗತ್ಯವಾದ ಅತಿ ಗೊಂಚಲದ ಚಲನೆ ಇರುವುದು?",
   "a": "ಸೂರ್ಯ",
   "b": "ಬೃಹಸ್ಪತಿ",
   "c": "ಶುಕ್ರ",
   "d": "ಶನಿ",
   "correct": "a"
 },
 {
   "question": "ಭಾರತದ ಎತ್ತರವಾದ ಶಿಖರವೇನು?",
   "a": "ಕಾಂಚನಗಿರಿ",
   "b": "ನಂದಾದೇವಿ",
   "c": "ಧೌಲಾಗಿರಿ",
   "d": "ಕೈಲಾಸ",
   "correct": "a"
 },
 {
   "question": "ರಾಮಾಯಣದಲ್ಲಿ ಯಾವ ಪಾತ್ರದ ಬಗ್ಗೆ ಮಾಹಿತಿ ಸಿಗುತ್ತದೆ?",
   "a": "ದಶರಥ",
   "b": "ಭರತ",
   "c": "ಶತ್ರುಘ್ನ",
   "d": "ಲಕ್ಷ್ಮಣ",
   "correct": "a"
 }
 
],

};

const QuizProvider = ({ children }) => {
  const [start, setStart] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [quizzesData, setQuizzesData] = useState(quizzes);

  const startQuiz = () => {
    const loadedQuizzes = loadQuizzes(selectedLanguage);
    setQuizzesData(loadedQuizzes);
    setCorrect(0);
    setStart(true);
  };

  const loadQuizzes = (language) => {
    return quizzes[language] || quizzes['english'];
  };

  const value = {
    start,
    quizzes: quizzesData, // Changed to use quizzesData
    correct,
    setStart,
    startQuiz,
    selectedLanguage,
    setSelectedLanguage,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

export { QuizProvider, useQuiz, QuizContext };
