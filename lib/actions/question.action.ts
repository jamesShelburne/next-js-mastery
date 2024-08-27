"use server"

import { connectToDatabase } from "../mongoose"
import Question from "../database/question.model"
import Tag from "../database/tag.model"
import { createQuestionParams, GetQuestionsParams } from "./shared.types";
import User from "../database/user.model";
import { revalidatePath } from "next/cache";


export async function getQuestions(params: GetQuestionsParams){
    try {
        connectToDatabase();
        const questions = await Question.find({})
      .populate({ path: 'tags', model: Tag })
      .populate({ path: 'author', model: User })
      .sort({ createdAt: -1 })
        return {questions};
        
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export async function createQuestion(params: createQuestionParams){


    // eslint-disable-next-line no-empty
    try {
     connectToDatabase();
        const {title, content, tags, author, path} = params;
        // create the question
        const question = await Question.create({
            title,
            content,
            author,
            path
            
        });

        const tagDocuments = [];
        // get the tags
        for (const tag of tags){
            const existingTag = await Tag.findOneAndUpdate(
                {name: { $regex: new RegExp(`^${tag}$`, "i")}},
                {$setOnInsert: {name: tag}, $push: {question: question._id}},
                {upsert: true, new: true}
            )
            tagDocuments.push(existingTag._id);
        }
            await Question.findByIdAndUpdate(question._id, {$push: {tags: {$each: tagDocuments}}

    });
        // create an interaction record for the user's ask question action
        // increment reupation by 5 for creating a question
    revalidatePath(path);
    } catch (error) {
        
    }


}
