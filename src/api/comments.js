import axios from "axios";

//댓글 가져오기
const getComments = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/comments`
  );
  return response.data;
};

//댓글 추가하기
const addComment = async (newComment) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/comments`, newComment);
  // console.log(newComment);
};

//댓글 삭제하기
const deleteComment = async (commentId) => {
  await axios.delete(
    `${process.env.REACT_APP_SERVER_URL}/comments/${commentId}`
  );
};

export { getComments, addComment, deleteComment };
