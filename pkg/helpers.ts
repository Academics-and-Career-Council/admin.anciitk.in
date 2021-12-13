export const toTitleCase = (str: string) => {
  return str.replace(/\w\S*/g, (txt: string) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const getAddData = (addData: any) => {
  const data = {
    name: addData.name,
    category: "GDRIVE",
    link: addData.link,
  };
  let heading: string;
  let exists: boolean;
  if (addData.headingDrop === undefined) {
    heading = addData.headingInput;
    exists = false;
  } else {
    heading = addData.headingDrop;
    exists = true;
  }
  return { data, heading, exists };
};

export const getEditData = (formValues: any, givenData: any) => {
  const data = {
    name: formValues.name,
    category: givenData.category,
    link: formValues.link,
  };
  const id = givenData.id;
  return { data, id };
};
