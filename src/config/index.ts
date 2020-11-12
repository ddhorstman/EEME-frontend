
interface Configuration {
  backendUrl: string;
}

export const config: Configuration = {
  backendUrl:
    process.env.REACT_APP_BACKEND_URL ||
    "https://cors-anywhere-citrics.herokuapp.com/https://eeme.herokuapp.com",
};
