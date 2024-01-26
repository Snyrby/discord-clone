import axios from "axios";

export const deleteValue = async (id: string) => {
  await axios.delete("/api/uploadthing", {
    data: {
        url: id,
    },
  });
};
