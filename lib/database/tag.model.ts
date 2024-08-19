import {Schema, models, model, Document} from 'mongoose';
import QuestionsSchema from './question.model';

export interface ITag extends Document {
    name: string;
    description: string;
    questions: Schema.Types.ObjectId[];
    followers: Schema.Types.ObjectId[];
    createdAt: Date;
}

const TagsSchema = new Schema ({
    name: { type: String, required: true, unique: true},
    description: { type: String, required: true},
    questions: [{type: Schema.Types.ObjectId, ref: 'Question'}],
    followers: [{type: Schema.Types.ObjectId, ref: 'User'}],
    createdAt: {type: Date, default: Date.now}
})

const Tag = models.Tag || model('Tag', TagsSchema);

export default Tag;

