A full-stack data science project that demonstrates MLOps, LLMOps, and automated data analysis. This pipeline automatically identifies high-risk customers, analyzes their complaints using an LLM, and creates a prioritized list for retention teams.


### Key Highlights:
* **MLOps:** A high-recall XGBoost churn model containerized with Docker and served via a FastAPI.
* **LLMOps:** Integration of Google Gemini API to classify theme and sentiment of user feedback.
* **Business Intelligence:** Calculates Priority score to create a risk-adjusted value for every at-risk customer, ensuring analysts focus time on most valuable and most at-risk customers.

### Core Technologies & Concepts:
* Python
* GenAI - Google Gemini API
* MLOps - XGboost model containerized in Docker and served via FastAPI
