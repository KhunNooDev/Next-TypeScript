import React, { useState } from "react";
import { HiVolumeUp } from "react-icons/hi";

export default function FlashCard() {
  const [currentCard, setCurrentCard] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const flashcards = [
    {
      word: "cat",
      meaning: "a small domesticated carnivorous mammal",
      example: "I have a pet cat named Whiskers.",
      synonyms: ["feline", "kitty"],
      antonyms: ["dog"],
      image: "https://via.placeholder.com/600x400",
      categories: ["Animals", "Pets"],
      partsOfSpeech: ["Noun"],
      level: "A1",
      phonetics: "/kæt/",
    },
    {
      word: "run",
      meaning: "to move swiftly on foot",
      example: "She likes to run in the park every morning.",
      synonyms: ["jog", "sprint"],
      antonyms: ["walk"],
      image: "https://via.placeholder.com/600x400",
      categories: ["Physical Activities"],
      partsOfSpeech: ["Verb", "Noun"],
      level: "B1",
      phonetics: "/rʌn/",
    },
    {
      word: "happy",
      meaning: "feeling or showing pleasure or contentment",
      example: "I am happy to see you.",
      synonyms: ["joyful", "delighted"],
      antonyms: ["sad", "unhappy"],
      image: "https://via.placeholder.com/600x400",
      categories: ["Emotions"],
      partsOfSpeech: ["Adjective"],
      level: "A2",
      phonetics: "/ˈhæpi/",
    },
  ];

  const handleNextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % flashcards.length);
    setShowDetails(false);
  };

  const handleTextToSpeech = (text: string) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(speech);
    } else {
      console.error("Text-to-speech is not supported in this browser.");
    }
  };

  const partsOfSpeechMapping = {
    Noun: "n.",
    Verb: "v.",
    Adjective: "adj",
    Adverb: "adv",
    Pronoun: "pron",
    Preposition: "prep",
    Conjunction: "conj",
    Interjection: "interj",
    // Add more mappings as needed
  };

  const displayPartsOfSpeech = (partsOfSpeech: string[]) => {
    return partsOfSpeech.map((pos) => partsOfSpeechMapping[pos]).join(", ");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-96 rounded bg-white px-8 py-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Flash Cards</h2>
        {flashcards.length > 0 ? (
          <div>
            <p className="mb-4 text-lg">
              Card {currentCard + 1} of {flashcards.length}
            </p>
            <img
              src={flashcards[currentCard].image}
              alt="Flash Card"
              className="mx-auto mt-4"
            />
            <div className="mb-4 flex items-center justify-center space-x-2">
              <div className="flex flex-col">
                <h1 className="text-center text-4xl font-bold">
                  {flashcards[currentCard].word +
                    " (" +
                    displayPartsOfSpeech(
                      flashcards[currentCard].partsOfSpeech
                    ) +
                    ")"}
                </h1>
                <h3 className="text-center text-2xl font-bold">
                  {flashcards[currentCard].phonetics}
                </h3>
              </div>

              <button
                className="rounded-full bg-blue-500 px-2 py-1 text-white"
                onClick={() => handleTextToSpeech(flashcards[currentCard].word)}
              >
                <HiVolumeUp size={20} />
              </button>
            </div>
            <p className="mb-2">{flashcards[currentCard].meaning}</p>
            {showDetails && (
              <div>
                <p className="mb-2">
                  <strong>Example:</strong> {flashcards[currentCard].example}
                </p>
                <p className="mb-2">
                  <strong>Synonyms:</strong>{" "}
                  {flashcards[currentCard].synonyms.join(", ")}
                </p>
                <p className="mb-2">
                  <strong>Antonyms:</strong>{" "}
                  {flashcards[currentCard].antonyms.join(", ")}
                </p>
                <p className="mb-2">
                  <strong>Categories:</strong>{" "}
                  {flashcards[currentCard].categories.join(", ")}
                </p>
                <p className="mb-2">
                  <strong>Level:</strong> {flashcards[currentCard].level}
                </p>
              </div>
            )}
            <div className="flex justify-between">
              <button
                className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 focus:outline-none"
                onClick={handleNextCard}
              >
                Next Card
              </button>
              <button
                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? "Hide Details" : "Show Details"}
              </button>
            </div>
          </div>
        ) : (
          <p>No flashcards available.</p>
        )}
      </div>
    </main>
  );
}
