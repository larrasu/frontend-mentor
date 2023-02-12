export interface User {
  image: string;
  name: string;
  username: string;
}

export interface Reply {
  content: string;
  user: User;
  replyingTo: string;
}

export interface Comment {
  id: number;
  content: string;
  user: User;
  replies: Reply[];
}

export interface Feedback {
  id: number;
  title: string;
  category: string;
  description: string;
  status: string;
  upvotes: number;
  upvotedBy: string[];
  comments: Comment[];
}
