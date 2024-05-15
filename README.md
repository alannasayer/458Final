Alanna Sayer
2410416
asayer@chapman.edu
Please open code on VS Code, run "npm run dev" , and then go to the local host website depicted in terminal.


Website Design Principles
Color Palette:
- Light blue background for a clean and inviting look.
- Darker colors for text and links for good contrast and readability.
- Button colors such as dark blue for primary actions to draw attention.

Fonts:
- "Helvetica Neue", Helvetica, Arial, sans-serif for a modern, clean, and professional look.

Layout:
- Centralized text and content for easy readability.
- Consistent padding and margins for a balanced and uncluttered layout.
- Use of boxes and cards to organize information clearly.

Purpose of the Site

The purpose of the website is to help parents and children in South Orange County keep track of youth sports events. It provides schedules for games, practices, and team meetings, making it easier for families to manage their time and ensure they don't miss important activities. The site exists to centralize all youth sports information in one place, offering convenience and efficiency for the community.

Responsive Design

The site is designed to be responsive and looks good on multiple screen sizes. The layout adjusts to different screen widths, ensuring that content is accessible and readable on devices ranging from mobile phones to desktop monitors.

Netlify URL

STILL NEED TO UPDATE

State Management

The site uses React's `useState` hook to keep track of user interactions. Examples include:
- Tracking the selected date on the calendar.
- Managing the list of events added to the user's calendar.
- Handling search terms and filtering sports data based on user input.

Data Fetching

Internal Source:
- The site fetches data from internal sources, local JSON files (`sportsData.json`) to populate sports events and schedules.


Data Persistence
 All data management and state tracking are handled within the React application itself.

Summary of Implementation

- **Design**: Light blue background, modern fonts, centralized content layout.
- **Purpose**: To help manage and track youth sports schedules.
- **Responsiveness**: Designed to look good on various screen sizes.
- **Netlify Deployment**: URL provided upon deployment.
- **State Management**: Uses React `useState` for handling interactions.
- **Data Source**: Internal JSON file for sports data.
- **Data Persistence**: No third-party persistence; all managed within the app.




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.




