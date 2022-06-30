//Check the following object and solve the requirements.

// - access the value of Sarah's children and the value of Samuel's children
// - add a child for Samuel named Sam that has two children Marry and Gwen
// - delete the children property from the people who don't have children
// HINT: read about the delete operator
const family = {
  name: "John",
  children: [
    {
      name: "Bill",
      children: [
        {
          name: "Mark",
          children: [],
        },
        {
          name: "Sarah",
          children: [
            {
              name: "Smith",
              children: [],
            },
            {
              name: "Stan",
              children: [],
            },
          ],
        },
        {
          name: "Samuel",
          children: [],
        },
      ],
    },
    {
      name: "Jane",
      children: [],
    },
  ],
};
family.children[0].children[1].children;
family.children[0].children[2].children;
family.children[0].children[2].children.push(
  {
    name: "Marry",
    children: [],
  },
  {
    name: "Gwen",
    children: [],
  }
);
