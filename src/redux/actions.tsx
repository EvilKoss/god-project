export const myAction = {
  type: "MY_ACTION",
  payload: "super payload",
};

export const myAction2 = (value: number) => ({
  type: "MY_ACTION2",
  payload: "super payload2",
});

export const myAction3 = (value: number) => {
  return {
    type: "MY_ACTION3",
    payload: "super payload3",
  };
};

export const torniha = (value: number) => {
  return {};
};
