import axios from "axios";

export const deleteValue = async (id?: string) => {
  if (id) {
    await axios.delete("/api/uploadthing", {
      data: {
          url: id,
      },
    });
  }
};
