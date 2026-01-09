// Type declaration files
// .d.ts -> Suggestions, hints and errors comes from these files only

// Axios
// import axios, { AxiosResponse } from "axios"; // Dont do AxiosResponse like this
import axios from "axios";
import type { AxiosResponse } from "axios"; // Explicitly saying we are importing type and not a functionality

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

axios.get("https://example.com/data").then((response) => {
  console.log(response.data);
});

// Types are required for package that is installed like @types/react, @types/node, etc.
// npm i -D some-library
// npm i -D @types/some-library
// If not provided by library, then we have to manually create a file some-library.d.ts and add types according the documentation of the library

const fetchData = async () => {
  try {
    // This will be generic as we don't know what data is coming
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todo/1"
    );
    console.log("Todo: ", response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log("Axios Error", error.message);
      if (error.response) {
        console.log(error.response.status);
      }
    }
  }
};
