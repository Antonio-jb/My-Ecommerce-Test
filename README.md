# E-commerce AI Feature Test

## Description  
This project is a simple e-commerce product catalog app featuring a basic search filter and an AI-enhanced functionality to improve user experience.

---

## Main Features

- Static display of 8–12 products with fields:  
  - Name  
  - Price  
  - Category  
  - Description  
  - Rating  
  - Image

- Basic local text filter that interprets user queries to detect category, max price, and minimum rating, simulating a smart search.

---

## Implemented AI Feature

**Option A – Smart Product Search (Simulated NLP):**  
A local function interprets user search input and filters products by category, maximum price, and rating. This is a rule-based simulation of natural language processing without using the OpenAI API, due to time constraints.

---

## How to Run the App

1. Clone or download the repository.  
2. Install dependencies:  
   run npm install
3. Start the development server:
   run npm start
4. Open your browser at:
   http://localhost:3000

---

## Tools and Libraries Used

- React + TypeScript  
- CSS-in-JS for simple styling  
- Static JSON for product data  
- Filtering logic implemented in React (no backend)  

---

## Assumptions and Notes

- The AI feature is rule-based and does not connect to real NLP or ML models.  
- Data is static and not fetched from an external API.  
- Product images load from public URLs or the local `public` folder.  
- Focus was on implementing a basic natural language style search filter for this test.  

---

## Bonus (Blockchain Integration Idea)

This AI feature could integrate with blockchain to enable:  

- Token-gated pricing where token holders get AI-driven dynamic discounts.  
- On-chain user preferences to personalize recommendations while preserving privacy.  
- Smart contracts for loyalty programs rewarding AI interactions or repeat purchases.  
