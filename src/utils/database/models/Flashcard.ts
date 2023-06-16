import mongoose, { Schema, Document } from "mongoose";

export interface IFlashcard extends Document {
  word: string;
  meaning: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
  image: string;
  categories: string[];
  partsOfSpeech: string[];
  level: string;
  phonetics: string;
}

const FlashcardSchema: Schema = new mongoose.Schema({
  word: { type: String, required: true },
  meaning: { type: String, required: true },
  example: { type: String, required: true },
  synonyms: [{ type: String }],
  antonyms: [{ type: String }],
  image: { type: String, required: true },
  categories: [{ type: String }],
  partsOfSpeech: [{ type: String }],
  level: { type: String, required: true },
  phonetics: { type: String, required: true },
});

export default mongoose.models.Flashcard ||
  mongoose.model<IFlashcard>("Flashcard", FlashcardSchema);
