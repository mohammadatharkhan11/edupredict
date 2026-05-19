# edupredict
AI-Powered Student Performance Analytics Platform — predict academic outcomes using Machine Learning &amp; LLMs
# EduPredict 🎓

An AI-Powered full-stack educational analytics platform designed 
to identify at-risk students and provide actionable academic 
guidance through Machine Learning and Large Language Models (LLMs).

## 🚀 Features

- **Student Performance Prediction** — Random Forest Classifier 
  predicts Pass/Fail with probability percentage and estimated 
  final score (G3)
- **AI-Powered Insights** — GPT-4o, Llama 3, and Mistral generate 
  personalised academic recommendations
- **CSV Bulk Upload** — Upload entire class datasets via PapaParse 
  for bulk analysis
- **Interactive Dashboard** — Real-time Recharts visualizations 
  for grade distributions and feature importance
- **Model Portability** — Save and load trained models as JSON files

## 💻 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite, Tailwind CSS, Framer Motion |
| Backend | Node.js, Express, TypeScript |
| ML | ml-random-forest |
| AI/LLM | GitHub Marketplace AI API, Azure AI Inference SDK |
| Data | PapaParse, Recharts, Lucide React |

## ⚙️ Installation

clone the repository
git clone https://github.com/yourusername/EduPredict.git

install dependencies
cd EduPredict
npm install

create .env file
cp .env.example .env
Add your GITHUB_TOKEN in .env

run the application
npm run dev

## 🔑 Environment Variables
GITHUB_TOKEN=your_github_marketplace_token

## 📊 How It Works
1. Upload student CSV data or use manual sliders
2. Train the Random Forest model on your dataset
3. Get Pass/Fail predictions with probability scores
4. Select an AI model for personalised academic recommendations
5. View insights on the interactive dashboard

## 👨‍💻 Developer
Mohammad Athar Khan
B.Tech Computer Science
Shri Vaishnav Institute of Information Technology, Indore
Enrollment No.: 21100BTCSFBI09649

## 📄 License
MIT License
