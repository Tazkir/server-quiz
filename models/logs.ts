import mongoose, { Schema, Document, Model } from "mongoose";

interface IQuestions {
  question: string;
  userAnswer: string;
}

interface ILogs extends Document {
  name: string;
  score: number;
  userAnswer: IQuestions[];
  createdAt: Date;
  updatedAt: Date;
}

const questions: Schema<IQuestions> = new Schema({
  question: { type: String, required: true },
  userAnswer: { type: String, required: true },
});

const logsSchema: Schema<ILogs> = new Schema(
  {
    name: { type: String, required: true },
    score: { type: Number, required: true },
    userAnswer: {
      type: [questions],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Logs: Model<ILogs> =
  mongoose.models.Logs || mongoose.model<ILogs>("Logs", logsSchema);

export default Logs;
