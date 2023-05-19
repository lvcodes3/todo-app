# To Do App

Made with React - TypeScript.

Additional npm dependencies utilized: styled-components and react-modal.

Also utilizes the LinkNode and LinkedList data structure; The LinkNode holds a task as data
and holds a pointer to the next task or null; The LinkedList is a collection of the defined
LinkNodes and contains the methods: toArray(), getSize(), insertNode(), removeNode(),
updateNode(), and reverse().

## Features:

1. Insert a Task

2. Update a Task

3. Complete a Task

4. Clear Task List

5. Reverse Task List

6. Get Task List Size

All of the features utilize the functionalities of the LinkNode and LinkedList data structures.
The LinkedList is instantiated in the Controller component, which then passes it down by reference
to the sub-components that utilize it as well: TaskInput, TaskList, and TaskListButtons.
