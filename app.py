from fastapi import FastAPI
from pydantic import BaseModel
from llm import get_solution

app = FastAPI()

class Query(BaseModel):
    question: str

@app.post("/solve")
def solve_problem(query: Query):
    return {"response": get_solution(query.question)}
