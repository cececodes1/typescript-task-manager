export interface ValidationError {
    field: string;
    message: string;
  }
  
  /**
   * Validate a task form input.
   * @param title - The task title.
   * @param description - The task description.
   * @param dueDate - The task due date as a string.
   * @returns An array of validation errors, or an empty array if valid.
   */
  export function validateTaskForm(
    title: string,
    description: string,
    dueDate: string
  ): ValidationError[] {
    const errors: ValidationError[] = [];
  
    if (!title.trim()) {
      errors.push({ field: 'title', message: 'Title is required.' });
    } else if (title.length < 3) {
      errors.push({ field: 'title', message: 'Title must be at least 3 characters long.' });
    }
  
    if (!description.trim()) {
      errors.push({ field: 'description', message: 'Description is required.' });
    } else if (description.length < 10) {
      errors.push({ field: 'description', message: 'Description must be at least 10 characters long.' });
    }
  
    if (!dueDate) {
      errors.push({ field: 'dueDate', message: 'Due date is required.' });
    } else if (isNaN(Date.parse(dueDate))) {
      errors.push({ field: 'dueDate', message: 'Due date must be a valid date.' });
    }
  
    return errors;
  }
  
  /**
   * Validate user login input.
   * @param email - The user's email address.
   * @param password - The user's password.
   * @returns An array of validation errors, or an empty array if valid.
   */
  export function validateLoginForm(email: string, password: string): ValidationError[] {
    const errors: ValidationError[] = [];
  
    if (!email.trim()) {
      errors.push({ field: 'email', message: 'Email is required.' });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push({ field: 'email', message: 'Email must be a valid email address.' });
    }
  
    if (!password.trim()) {
      errors.push({ field: 'password', message: 'Password is required.' });
    } else if (password.length < 6) {
      errors.push({ field: 'password', message: 'Password must be at least 6 characters long.' });
    }
  
    return errors;
  }
  
  /**
   * Validate user registration input.
   * @param name - The user's name.
   * @param email - The user's email address.
   * @param password - The user's password.
   * @returns An array of validation errors, or an empty array if valid.
   */
  export function validateRegisterForm(
    name: string,
    email: string,
    password: string
  ): ValidationError[] {
    const errors: ValidationError[] = [];
  
    if (!name.trim()) {
      errors.push({ field: 'name', message: 'Name is required.' });
    } else if (name.length < 2) {
      errors.push({ field: 'name', message: 'Name must be at least 2 characters long.' });
    }
  
    errors.push(...validateLoginForm(email, password));
  
    return errors;
  }
  
  /**
   * Validate user reset password input.
   * @param email - The user's email address.
   * @returns An array of validation errors, or an empty array if valid.
   */
  export function validateResetPasswordForm(email: string): ValidationError[] {
    const errors: ValidationError[] = [];
  
    if (!email.trim()) {
      errors.push({ field: 'email', message: 'Email is required.' });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push({ field: 'email', message: 'Email must be a valid email address.' });
    }
  
    return errors;
  }
  