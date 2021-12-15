import { getDataEdit_getResourcesByWing } from "../container/resource/__generated__/getDataEdit";
export const toTitleCase = (str: string) => {
  return str.replace(/\w\S*/g, (txt: string) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const getAddData = (addData: any, order: string, wing: string) => {
  const data = {
    name: addData.name,
    category: "GDRIVE", // category to be changed later
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
  return { data, heading, exists, order, wing };
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

export const getDeleteData = (
  // key: any,
  pos:string,
  objectId : string,
  data: getDataEdit_getResourcesByWing[]
) => {
  // const objectPositions = info.checkedNodesPositions.map((element: any) => {
  //   return { pos: element.pos, key: element.node.key };
  // });
  // let headingIndex: any = {};
  // const headingPositions = data.map((heading, index) => {
  //   headingIndex[`0-0-${index}`] = heading.id;
  //   return { pos: `0-0-${index}`, id: heading.id };
  // });
  // let objectIds = objectPositions.filter((item: any) => {
  //   return item.pos.split("-").length === 4;
  // });
  // let resourceFrame: any = {};
  // headingPositions.forEach((heading: any) => (resourceFrame[heading.pos] = []));
  // objectIds.forEach((object: any) => {
  //   const pos = object.pos.substr(0, 5);
  //   const arr = resourceFrame[pos];
  //   arr.push(object.key);
  //   resourceFrame[pos] = arr;
  // });
  // let delList: any = {};
  // for (const key in resourceFrame) {
  //   delList[headingIndex[key]] = resourceFrame[key];
  // }
  // objectIds = objectIds.map((item: any) => item.key);
  // console.log(objectIds);
  // console.log(delList);
  const headingId = data[parseInt(pos)].id
  return {headingId, objectId}
};
