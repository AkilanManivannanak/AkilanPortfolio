import { TechnosList } from '@constants';
import { Project, ProjectContext, ProjectType } from '@models';

export const stockForecastingProject: Project = {
  title: 'Stock Forecasting System (AAPL) — LSTM + Strictly-Grounded RAG Copilot',
  picture: '/project-covers/AAPL_RAG_cover.png',
  placeholder: '/project-covers/AAPL_RAG_cover.png',
  slogan: 'Production-style AAPL time-series forecasting with a strictly-grounded RAG copilot',
  description: `A production-style AAPL time-series forecasting pipeline that starts with strong baselines and an LSTM (Keras/TensorFlow) using a chronological train/val/test split, then exports reproducible artifacts (metrics leaderboard + plots + experiment report) and serves forecasts via FastAPI.

Includes a strictly grounded RAG copilot (Chroma vector store + embeddings + Ollama) that answers only from indexed docs and returns "Not found in docs." when the info isn't explicitly present.

Technical Stack:
- Language / Data: Python, pandas, numpy
- Data source: yfinance (Yahoo Finance OHLCV)
- Modeling: TensorFlow, Keras, scikit-learn
- Serving: FastAPI, Uvicorn, Pydantic
- RAG: LangChain, ChromaDB, sentence-transformers, Ollama (llama3.1)
- Testing / Viz: pytest, matplotlib, httpx, tabulate
- DevOps: Dockerfile + Makefile`,
  duration: 2,
  logo: 'stockforecasting.svg',
  videos: [],
  year: 2024,
  links: [
    {
      title: 'GitHub Repository',
      link: 'https://github.com/AkilanManivannanak/stock-forecasting-aapl-LSTM-RAG',
    },
  ],
  type: [ProjectType.App],
  context: ProjectContext.Personal,
  id: 'stockrag1',
  technos: [
    TechnosList.Python,
    TechnosList.TensorFlow,
    TechnosList.Keras,
    TechnosList.RAG,
    TechnosList.LangChain,
    TechnosList.ChromaDB,
    TechnosList.FastAPI,
    TechnosList.Pytest,
  ],
};
