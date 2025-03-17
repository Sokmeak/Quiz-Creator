# Quiz Creator

## Overview
This project is a **Quiz Creator** application built using **Next.js** and **React**. It allows users to create, manage, and take quizzes with an intuitive UI. The application includes features such as:
- Creating new quizzes with multiple questions and answer choices.
- Managing quizzes (editing and deleting questions).
- Taking quizzes and getting immediate feedback.
- Storing quiz data locally or in a database (depending on the implementation).

## Features
- **User-friendly UI**: Simple and clean interface for creating and taking quizzes.
- **State Management**: Uses React hooks for managing quiz state.
- **Next.js Integration**: Server-side rendering for better performance.
- **Responsive Design**: Works on different screen sizes.

## Installation
To run this project locally, follow these steps:

### Prerequisites
Make sure you have the following installed:
- **Node.js** (version 16 or later recommended)
- **npm** or **yarn**

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/Sokmeak/Quiz-Creator.git
   cd quiz-creator
   ```

2. Install dependencies:
   ```sh
   npm install --legacy-peer-deps
   ```
   (This resolves dependency conflicts that may arise.)

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Troubleshooting
If you encounter the `useRef only works in Client Components` error, open the file where `useRef` is used and add the following at the top:
```js
"use client";
```
Then restart the development server.

## Technologies Used
- **Next.js**
- **React**
- **Tailwind CSS** (if applicable)
- **Date-fns** (for handling dates in quizzes)

## Contributing
If you’d like to contribute:
1. Fork the repo
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Added new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

## License
This project is open-source and available under the [MIT License](LICENSE).

## Contact
For any issues, feel free to reach out or create an issue in the repository.

