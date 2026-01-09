interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    // This will be generic as we don't know what data is coming
    const response = await fetch("https://jsonplaceholder.typicode.com/todo/1");
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data: Todo = await response.json();
  } catch (error: unknown) {
    // if (axios.isAxiosError(error)) {
    //   console.log("Axios Error", error.message);
    //   if (error.response) {
    //     console.log(error.response.status);
    //   }
    // }
  }
};
