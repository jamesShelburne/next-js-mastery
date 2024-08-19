import {Schema, models, model, Document} from 'mongoose';

export interface IUser extends Document {
    clerkId: string;
    name: string;
    username: string;
    email: string;
    password?: string;
    bio?: string;
    location?: string;
    picture: string;
    portfolioWebsite?: string;
    reputation?: number;
    saved: Schema.Types.ObjectId[];
    joinDate: Date;
}

const UserSchema = new Schema ({
   name: { type: String, required: true},
   username: { type: String, required: true, unique: true},
   email: { type: String, required: true, unique: true},
    password: { type: String, required: false},
    bio: { type: String, required: false},
    location: { type: String, required: false},
    picture: { type: String, required: false},
    portfolioWebsite: { type: String, required: false},
    saved: [{ type: Schema.Types.ObjectId, ref: 'Question'}],
    reputation: { type: Number, default: 0},
    joinDate: { type: Date, default: Date.now}
})

const User = models.User || model('User', UserSchema);

export default User;

