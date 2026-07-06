# Ottilie Tuft — Commission Tracker

A simple internal tool for tracking custom rug commission requests for **Ottilie Tuft**, a handmade tufted rug business. Built as part of the Software Persona / TNC Group Professional Development Program (Web Development / JavaScript track).

## Description

This app lets you log incoming rug commission requests, track their progress through three stages (Requested → In Progress → Completed), and remove them once fulfilled. Data persists locally in the browser via `localStorage`, so your commission list survives page refreshes.

**Features:**
- **Add** a new commission (customer name + rug design/theme)
- **List** all commissions as cards
- **Update** status by clicking the status pill (cycles through Requested / In Progress / Completed)
- **Delete** a commission with the × button

## Built With

- **React** 19 (via Vite)
- **Tailwind CSS** 4
- **localStorage** for persistence (no backend required)

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation & Running Locally

```bash
# Clone the repository
git clone https://github.com/youssefzuaiter/ottilie-tuft-tracker.git

# Move into the project folder
cd ottilie-tuft-tracker

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

## Screenshot

![Ottilie Tuft Commission Tracker](Youssef_Zuaiter_OttilieTuftTracker_Screenshot.png)
## Live Demo

Deployed via Netlify — [link here]

## Author

Youssef Zuaiter
