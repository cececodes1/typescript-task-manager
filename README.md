
# **TypeScript Task Management Application**

This project is a **Task Management Application** built using **React** and **TypeScript**. It provides a robust solution for managing tasks with features like task creation, editing, deletion, and detailed views. It also includes authentication and authorization functionality, ensuring secure access to the application. The project leverages **Bootstrap** for styling, **Auth0** for authentication, and React’s **Context API** for state management.

---

## **Features**

### **Task Management**
- **Task Dashboard**: View a list of all tasks with options to manage them.
- **Task Details**: Access detailed information about individual tasks, with editing and deletion functionality.
- **Task Creation & Editing**: Create new tasks or edit existing ones with real-time validation.

### **Authentication and Authorization**
- **Login, Register, and Password Reset Pages**: Secure user authentication using Auth0.
- **Authorization**: Restricts access to certain features based on authentication state.

### **State Management**
- **Context API**: Manages global state and shares data between components efficiently.
- **Typed Hooks**: Custom hooks (`useAppContext`) for easier state access with TypeScript support.

### **TypeScript Integration**
- Strict type checking for all components, hooks, and utility functions.
- Enhanced maintainability and developer experience with TypeScript interfaces and types.

### **Error Handling and Validation**
- Real-time validation for all forms with detailed error messages.
- Utility functions in `utils/validation.ts` ensure consistent validation logic across the app.

---

## **Technologies Used**

### **Frontend**
- **React** with **TypeScript**
- **Bootstrap** for styling and layout

### **State Management**
- React’s **Context API**
- **useState** and **useReducer** hooks with TypeScript

### **Authentication**
- **Auth0** for secure user authentication and authorization

### **Other Tools**
- **Vite** for project setup and development

---


### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Auth0:
   - Create an application on the Auth0 dashboard.
   - Update the `.env` file with your Auth0 credentials:
     ```env
     VITE_AUTH0_DOMAIN=your-auth0-domain
     VITE_AUTH0_CLIENT_ID=your-auth0-client-id
     VITE_AUTH0_REDIRECT_URI=http://localhost:5173
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the app in your browser:
   ```
   http://localhost:5173
   ```

---

## **File Structure**

### **Context**
- **`AppContext.tsx`**: Manages global state using the React Context API.

### **Hooks**
- **`useTypedHooks.ts`**: Custom hooks for accessing context state with TypeScript support.

### **Pages**
- **`LoginPage.tsx`**: Login functionality with Auth0 integration.
- **`RegisterPage.tsx`**: Registration page for new users.
- **`ResetPasswordPage.tsx`**: Allows users to reset their password.

### **Components**
- **`TaskDashboard.tsx`**: Displays a list of tasks.
- **`TaskDetails.tsx`**: Shows detailed information about a single task.
- **`TaskForm.tsx`**: Handles task creation and editing.

### **Utils**
- **`validation.ts`**: Contains validation logic for forms.

---

## **Scripts**

- **`npm run dev`**: Starts the development server.

Feel free to customize this README with your details or project-specific changes!
