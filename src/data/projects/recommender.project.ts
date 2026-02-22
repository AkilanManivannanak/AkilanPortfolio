import { TechnosList } from '@constants';
import { Project, ProjectContext, ProjectType } from '@models';

export const recommenderProject: Project = {
  title: 'Two-Stage Recommender: ALS → LambdaRank Reranker',
  picture: '/project-covers/recommendation_cover.png',
  placeholder: '/project-covers/recommendation_cover.png',
  slogan: 'Netflix-style two-stage recommendation pipeline with CI quality gates',
  description: `Built a reproducible recommender pipeline on MovieLens that ingests interactions, time-splits data, trains an implicit ALS model for top-N candidate generation (reports candidate recall@50/200), then trains a LightGBM LambdaRank reranker with engineered user/item activity features.

Produces ranking reports (NDCG@10, MRR@10, Recall@10/50, Coverage@10) and runs automated gating checks in GitHub Actions to catch broken or regressing changes.

Technical Stack:
- pandas / numpy / scipy / pyarrow
- implicit (ALS)
- LightGBM (LambdaRank)
- FastAPI + Uvicorn + Pydantic
- GitHub Actions CI, bash scripts, Metaflow`,
  duration: 2,
  logo: 'recommender.svg',
  videos: [],
  year: 2024,
  links: [
    {
      title: 'GitHub Repository',
      link: 'https://github.com/AkilanManivannanak/two-stage-recommender-als-ranker-api',
    },
  ],
  type: [ProjectType.App],
  context: ProjectContext.Personal,
  id: 'recommender1',
  technos: [
    TechnosList.Python,
    TechnosList.FastAPI,
    TechnosList.ScikitLearn,
    TechnosList.Pandas,
    TechnosList.Metaflow,
    TechnosList.Pytest,
  ],
};
