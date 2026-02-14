HearMe
Basic Details
Team Name: HackHive

Team Members

Member 1: Avanthika.c- MAMO

Member 2: Shana Subair - MAMO

Hosted Project Link
https://hear-me-two.vercel.app/

Project Description
HearMe is an interactive AI-powered emotional companion designed to provide a safe space for users to express their feelings. By using sentiment analysis, the application listens to user stories, identifies their emotional state, and provides personalized self-care tips and musical recommendations to improve their mental well-being.

The Problem Statement
In an increasingly fast-paced digital world, many individuals experience "emotional loneliness" or burnout but lack an immediate, non-judgmental outlet to vent or process their day. Traditional journaling can feel like a chore, and many people find it difficult to identify exactly what they need (a rest, a distraction, or a motivation boost) when they are overwhelmed.

The Solution
HearMe solves this by offering an empathetic digital interface that "hears" the user.



Instant Feedback: The app categorizes the "vibe" and offers immediate, scientifically-backed tips (like NSDR or Box Breathing).

Progress Tracking: A weekly mood tracker helps users visualize their emotional patterns over time, encouraging long-term mental health awareness.

Technical Details
Technologies/Components Used

Languages used: HTML5, CSS3, JavaScript (ES6+)

Frameworks used: React CSS (via CDN)

Libraries used: Web Speech API (Browser Native), LocalStorage API

Tools used: VS Code, Vercel (Deployment), Git

Features

Sentiment Analysis Engine: A custom-built keyword and regex-based logic that maps complex inputs to core emotional states (Radiant, Healing, Electric, Recovery, Steady).

Weekly Vibe Tracker: A persistence-based bar graph that tracks and displays the user's emotional journey over a 7-day period.

Dynamic Recommendations: Curated self-care actions and soundtracks tailored to the detected mood.

Responsive Glassmorphic UI: A modern, calming dark-mode interface designed for both desktop and mobile use.

Implementation
Installation
Since this is a frontend-only project, no heavy installation is required.

Clone the repository: git clone [your-repo-link]

Navigate to the folder: cd HearMe

Run

Open index.html directly in your browser.



Project Documentation
Screenshots

Main Interface: Showing the pulsing orb and story input area.

Analysis Results: Showing the mood badge, self-care tips, and song recommendations.

Weekly Tracker: Visualizing the 7-day emotional pulse graph.

Diagrams

System Architecture:

The system is a client-side application where the UI sends text/voice data to a logic controller. This controller determines the emotion and triggers a UI state change while simultaneously updating the browser's local database.

Application Workflow:

AI Tools Used
Tool Used: Gemini / ChatGPT

Purpose: Initial boilerplate for the sentiment logic and CSS animation refinements.

Key Prompts Used: "Create a modern dark-mode UI with Tailwind CSS," "Explain how to implement Web Speech API in vanilla JS," "Help debug the LocalStorage weekly graph mapping."




