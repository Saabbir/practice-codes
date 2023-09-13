import { v4 as uuidv4 } from "uuid";
import { GraphQLError } from "graphql";

const Mutation = {
  createUser(parent, args, { db }, info) {
    const isEmailTaken = db.users.some(
      (user) => user.email === args.data.email
    );

    if (isEmailTaken) {
      throw new GraphQLError("Email taken!");
    }

    const newUser = {
      id: uuidv4(),
      ...args.data,
    };

    db.users.push(newUser);

    return newUser;
  },
  createPost(parent, args, { db }, info) {
    const isUserExists = db.users.some((u) => u.id === args.data.author);

    if (!isUserExists) {
      throw new GraphQLError("User not found!");
    }

    const newPost = {
      id: uuidv4(),
      ...args.data,
    };

    db.posts.push(newPost);

    return newPost;
  },
  createComment(parent, args, { db }, info) {
    const isUserExists = db.users.some((u) => u.id === args.data.author);
    const isPostExists = db.posts.some((p) => p.id === args.data.post);

    if (!isUserExists) {
      throw new GraphQLError("User not found!");
    }

    if (!isPostExists) {
      throw new GraphQLError("Post not found!");
    }

    const newComment = {
      id: uuidv4(),
      ...args.data,
    };

    db.comments.push(newComment);

    return newComment;
  },
};

export default Mutation;
