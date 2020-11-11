import { constants } from "buffer";

interface Configuration {
  backendUrl: string;
}

const config: Configuration = {
  backendUrl: process.env.REACT_APP_BACKEND_URL || "https://eeme.herokuapp.com",
};
export default config;
