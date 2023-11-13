# Full stack MERN Google Doc clone
This is a web application that allows users to create, edit, and delete documents online, just like Google Docs.

Technologies used:
- MongoDB
- Express
- React
- Node.js
- Quill (for text editing)
- Bootstrap

You can check out the live demo of this project <br>
frontend - https://6543bf42db3e720d89065e96--thriving-chimera-51d17c.netlify.app/ <br>
backend - https://google-doc-backend-9237.onrender.com/ <br>
(open both the links in seprate tabs)

![ezgif com-video-to-gif](https://github.com/rahulvsaxena/google-doc/assets/87803179/bbacc17d-6cf7-45ed-95fb-715539770684)

# Home Page
To display all the documents created by user along with option to edit and delete it
1. **Frontend (fetch data from backend + display the data)**
  - When the browser loads (using `useEffects`) a `get` request is sent using `axios` which fetches the data & this data is stored in `docs`
  - While displaying the document the link to `edit` & `delete` is set, how? `<Link to={/doc/edit/${doc._id}}/>`

![image](https://github.com/rahulvsaxena/google-doc/assets/87803179/a4c83e34-5281-4b6a-b201-1e3ec29b6332)
\
2. **Backend (get the data from the database)**
  - Using `Doc.find({})` (since the parameter is empty, it fetches all the data) we fetch all the data and is send to frontend

# Create Document
To create the document using title and data specified by user
1. **Frontend (take title and data from user + send to backend)**
  - Using `useState` the title and data is taken from user
  - A `post` request is send usinf the data to backend
2. **Backend (extracting user data + creating a new doc)**
  - User data is extracted using `request.body`
  - A new document is created using `Doc.create();` 
