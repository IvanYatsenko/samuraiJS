export const State = {
  usersData: [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
    { id: 4, name: 'User 4' },
  ],
  postsData: [
    { id: 1, text: 'Posts 1', likesCount: 10 },
    { id: 2, text: 'Posts 2', likesCount: 20 },
    { id: 3, text: 'Posts 3', likesCount: 30 },
    { id: 4, text: 'Posts 4', likesCount: 40 },
  ],
  messagesData: ['Message 1', 'Message 2', 'Message 3', 'Message 4'],
}

export const addPost = (postText) => {
  const newPost = {
    id: State.postsData.length,
    text: postText,
    likesCount: 0,
  }
  State.postsData.push(newPost)
}
