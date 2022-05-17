console.log(process.env);

export const fetchFromCockpit = async (method, path) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${path}`, {
      method,
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const responseBody = await response.json();
    return responseBody;
  } catch (error) {
    console.error(error);
  }
};
