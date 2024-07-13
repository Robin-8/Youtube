import React from "react";
import PersonIcon from "@mui/icons-material/Person";

const commentData = [
  {
    name: "Robin Shaji",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Robin Shaji",
        text: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
    ],
  },
  {
    name: "Robin Shaji",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Robin Shaji",
        text: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
          {
            name: "Robin Shaji",
            text: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Robin Shaji",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Robin Shaji",
        text: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
    ],
  },
  {
    name: "Robin Shaji",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Robin Shaji",
        text: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
 
  const { name, text, replies } = data;
  return (
    <div className="">
      <PersonIcon />

      <div className="bg-black text-white">
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  if(!comments) return null
  return (
    <div>
      {comments.map((comment, index) => (
        <Comment data={comment} key={index} />
      ))}
      <div>
        <div>
          <CommentList comments={comments.replies} />
       
        </div>
      </div>
   
    </div>
       
  );
};

const CommentContainer = () => {
  return (
    <div>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
