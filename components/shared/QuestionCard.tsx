import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Badge } from 'lucide-react';
  
  interface Props {
    title: string     
    tags: string;
    profile:{
        picture: string;
        name: string;
    };
    timestamp: string;
    social: {
        likes?: number, 
        answers?: number, 
        views: number};
  };


  const QuestionCard = ({title, tags, profile, timestamp, social }: Props) => {  return (
    <div>
                <Card className = "subtle-medium background-light800_dark300 text-light400_light500 border-sm rounded-xl px-4 py-2 uppercase" >
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>
              <Badge> {tags} </Badge>  
                </CardDescription>
        </CardHeader>
        <CardFooter>
        <p>{profile.picture} {profile.name} - asked {timestamp} ago </p>
        <p>{social.likes} Votes {social.answers} Answers {social.views} Views</p>
        </CardFooter>
        </Card>



    </div>
  )
}

export default QuestionCard