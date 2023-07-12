//axios 요청이 들어가는 모듈
import axios from "axios";

//할일 목록 가져오기
const getTodos = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
  // console.log("response🟡🟡", response);
  return response.data;
};

//할일 추가하기
const addTodo = async (newTodo) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo);
};

//할일 상세보기
const getDetailTodo = async (postId) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/todos/${postId}`
  );
  return response.data;
};

//할일 수정하기
const updateTodo = async (post) => {
  await axios.patch(
    `${process.env.REACT_APP_SERVER_URL}/todos/${post.id}`,
    post
  );
};

//할일 삭제하기
const deleteTodo = async (postId) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${postId}`);
};

export { getTodos, addTodo, deleteTodo, getDetailTodo, updateTodo };
